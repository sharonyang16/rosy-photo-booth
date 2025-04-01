export type PhotoboothState = "OPTIONS" | "CAPTURE" | "SELECT" | "DONE";

export type Layout = "SQUARE" | "STRIP";

export type PhotoboothFormProps = {
  layout: Layout;
  handleLayoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countdown: number;
  handleCountdownChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
