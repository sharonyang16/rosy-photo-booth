import Webcam from "react-webcam";
import OptionsForm from "./OptionsForm/OptionsForm";
import { PhotoboothFormProps } from "../../../types/photobooth";
import PageLayout from "@/components/Layout/PageLayout";
import Camera from "@/components/Camera/Camera";

const OptionsPage = ({
  webcamRef,
  isWebcamOn,
  handleUserMedia,
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
}: {
  webcamRef: React.RefObject<Webcam>;
  isWebcamOn: boolean;
  handleUserMedia: () => void;
} & PhotoboothFormProps) => {
  return (
    <PageLayout pageHeading="Options">
      <div className="flex gap-4">
        <Camera
          ref={webcamRef}
          isWebcamOn={isWebcamOn}
          handleUserMedia={handleUserMedia}
          mirrored
        />
        <OptionsForm
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
