export type PhotoboothState = "OPTIONS" | "CAPTURE" | "SELECT" | "CUSTOMIZE";

export type Layout = "SQUARE" | "STRIP";

export type PhotoboothFormProps = {
  mirrored: boolean;
  handleMirroredChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  orientation: string;
  handleOrientationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  layout: Layout;
  handleLayoutChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countdown: number;
  handleCountdownChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPhotoboothState: React.Dispatch<React.SetStateAction<PhotoboothState>>;
};
