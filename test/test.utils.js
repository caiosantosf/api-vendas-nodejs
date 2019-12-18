const handleServerInjectResponse = ({ payload, ...rest }) => {
  if (payload) {
    payload = JSON.parse(payload);
  }

  return { ...rest, payload };
};

export async function serverInject(options, server) {
  const res = await server.inject(options);

  return handleServerInjectResponse(res);
};

export async function getToken(server) {
  let token;
  const payload = {
    email: 'user@getuser.com',
    password: '123456'
  };

  const createUser = async () => {
    return await serverInject({
      method: 'POST',
      url: '/users',
      payload
    }, server);
  };

  const createSession = async () => {
    const res = await serverInject({
      method: 'POST',
      url: '/users/login',
      payload
    }, server);

    token = res.payload.token;

    return res;
  };

  await createUser();
  await createSession();


  return token;
};
