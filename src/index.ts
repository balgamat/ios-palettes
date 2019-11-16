import IOSPalettes from '../index';

export const Light = {
  Gray: {
    1: '#8e8e93',
    2: '#aeaeb2',
    3: '#c7c7cc',
    4: '#d1d1d6',
    5: '#e5e5ea',
    6: '#f2f2f7',
  },
  Normal: {
    Blue: '#007aff',
    Brown: '#a2845e',
    Gray: '#8e8e93',
    Green: '#28cd41',
    Orange: '#ff9500',
    Pink: '#ff2d55',
    Purple: '#af52de',
    Red: '#ff3b30',
    Yellow: '#ffcc00',
  },
  Vibrant: {
    Blue: '#0070f5',
    Brown: '#987a54',
    Gray: '#848489',
    Green: '#1ec337',
    Orange: '#f58b00',
    Pink: '#f5234b',
    Purple: '#9f4bc9',
    Red: '#f53126',
    Yellow: '#f5c200',
  }
};

export const Dark = {
  Gray: {
    1: '#8e8e93',
    2: '#636366',
    3: '#48484a',
    4: '#3a3a3c',
    5: '#2c2c2e',
    6: '#1c1c1e',
  },
  Normal: {
    Blue: '#6484ff',
    Brown: '#ac8e68',
    Gray: '#98989d',
    Green: '#32d74b',
    Orange: '#ff9f0a',
    Pink: '#ff375f',
    Purple: '#bf5af2',
    Red: '#ff453a',
    Yellow: '#ffd60a',
  },
  Vibrant: {
    Blue: '#148eff',
    Brown: '#b69872',
    Gray: '#a2a2a7',
    Green: '#3ce155',
    Orange: '#ffa914',
    Pink: '#ff4169',
    Purple: '#cc65ff',
    Red: '#ff4f44',
    Yellow: '#ffe014',
  }
};

const iOSPalettes: IOSPalettes = { Light, Dark };

export default iOSPalettes;
