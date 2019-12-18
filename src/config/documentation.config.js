import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import {name, version } from '../../package.json';

const options = {
  info: {
    title: name,
    version
  }
};

const register = async  (server) => await server.register([
  {
    plugin: Inert
  },
  {
    plugin: Vision
  },
  {
    plugin: HapiSwagger,
    options
  }
]);

export const plugin = {
  name: 'documentation',
  version: '1.0.0',
  register
};

export default plugin;
