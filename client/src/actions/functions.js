export const jsonRequest = (headers, body) => { 
  const config = { headers: { 'Content-Type': 'application/json' } };
  config.headers = { ...config.headers, ...headers };
  body = body && JSON.stringify(body);
  return { config, body };
}