const HOST = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

const fetchRequest = async (path: string) => {
  return fetch(`${HOST}${path}?api_key=${process.env.TMDB_KEY}`).then(
    (response) => response.json()
  );
};

const getImageUrl = (path: string) => {
  return `${IMAGE_PATH}${path}`;
};

const tmdbClient = {
  fetchRequest,
  getImageUrl,
};

export default tmdbClient;
