export type Palette = {
  Blue: string;
  Brown: string;
  Gray: string;
  Green: string;
  Orange: string;
  Pink: string;
  Purple: string;
  Red: string;
  Yellow: string;
};

export type IOSPalettes =
  Record<'Light' | 'Dark', { Gray: Record<1 | 2 | 3 | 4 | 5 | 6, string>; } & Record<'Normal'|'Vibrant', Palette>>;

declare module 'ios-palettes' {
}

export default IOSPalettes;
