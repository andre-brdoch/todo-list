import tinycolor from "tinycolor2";

export function darkenColor(color) {
  const result = tinycolor(color).darken(35);
  return tinycolor.isReadable(color, result) ? result : "white";
}

export function lightenColor(color) {
  return tinycolor(color).lighten(15);
}
