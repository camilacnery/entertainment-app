export type TRailItem = {
  posterUrl: string;
  title: string;
  year: number;
};

export type TRail = {
  name: string;
  type: "POSTER";
  items: TRailItem[];
};
