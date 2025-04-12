export const PICTURE_COUNT = 4;

export const BACKGROUND_COLORS = ["sky", "yellow", "pink"];

export const backgroundColorToClass = new Map<string, string>([
  ["sky", "bg-sky-500"],
  ["yellow", "bg-yellow-500"],
  ["pink", "bg-pink-500"],
]);

export const FILTERS = ["none", "grayscale", "sepia"];

export const filterToClass = new Map<string, string>([
  ["none", ""],
  ["grayscale", "grayscale"],
  ["sepia", "sepia"],
]);
