export interface IRailItem {
  posterUrl?: string;
  backdropUrl?: string;
  title: string;
  id: number;
}

export interface IRail {
  name: string;
  items: IRailItem[];
}
