export interface IRailItem {
  posterUrl: string;
  title: string;
  id: number;
}

export interface IRail {
  name: string;
  items: IRailItem[];
}
