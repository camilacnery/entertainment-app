const HOST = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const request = async <T>(path: string, filter?: string): Promise<T> => {
  const url = `${HOST}${path}`;
  let params = `api_key=${process.env.TMDB_KEY}`;

  if (filter) params += `&${filter}`;

  const responseRaw = await fetch(`${url}?${params}`);
  const response = await responseRaw.json();

  if (response.success === false) {
    throw new Error(response.status_message);
  }

  return response as T;
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
