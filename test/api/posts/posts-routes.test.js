import Lab from '@hapi/lab';
import { expect } from '@hapi/code';
import { BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND, OK } from 'http-status';
import { init } from '../../../src/config/server.config';
import { getToken, serverInject } from '../../test.utils';

const { before, after, describe, it } = exports.lab = Lab.script();

describe('Routes /posts', () => {
  let server;
  let authorization;

  before(async () => {
    server = await init();
    authorization = await getToken(server);
  });

  after(async () => {
    await server.stop();
  });

  describe('GET /posts', () => {
    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'GET',
        url: '/posts',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });
  });

  describe('POST /posts', () => {
    it('returns 201 HTTP status code', async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/posts',
        headers: { authorization },
        payload: {
          title: 'Novo post',
          content: 'Novo conteúdo'
        }
      }, server);

      expect(res.statusCode).to.equal(CREATED);
    });

    it('returns 400 HTTP status code when payload is invalid', async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/posts',
        headers: { authorization },
        payload: {
          title: 'Novo post'
        }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });
  });

  describe('GET /posts/{id}', () => {
    let post;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/posts',
        headers: { authorization },
        payload: {
          title: 'Novo post',
          content: 'Novo conteúdo'
        }
      }, server);

      post = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'GET',
        url: `/posts/${post.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });

    it('returns 400 HTTP status code when id is not a number', async () => {
      const res = await serverInject({
        method: 'GET',
        url: '/posts/asdf',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'GET',
        url: '/posts/0',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });

  describe('PUT /posts/{id}', () => {
    let post;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/posts',
        headers: { authorization },
        payload: {
          title: 'Novo post',
          content: 'Novo conteúdo'
        }
      }, server);

      post = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/posts/${post.id}`,
        headers: { authorization },
        payload: {
          title: 'Novo título',
          content: 'Novo conteúdo'
        }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });

    it('returns 400 HTTP status code when payload is invalid', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/posts/${post.id}`,
        headers: { authorization },
        payload: {
          title: 'Novo título',
          content: 'Conteúdo'
        }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: '/posts/0',
        headers: { authorization },
        payload: {
          title: 'Novo título',
          content: 'Novo conteúdo'
        }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });

  describe('DELETE /posts/{id}', () => {
    let post;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: '/posts',
        headers: { authorization },
        payload: {
          title: 'Novo post',
          content: 'Novo conteúdo'
        }
      }, server);

      post = res.payload;
    });

    it('returns 204 HTTP status code', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/posts/${post.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NO_CONTENT);
    });

    it('returns 400 HTTP status code when id is not a number', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: '/posts/asdf',
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/posts/${post.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });
});
