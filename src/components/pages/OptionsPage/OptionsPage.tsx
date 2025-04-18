import Webcam from "react-webcam";
import OptionsForm from "./OptionsForm/OptionsForm";
import { PhotoboothFormProps } from "../../../types/photobooth";
import PageLayout from "@/components/Layout/PageLayout";
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
}: {
  webcamRef: React.RefObject<Webcam>;
  pictureSize: { height: number; width: number };
} & PhotoboothFormProps) => {
  return (
    <PageLayout pageHeading="Options">
      <div className="flex gap-4">
        <Camera ref={webcamRef} size={size} mirrored={mirrored} />
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
        />
      </div>
    </PageLayout>
  );
};

export default OptionsPage;
