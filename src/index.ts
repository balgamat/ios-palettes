import IOSPalettes, { ComplementaryPalettes } from '../index';

export const Normal: ComplementaryPalettes = {
  Aqua: {
    blue: '#007aff',
    brown: '#a2845e',
    gray: '#8e8e93',
    green: '#28cd41',
    orange: '#ff9500',
    pink: '#ff2d55',
    purple: '#af52de',
    red: '#ff3b30',
    yellow: '#ffcc00',
  },
  Dark: {
    blue: '#6484ff',
    brown: '#ac8e68',
    gray: '#98989d',
    green: '#32d74b',
    orange: '#ff9f0a',
    pink: '#ff375f',
    purple: '#bf5af2',
    red: '#ff453a',
    yellow: '#ffd60a',
  }
};

export const Vibrant: ComplementaryPalettes = {
  Aqua: {
    blue: '#0070f5',
    brown: '#987a54',
    gray: '#848489',
    green: '#1ec337',
    orange: '#f58b00',
    pink: '#f5234b',
    purple: '#9f4bc9',
    red: '#f53126',
    yellow: '#f5c200',
  },
  Dark: {
    blue: '#148eff',
    brown: '#b69872',
    gray: '#a2a2a7',
    green: '#3ce155',
    orange: '#ffa914',
    pink: '#ff4169',
    purple: '#cc65ff',
    red: '#ff4f44',
    yellow: '#ffe014',
  }
};

const iOSPalettes: IOSPalettes = { Normal, Vibrant };

export default iOSPalettes;
