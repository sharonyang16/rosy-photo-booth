import { Layout } from "./photobooth";

export const layoutToClass = new Map<Layout, string>([
  ["STRIP", "flex flex-col w-min gap-3 px-3 pt-3 pb-10 bg-white"],
  ["SQUARE", "grid grid-cols-2 gap-3 px-3 pb-3 pt-10 bg-white"],
]);

export const layoutToImgClass = new Map<Layout, string>([
  ["STRIP", "min-w-[160px] max-w-[160px] min-h-[120px]"],
  ["SQUARE", "min-w-[160px] max-w-[160px] min-h-[120px]"],
]);

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
