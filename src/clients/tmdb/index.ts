const HOST = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

type TParams = { [key: string]: string };

const request = async <T>(path: string, params: TParams = {}): Promise<T> => {
  const apiKey = process.env.TMDB_KEY;

  if (!apiKey) throw new Error("Missing API Key");

  const queryParams = new URLSearchParams({ api_key: apiKey, ...params });

  const responseBody = await fetch(`${HOST}${path}?${queryParams.toString()}`);
  const response = await responseBody.json();

  if (response.success === false) {
    throw new Error(response.status_message);
  }

  return response as T;
};

const buildImageUrl = (path?: string) => {
  if (!path) return;

  return `${IMAGE_PATH}${path}`;
};

const tmdbClient = {
  request,
  buildImageUrl,
};

export * from "./types";
export default tmdbClient;
