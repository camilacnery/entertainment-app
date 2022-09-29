export type TRailItem = {
  posterUrl: string;
  title: string;
  id: number;
};

export type TRail = {
  name: string;
  items: TRailItem[];
};
