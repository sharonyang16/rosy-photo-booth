import Webcam from "react-webcam";
import { PICTURE_COUNT } from "@/types/constants";
import Typography from "@/components/base/Typography";
import PageLayout from "@/components/Layout/PageLayout";
import Camera from "@/components/Camera/Camera";
import PaperContainer from "@/components/Layout/PaperContainer";
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
      <PaperContainer>
        <div className="flex flex-col gap-4 items-center">
          <Camera ref={webcamRef} size={size} mirrored={mirrored} />
          <div className="flex justify-center items-center p-4 bg-gray-200 size-min w-16 h-16 rounded-lg">
            <Typography>{currentCountdown === 0 ? "Go!" : currentCountdown}</Typography>
          </div>
        </div>
      </PaperContainer>
      <div className="flex gap-2">
        <Typography variant="label">Pictures Remaining: </Typography>
        <Typography>{PICTURE_COUNT * 2 - pictures.length}</Typography>
      </div>
    </PageLayout>
  );
};

export default CapturePage;
