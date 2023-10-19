type Arguments = {
  pixelId: string,
  endpoint: string
  body: any
};

/**
 * Facebook Graph API client.
 *
 * @param endpoint
 * @param body
 * @constructor
 */
const graphApi = async <T>({ pixelId, endpoint = '', body = null }: Arguments): Promise<T> => {
  const request = new Request(`https://graph.facebook.com/v18.0/${pixelId}/${endpoint}`, {
    method: 'POST',
    ...(body && { body }),
  });

  return fetch(request)
    .then((response) => response.json() as Promise<T>)
    .catch((e: Error) => {
      throw e;
    });
};

export default graphApi;
