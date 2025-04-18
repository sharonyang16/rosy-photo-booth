import Webcam from "react-webcam";

type CameraProps = {
  ref: React.RefObject<Webcam>;
  size: { height: number; width: number };
  mirrored: boolean;
  orientation: string;
};
const Camera = ({ ref, size, mirrored }: CameraProps) => {
  return (
    <Webcam
      ref={ref}
      style={{ ...size, objectFit: "cover" }}
      className="border-4 border-black rounded-lg"
      mirrored={mirrored}
      disablePictureInPicture
    />
  );
};

export default Camera;
