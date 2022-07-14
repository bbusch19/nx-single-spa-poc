import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@mfe/child',
  app: () => System.import('@mfe/child'),
  activeWhen: ['/child'],
});

start({
  urlRerouteOnly: true,
});
