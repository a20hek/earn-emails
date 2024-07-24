import { prisma } from '../../prisma';
import { render } from '@react-email/render';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { getUserEmailPreference } from '../../utils';
import { kashEmail } from '../../constants';
import { RollingLegacyTemplate } from '../../email-templates';

export async function processRollingProjectLegacy() {
  dayjs.extend(utc);

  const thirtyDaysAgoEnd = dayjs.utc().subtract(30, 'day').endOf('day');
  console.log(thirtyDaysAgoEnd);

  const listings = await prisma.bounties.findMany({
    where: {
      isPublished: true,
      isActive: true,
      isArchived: false,
      status: 'OPEN',
      publishedAt: {
        lt: thirtyDaysAgoEnd.toISOString(),
      },
      isWinnersAnnounced: false,
      type: 'project',
      applicationType: 'rolling',
    },
    include: {
      poc: true,
      sponsor: true,
    },
  });

  console.log(listings);

  const emailData = [];

  for (const listing of listings) {
    const pocPreference = await getUserEmailPreference(
      listing.pocId,
      'rollingLegacy',
    );

    if (!pocPreference) continue;

    const submissionCount = await prisma.submission.count({
      where: {
        listingId: listing.id,
      },
    });

    if (submissionCount === 0) continue;

    const emailHtml = render(
      RollingLegacyTemplate({
        name: listing.poc.firstName!,
        listingName: listing.title,
        link: `https://earn.superteam.fun/dashboard/listings/${listing?.slug}/submissions/?utm_source=superteamearn&utm_medium=email&utm_campaign=notifications`,
        sponsorName: listing.sponsor.name,
        applicationNumber: submissionCount,
      }),
    );

    emailData.push({
      from: kashEmail,
      to: listing.poc.email,
      subject: 'Good Time to Announce the Winner?',
      html: emailHtml,
    });
  }

  return emailData.filter(Boolean);
}
