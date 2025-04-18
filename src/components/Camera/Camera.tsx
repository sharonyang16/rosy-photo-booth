import Webcam from "react-webcam";

type CameraProps = {
  ref: React.RefObject<Webcam>;
  size: { height: number; width: number };
  mirrored: boolean;
};

const Camera = ({ ref, size, mirrored }: CameraProps) => {
  return (
    <Webcam
      ref={ref}
      style={{ ...size, objectFit: "cover" }}
      className="border-4 border-black rounded-lg"
      mirrored={mirrored}
      disablePictureInPicture
      screenshotFormat="image/png"
    />
  );
};

export default Camera;
