import { IRail, IRailItem } from "../../domain/Rail";

const items: IRailItem[] = [
  {
    id: 1,
    backdropUrl: "https://movie.1.backdrop",
    posterUrl: "https://movie.1.poster",
    title: "First Movie",
  },
  {
    id: 2,
    backdropUrl: "https://movie.2.backdrop",
    posterUrl: "https://movie.2.poster",
    title: "Second Movie",
  },
  {
    id: 3,
    backdropUrl: "https://movie.3.backdrop",
    posterUrl: "https://movie.3.poster",
    title: "Third Movie",
  },
  {
    id: 4,
    backdropUrl: "https://movie.4.backdrop",
    posterUrl: "https://movie.4.poster",
    title: "Fourth Movie",
  },
];

export const buildRail = ({ name, size }: { name: string; size: number }): IRail => ({
  name,
  items: items.slice(0, size),
});
