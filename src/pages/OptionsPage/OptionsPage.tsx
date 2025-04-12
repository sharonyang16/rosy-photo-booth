import Webcam from "react-webcam";
import OptionsForm from "./OptionsForm.tsx/OptionsForm";
import { PhotoboothFormProps } from "../../types/photobooth";
const OptionsPage = ({
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
}: PhotoboothFormProps) => {
  return (
    <div className="flex gap-4">
      <Webcam mirrored disablePictureInPicture />
      <OptionsForm
        layout={layout}
        handleLayoutChange={handleLayoutChange}
        countdown={countdown}
        handleCountdownChange={handleCountdownChange}
      />
    </div>
  );
};

export default OptionsPage;
