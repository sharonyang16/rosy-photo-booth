import Webcam from "react-webcam";
import { PICTURE_COUNT } from "@/types/constants";
type CapturePageProps = {
  webcamRef: React.RefObject<Webcam>;
  currentCountdown: number;
  pictures: string[];
};
const CapturePage = ({
  webcamRef,
  currentCountdown,
  pictures,
}: CapturePageProps) => {
  return (
    <div className="flex">
      <Webcam ref={webcamRef} mirrored disablePictureInPicture />
      <div>{currentCountdown}</div>
      <div>{PICTURE_COUNT * 2 - pictures.length}</div>
    </div>
  );
};

export default CapturePage;
