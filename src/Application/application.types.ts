export interface Application {
  id: string;
  name: string;
  iconUrl: string;
  position: Position;
  isMinimized: boolean;
}

export type Position = {
  x: number;
  y: number;
};
