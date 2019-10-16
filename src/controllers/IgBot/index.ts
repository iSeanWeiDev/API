import IgBotController from './IgBotController';

const igBot = new IgBotController();

process.on('message', (n: number) => {
  const interval = setInterval(() => {
    // tslint:disable-next-line:no-console
    console.log(igBot.index(n));
  }, 3000);

  removeInterval(interval);
  process.send(n);
});

function removeInterval(interval: any) {
  clearInterval(interval);
}
