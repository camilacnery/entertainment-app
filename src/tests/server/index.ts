import { rest } from "msw";
import { setupServer } from "msw/node";
import "whatwg-fetch";

const server = setupServer();

export { server, rest };
