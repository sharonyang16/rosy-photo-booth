import Webcam from "react-webcam";
import { PICTURE_COUNT } from "@/types/constants";
import Typography from "@/components/base/Typography";
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
    <div className="flex flex-col items-center">
      <div
        className="flex items-center"
        style={{ height: `${Math.max(size.height, size.width) + 50}px` }}
      >
        <div className="flex flex-col gap-4 items-center justify-end">
          <div className="flex w-full gap-2">
            <Typography variant="label">Pictures Remaining: </Typography>
            <Typography>{PICTURE_COUNT * 2 - pictures.length}</Typography>
          </div>
          <Camera ref={webcamRef} size={size} mirrored={mirrored} />
        </div>
      </div>

      <div className="bg-primary rounded-box text-neutral-content flex flex-col p-2">
        <span className="countdown font-mono text-6xl text-primary-content">
          <span
            style={
              {
                "--value": currentCountdown,
                "--digits": 2,
              } as React.CSSProperties
            }
            aria-live="polite"
            aria-label={currentCountdown.toString()}
          >
            {currentCountdown}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CapturePage;
