const HOST = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const request = async <T>(path: string, filter?: string): Promise<T> => {
  const url = `${HOST}${path}`;
  let params = `api_key=${process.env.TMDB_KEY}`;

  if (filter) params += `&${filter}`;

  const response = await fetch(`${url}?${params}`);
  return (await response.json()) as T;
};

const buildImageUrl = (path: string) => {
  return `${IMAGE_PATH}${path}`;
};

const tmdbClient = {
  request,
  buildImageUrl,
};

export * from "./types";
export default tmdbClient;
