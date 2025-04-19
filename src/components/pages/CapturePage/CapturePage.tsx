import Webcam from "react-webcam";
import { PICTURE_COUNT } from "@/types/constants";
import Typography from "@/components/base/Typography";
import PageLayout from "@/components/Layout/PageLayout";
import Camera from "@/components/Camera/Camera";
type CapturePageProps = {
  webcamRef: React.RefObject<Webcam>;
  pictureSize: { height: number; width: number };
  mirrored: boolean;
  currentCountdown: number;
  pictures: string[];
};

const CapturePage = ({
  webcamRef,
  pictureSize: size,
  mirrored,
  currentCountdown,
  pictures,
}: CapturePageProps) => {
  return (
    <PageLayout pageHeading="Capture">
      <div className="flex">
        <Camera ref={webcamRef} size={size} mirrored={mirrored} />
        <div>
          <div className="flex">
            <Typography variant="label">Pictures Remaining: </Typography>
            <Typography>{PICTURE_COUNT * 2 - pictures.length}</Typography>
          </div>

          <div className="flex justify-center items-center p-8 bg-gray-400 size-min">
            <Typography>{currentCountdown}</Typography>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CapturePage;
