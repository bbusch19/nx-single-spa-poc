import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@mfe/child',
  app: () => System.import('@mfe/child'),
  activeWhen: ['/child'],
});

registerApplication({
  name: '@mfe/react-child',
  app: () => System.import('@mfe/react-child'),
  activeWhen: ['/react-child'],
});

start({
  urlRerouteOnly: true,
});
