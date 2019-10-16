import 'dotenv/config';
import { IgApiClient } from '../Api';
// import Bluebird = require('bluebird');

const ig = new IgApiClient();
ig.state.generateDevice(process.env.IG_USERNAME);
(async () => {
  await ig.simulate.preLoginFlow();
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

  // const hashTagFeed = await ig.feed.tag('gamer');
  // const data = await hashTagFeed.items();
  // // tslint:disable-next-line:no-console
  // console.log('data', data[0]);

  const mediaInfo = await ig.media.comment('2155544181963941488_7816782170');
  // tslint:disable-next-line:no-console
  console.log('Media', mediaInfo);
})();
