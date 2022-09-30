import { ITMDBList, ITMDBMovieDetails } from "@/clients/tmdb";

const movieDetails: ITMDBMovieDetails = {
  adult: false,
  backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
  budget: 25000000,
  genres: [
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 80,
      name: "Crime",
    },
  ],
  homepage: "",
  id: 278,
  imdb_id: "tt0111161",
  original_language: "en",
  original_title: "The Shawshank Redemption",
  overview:
    "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  popularity: 71.389,
  poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  production_companies: [
    {
      id: 97,
      logo_path: "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
      name: "Castle Rock Entertainment",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1994-09-23",
  revenue: 28341469,
  runtime: 142,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Fear can hold you prisoner. Hope can set you free.",
  title: "The Shawshank Redemption",
  video: false,
  vote_average: 8.701,
  vote_count: 22371,
};

const movieRecommendations: ITMDBList = {
  page: 1,
  total_pages: 2,
  total_results: 40,
  results: [
    {
      adult: false,
      backdrop_path: "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
      id: 19404,
      title: "Dilwale Dulhania Le Jayenge",
      original_language: "hi",
      original_title: "दिलवाले दुल्हनिया ले जायेंगे",
      overview:
        "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      media_type: "movie",
      genre_ids: [35, 18, 10749],
      popularity: 27.367,
      release_date: "1995-10-19",
      video: false,
      vote_average: 8.583,
      vote_count: 3881,
    },
    {
      adult: false,
      backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      id: 424,
      title: "Schindler's List",
      original_language: "en",
      original_title: "Schindler's List",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      media_type: "movie",
      genre_ids: [18, 36, 10752],
      popularity: 56.961,
      release_date: "1993-12-15",
      video: false,
      vote_average: 8.575,
      vote_count: 13261,
    },
    {
      adult: false,
      backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      id: 238,
      title: "The Godfather",
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      media_type: "movie",
      genre_ids: [18, 80],
      popularity: 99.315,
      release_date: "1972-03-14",
      video: false,
      vote_average: 8.714,
      vote_count: 16654,
    },
    {
      adult: false,
      backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      id: 680,
      title: "Pulp Fiction",
      original_language: "en",
      original_title: "Pulp Fiction",
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      poster_path: "/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
      media_type: "movie",
      genre_ids: [53, 80],
      popularity: 60.688,
      release_date: "1994-09-10",
      video: false,
      vote_average: 8.49,
      vote_count: 23828,
    },
    {
      adult: false,
      backdrop_path: "/8uWbSjUky6NiJnD3Typz6ZN0f9w.jpg",
      id: 13,
      title: "Forrest Gump",
      original_language: "en",
      original_title: "Forrest Gump",
      overview:
        "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      poster_path: "/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      media_type: "movie",
      genre_ids: [35, 18, 10749],
      popularity: 58.636,
      release_date: "1994-06-23",
      video: false,
      vote_average: 8.48,
      vote_count: 23368,
    },
  ],
};

export const buildApiMovieDetails = (
  props: Partial<ITMDBMovieDetails> = {}
): ITMDBMovieDetails => ({
  ...movieDetails,
  ...props,
});

export const buildApiMovieRecommendations = (props: Partial<ITMDBList> = {}): ITMDBList => ({
  ...movieRecommendations,
  ...props,
});
