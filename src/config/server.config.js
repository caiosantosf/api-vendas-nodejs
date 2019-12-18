import Hapi from '@hapi/hapi';
import Env from './environment.config';
import Plugins from './plugins.config';

export const init = async () => {
  const server = Hapi.server({
    port: Env.PORT,
    host: 'localhost'
  });
  await server.register(Plugins(), { once: true });

  await server.initialize();
  return server;
};

export const start = async () => {
  const server = await init();

  await server.start();

  console.log('\n\nServer running on %s', server.info.uri);
  return server;
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
