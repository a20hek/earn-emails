import {
  processAddPayment,
  processAnnounceWinners,
  processApplication,
  processApplicationApproval,
  processApplicationRejection,
  processCommentReply,
  processCommentSponsor,
  processCommentSubmission,
  processCommentTag,
  processCreateListing,
  processDeadlineExceeded,
  processDeadlineExceededWeek,
  processDeadlineExtended,
  processDeadlineThreeDays,
  processRollingProject15Days,
  processRollingProject30Days,
  processRollingProjectLegacy,
  processGrantPayment,
  processScoutInvite,
  processSponsorSubmission,
  processSubmissionLike,
  processSuperteamWinners,
  processTalentSubmission,
  processWeeklyRoundup,
} from '../handlers';
import { EmailActionType } from '../types';

export const emailActionCategoryMapping = {
  // talent emails
  createListing: 'createListing',
  commentSubmission: 'commentOrLikeSubmission',
  commentReply: 'replyOrTagComment',
  commentTag: 'replyOrTagComment',
  submissionLike: 'commentOrLikeSubmission',
  weeklyListingRoundup: 'weeklyListingRoundup',
  scoutInvite: 'scoutInvite',

  // sponsor emails
  commentSponsor: 'commentSponsor',
  submissionSponsor: 'submissionSponsor',
  application: 'submissionSponsor',
  deadlineExceeded: 'deadlineSponsor',
  deadlineExceededWeek: 'deadlineSponsor',
  rolling15Days: 'deadlineSponsor',
  rolling30Days: 'deadlineSponsor',
  rollingLegacy: 'deadlineSponsor',
} as const;

export const emailTypePriority: Record<EmailActionType, number> = {
  submissionTalent: 1,
  application: 1,
  commentReply: 1,
  commentSponsor: 1,
  commentTag: 1,
  scoutInvite: 1,
  submissionSponsor: 2,
  announceWinners: 2,
  superteamWinners: 2,
  addPayment: 2,
  grantPaymentReceived: 2,
  commentSubmission: 2,
  submissionLike: 2,
  deadlineExceededWeek: 2,
  deadlineExceeded: 2,
  deadlineExtended: 2,
  grantApproved: 2,
  grantRejected: 2,
  rolling15Days: 2,
  rolling30Days: 2,
  rollingLegacy: 2,
  deadline3days: 3,
  createListing: 4,
  weeklyListingRoundup: 5,
};

export const emailProcessors: Record<EmailActionType, Function> = {
  addPayment: processAddPayment,
  announceWinners: processAnnounceWinners,
  application: processApplication,
  commentReply: processCommentReply,
  commentSponsor: processCommentSponsor,
  commentSubmission: processCommentSubmission,
  commentTag: processCommentTag,
  createListing: processCreateListing,
  deadline3days: processDeadlineThreeDays,
  deadlineExceeded: processDeadlineExceeded,
  deadlineExceededWeek: processDeadlineExceededWeek,
  deadlineExtended: processDeadlineExtended,
  grantApproved: processApplicationApproval,
  grantPaymentReceived: processGrantPayment,
  grantRejected: processApplicationRejection,
  rolling15Days: processRollingProject15Days,
  rolling30Days: processRollingProject30Days,
  rollingLegacy: processRollingProjectLegacy,
  scoutInvite: processScoutInvite,
  submissionLike: processSubmissionLike,
  submissionSponsor: processSponsorSubmission,
  submissionTalent: processTalentSubmission,
  superteamWinners: processSuperteamWinners,
  weeklyListingRoundup: processWeeklyRoundup,
};
