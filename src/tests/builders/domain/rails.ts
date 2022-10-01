import { IRail, IRailItem } from "@/domain/Rail";

const items: IRailItem[] = [
  {
    id: 424,
    posterUrl: "https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    title: "Schindler's List",
  },
  {
    id: 238,
    posterUrl: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    title: "The Godfather",
  },
  {
    id: 680,
    posterUrl: "https://image.tmdb.org/t/p/original/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    title: "Pulp Fiction",
  },
  {
    id: 13,
    posterUrl: "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/8uWbSjUky6NiJnD3Typz6ZN0f9w.jpg",
    title: "Forrest Gump",
  },
  {
    id: 19404,
    posterUrl: "https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/original/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
    title: "Dilwale Dulhania Le Jayenge",
  },
];

export const buildRailItems = ({ size }: { size: number }): IRailItem[] => items.slice(0, size);

export const buildRail = ({ name, size }: { name: string; size: number }): IRail => ({
  name,
  items: buildRailItems({ size }),
});
