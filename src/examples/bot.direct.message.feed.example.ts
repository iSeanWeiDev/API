import 'dotenv/config';
import { IgApiClient } from '../Api';
// import Bluebird = require('bluebird');

const ig = new IgApiClient();
ig.state.generateDevice(process.env.IG_USERNAME);
(async () => {
  await ig.simulate.preLoginFlow();

  // ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

  // const thread = ig.entity.directThread([userID.toString()]);
  // await thread.broadcastText('Where are you from?');

  // const directInboxFeed = await ig.feed.directInbox().items();
  // const wholeDirectInbox = await directInboxFeed.;
  // const unread = directInboxFeed.filter(x => x.read_state > 0);
  // // tslint:disable-next-line:no-console
  // console.log('wholeDirectInbox', unread);

  // const loggedInUser = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  // console.log('loggedInUser', loggedInUser)

  // const dmFeed = await ig.feed.directInbox();
  // const dmFeedItems = await dmFeed.items();
  // const dmThreadFeed = ig.feed.directThread(dmFeedItems[0]);

  process.nextTick(async () => await ig.simulate.postLoginFlow());

  const inbox = {
    pending: await ig.feed.directInbox().items(),
    /*requests: await ig.feed.directInbox().request(),
        records: await ig.feed.directInbox().records(),*/

    unread: [],
  };
  const userID = await ig.user.getIdByUsername(process.env.IG_USERNAME);
  // // tslint:disable-next-line:no-console
  // tslint:disable-next-line:forin
  for (const idx in inbox.pending) {
    const pending = inbox.pending[idx];

    if (pending.last_permanent_item.item_type === 'text' && pending.last_permanent_item.user_id !== userID) {
      // tslint:disable-next-line:no-console
      console.log('pending', pending.users);
      const condensed = {
        user: pending.users[0].username,
        msg: pending.last_permanent_item.text,
      };
      inbox.unread.push(condensed);

      // // const thread = ig.entity.directThread(pending.thread_id);
      const thread = ig.entity.directThread(pending.thread_id);
      // // await thread.broadcastText('Where are you from?');

      const reply = 'You are welcome';
      await thread.broadcastText(reply);
    }
  }
  // tslint:disable-next-line:no-console
  console.log(inbox.unread);

  // // tslint:disable-next-line:no-console
  // console.log(wholeDirectInbox[0].items);
  // const requestInboxFeed = await directInboxFeed.request();
  // // tslint:disable-next-line:no-console
  // console.log(requestInboxFeed);

  // const directInboxFeed = ig.news.inbox();
  // const wholeDirectInbox = await directInboxFeed();
  // tslint:disable-next-line:no-console
  // console.log(wholeDirectInbox[0].items);
  // const requestInboxFeed = await directInboxFeed.request();
  // tslint:disable-next-line:no-console
})();
