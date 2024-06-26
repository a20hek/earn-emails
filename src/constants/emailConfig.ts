import {
  processAddPayment,
  processAnnounceWinners,
  processCommentReply,
  processCommentSponsor,
  processCommentSubmission,
  processCommentTag,
  processCreateListing,
  processDeadlineExceeded,
  processDeadlineExceededWeek,
  processDeadlineExtended,
  processDeadlineThreeDays,
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
  deadlineExceeded: 'deadlineSponsor',
  deadlineExceededWeek: 'deadlineSponsor',
} as const;

export const emailTypePriority: Record<EmailActionType, number> = {
  submissionTalent: 1,
  commentReply: 1,
  commentSponsor: 1,
  commentTag: 1,
  scoutInvite: 1,
  submissionSponsor: 2,
  announceWinners: 2,
  superteamWinners: 2,
  addPayment: 2,
  commentSubmission: 2,
  submissionLike: 2,
  deadlineExceededWeek: 2,
  deadlineExceeded: 2,
  deadlineExtended: 2,
  deadline3days: 3,
  createListing: 4,
  weeklyListingRoundup: 5,
};

export const emailProcessors: Record<EmailActionType, Function> = {
  addPayment: processAddPayment,
  announceWinners: processAnnounceWinners,
  commentReply: processCommentReply,
  commentTag: processCommentTag,
  commentSponsor: processCommentSponsor,
  commentSubmission: processCommentSubmission,
  createListing: processCreateListing,
  deadline3days: processDeadlineThreeDays,
  deadlineExceeded: processDeadlineExceeded,
  deadlineExceededWeek: processDeadlineExceededWeek,
  deadlineExtended: processDeadlineExtended,
  scoutInvite: processScoutInvite,
  submissionLike: processSubmissionLike,
  submissionSponsor: processSponsorSubmission,
  submissionTalent: processTalentSubmission,
  superteamWinners: processSuperteamWinners,
  weeklyListingRoundup: processWeeklyRoundup,
};
