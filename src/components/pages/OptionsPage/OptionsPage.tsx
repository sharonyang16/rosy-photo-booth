import Webcam from "react-webcam";
import OptionsForm from "./OptionsForm/OptionsForm";
import { PhotoboothFormProps } from "../../../types/photobooth";
import PageLayout from "@/components/Layout/PageLayout";
const OptionsPage = ({
  webcamRef,
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
}: { webcamRef: React.RefObject<Webcam> } & PhotoboothFormProps) => {
  return (
    <PageLayout pageHeading="Options">
      <div className="flex gap-4">
        <Webcam ref={webcamRef} mirrored disablePictureInPicture />
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
