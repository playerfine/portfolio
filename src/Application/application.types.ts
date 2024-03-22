export interface Application {
  id: string;
  name: string;
  iconUrl: string;
  position: Position;
}

export type Position = {
  x: number;
  y: number;
};
