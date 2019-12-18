import Lab from '@hapi/lab';
import { expect } from '@hapi/code';
import { BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND, OK } from 'http-status';
import { init } from '../../../src/config/server.config';
import { getToken, serverInject } from '../../test.utils';

const { before, after, describe, it } = exports.lab = Lab.script();

describe('Routes /posts/{postId}/tags', () => {
  let server;
  let authorization;
  let post;

  before(async () => {
    server = await init();
    authorization = await getToken(server);

    const res = await serverInject({
      method: 'POST',
      url: '/posts',
      headers: { authorization },
      payload: {
        title: 'Novo post',
        content: 'Conteúdo do post'
      }
    }, server);

    post = res.payload;
  });

  after(async () => {
    await server.stop();
  });

  describe('GET /posts/{postId}/tags', () => {
    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'GET',
        url: `/posts/${post.id}/tags`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });
  });

  describe('POST /posts/{postId}/tags', () => {
    it('returns 201 HTTP status code', async () => {
      const res = await serverInject({
        method: 'POST',
        url: `/posts/${post.id}/tags`,
        headers: { authorization },
        payload: {
          name: 'Nova tag'
        }
      }, server);

      expect(res.statusCode).to.equal(CREATED);
    });

    it('returns 400 HTTP status code when payload is invalid', async () => {
      const res = await serverInject({
        method: 'POST',
        url: `/posts/${post.id}/tags`,
        headers: { authorization },
        payload: {
          title: 'Tag'
        }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });
  });

  describe('GET /posts/{postId}/tags/{id}', () => {
    let tag;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: `/posts/${post.id}/tags`,
        headers: { authorization },
        payload: {
          name: 'Nova tag'
        }
      }, server);

      tag = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'GET',
        url: `/posts/${post.id}/tags/${tag.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });

    it('returns 400 HTTP status code when id is not a number', async () => {
      const res = await serverInject({
        method: 'GET',
        url: `/posts/${post.id}/tags/asdf`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'GET',
        url: `/posts/${post.id}/tags/0`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });

  describe('PUT /posts/{postId}/tags/{id}', () => {
    let tag;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: `/posts/${post.id}/tags`,
        headers: { authorization },
        payload: {
          name: 'Nova tag'
        }
      }, server);

      tag = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/posts/${post.id}/tags/${tag.id}`,
        headers: { authorization },
        payload: {
          name: 'Alteramos a tag'
        }
      }, server);

      expect(res.statusCode).to.equal(OK);
    });

    it('returns 400 HTTP status code when payload is invalid', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/posts/${post.id}/tags/${tag.id}`,
        headers: { authorization },
        payload: {
          name: 'Tag'
        }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'PUT',
        url: `/posts/${post.id}/tags/0`,
        headers: { authorization },
        payload: {
          name: 'Nova tag'
        }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });

  describe('DELETE /posts/{postId}/tags/{id}', () => {
    let tag;

    before(async () => {
      const res = await serverInject({
        method: 'POST',
        url: `/posts/${post.id}/tags`,
        headers: { authorization },
        payload: {
          name: 'Nova tag'
        }
      }, server);

      tag = res.payload;
    });

    it('returns 200 HTTP status code', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/posts/${post.id}/tags/${tag.id}`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NO_CONTENT);
    });

    it('returns 400 HTTP status code when id is not a number', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/posts/${post.id}/tags/asdf`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(BAD_REQUEST);
    });

    it('returns 404 HTTP status code when post does not exist', async () => {
      const res = await serverInject({
        method: 'DELETE',
        url: `/posts/${post.id}/tags/0`,
        headers: { authorization }
      }, server);

      expect(res.statusCode).to.equal(NOT_FOUND);
    });
  });
});
