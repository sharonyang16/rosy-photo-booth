import Webcam from "react-webcam";
import OptionsForm from "./OptionsForm/OptionsForm";
import { PhotoboothFormProps } from "../../../types/photobooth";

import Camera from "@/components/Camera/Camera";

const OptionsPage = ({
  webcamRef,
  pictureSize: size,
  mirrored,
  handleMirroredChange,
  orientation,
  handleOrientationChange,
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
  handleResetToDefault,
}: {
  webcamRef: React.RefObject<Webcam>;
  pictureSize: { height: number; width: number };
} & PhotoboothFormProps) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex justify-center items-center"
        style={{ height: `${Math.max(size.height, size.width) + 50}px` }}
      >
        <Camera ref={webcamRef} size={size} mirrored={mirrored} />
      </div>

      <OptionsForm
        mirrored={mirrored}
        handleMirroredChange={handleMirroredChange}
        orientation={orientation}
        handleOrientationChange={handleOrientationChange}
        layout={layout}
        handleLayoutChange={handleLayoutChange}
        countdown={countdown}
        handleCountdownChange={handleCountdownChange}
        setPhotoboothState={setPhotoboothState}
        handleResetToDefault={handleResetToDefault}
      />
    </div>
  );
};

export default OptionsPage;
