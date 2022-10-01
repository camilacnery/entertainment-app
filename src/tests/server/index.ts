import { rest, DefaultBodyType } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

const mockSuccessResponse = (url: string, body: DefaultBodyType) =>
  rest.get(url, (_, res, ctx) => {
    return res(ctx.json(body));
  });

const server = setupServer();

export { server, mockSuccessResponse };
