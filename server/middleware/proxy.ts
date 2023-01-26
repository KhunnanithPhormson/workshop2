export default defineEventHandler((event) => {
  // "/api" requests
  if (event.node.req.url?.startsWith('/api/')) {
    const { apiBaseUrl } = useRuntimeConfig();

    const target = new URL(event.node.req.url, apiBaseUrl);

    return proxyRequest(event, target.toString(), {
      headers: {},
    });
  }

  // "/media" requests
  if (event.node.req.url?.startsWith('/media/')) {
    const { apiBaseUrl } = useRuntimeConfig();

    const target = new URL(event.node.req.url, apiBaseUrl);

    return proxyRequest(event, target.toString(), {
      headers: {},
    });
  }
});
