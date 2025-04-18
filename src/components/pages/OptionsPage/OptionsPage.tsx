import Webcam from "react-webcam";
import OptionsForm from "./OptionsForm/OptionsForm";
import { PhotoboothFormProps } from "../../../types/photobooth";
import PageLayout from "@/components/Layout/PageLayout";
import Camera from "@/components/Camera/Camera";
import { orientationToClass } from "@/types/constants";

const OptionsPage = ({
  webcamRef,
  orientation,
  handleOrientationChange,
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
}: {
  webcamRef: React.RefObject<Webcam>;
} & PhotoboothFormProps) => {
  const size = orientationToClass.get(orientation) || { height: 0, width: 0 };
  return (
    <PageLayout pageHeading="Options">
      <div className="flex gap-4">
        <Camera
          ref={webcamRef}
          size={size}
          mirrored
          orientation={orientation}
        />
        <OptionsForm
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
