import Webcam from "react-webcam";
import { PhotoboothForm } from "./photoboothForm";
import { PhotoboothFormProps } from "../../../types/photobooth";
const PhotoboothOptionsPage = ({
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
}: PhotoboothFormProps) => {
  return (
    <div className="flex gap-4">
      <Webcam mirrored disablePictureInPicture />
      <PhotoboothForm
        layout={layout}
        handleLayoutChange={handleLayoutChange}
        countdown={countdown}
        handleCountdownChange={handleCountdownChange}
      />
    </div>
  );
};

export default PhotoboothOptionsPage;
