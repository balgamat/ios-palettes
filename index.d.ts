export type Palette = {
  blue: string;
  brown: string;
  gray: string;
  green: string;
  orange: string;
  pink: string;
  purple: string;
  red: string;
  yellow: string;
};

export type ComplementaryPalettes = {
  Aqua: Palette;
  Dark: Palette;
}

export type IOSPalettes = {
  Normal: ComplementaryPalettes;
  Vibrant: ComplementaryPalettes;
};

declare module 'ios-palettes' {}

export default IOSPalettes;
