import cron from 'node-cron';
import { getPriority, logicQueue } from '../utils';
import { EmailActionType } from '../types';

const scheduleJob = (time: string, type: EmailActionType) => {
  const priority = getPriority(type);

  cron.schedule(time, () => {
    console.log(`Triggering ${type} email job`);
    logicQueue.add('processLogic', { type }, { priority });
  });
};

scheduleJob('30 * * * *', 'deadline3days');
scheduleJob('45 * * * *', 'deadlineExceeded');
scheduleJob('50 * * * *', 'deadlineExceededWeek');
scheduleJob('55 * * * *', 'rolling15Days');
scheduleJob('56 * * * *', 'rolling30Days');
// scheduleJob('0 12 * * 4', 'weeklyListingRoundup');

cron.schedule('* * * * *', () => {
  console.log(`Triggering createListing email job`);
  logicQueue.add('processLogic', {
    type: 'createListing',
    id: 'e0fab02d-1947-44f7-b661-e483bdc71fff',
  });
});
