const HOST = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const request = async (path: string, filter?: string) => {
  const url = `${HOST}${path}`;
  let params = `api_key=${process.env.TMDB_KEY}`;

  if (filter) params += `&${filter}`;

  return fetch(`${url}?${params}`).then((response) => response.json());
};

const getImageUrl = (path: string) => {
  return `${IMAGE_PATH}${path}`;
};

const tmdbClient = {
  request,
  getImageUrl,
};

export default tmdbClient;
