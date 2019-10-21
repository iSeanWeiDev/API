// import IgBotController from './IgBotController';
import { IgApiClient } from '../Api';
import Bluebird from 'bluebird';
// import shttps from 'socks-proxy-agent';

const ig = new IgApiClient();
// const igBot = new IgBotController();

process.on('message', (data: any) => {
  ig.state.generateDevice(data.accountName);
  // ig.request.defaults.agentClass = shttps;
  // ig.request.defaults.agentOptions = {
  //   host: data.proxyHostName,
  //   port: data.proxyPort,
  //   secureProtocol: data.proxyProtocol,
  // };

  // ig.state.proxyUrl = data.proxyUrl;

  (async () => {
    await ig.simulate.postLoginFlow();
    process.nextTick(async () => await ig.simulate.postLoginFlow());
    // tslint:disable-next-line:no-console
    await Bluebird.try(() =>
      ig.account.login(data.accountName, data.accountPass).catch(e => {
        // tslint:disable-next-line:no-console
        console.log('Challenge');
      }),
    );
    await ig.challenge.auto(true);

    const inbox = {
      pending: await ig.feed.directInbox().items(),
      /*requests: await ig.feed.directInbox().request(),
          records: await ig.feed.directInbox().records(),*/

      unread: [],
    };
    const userID = await ig.user.getIdByUsername(data.accountName);
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
  })();

  process.send(process.pid);
});
