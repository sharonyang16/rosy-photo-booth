import Webcam from "react-webcam";

type CameraProps = {
  ref: React.RefObject<Webcam>;
  isWebcamOn: boolean;
  handleUserMedia: () => void;
  mirrored: boolean;
};
const Camera = ({
  ref,
  isWebcamOn,
  handleUserMedia,
  mirrored,
}: CameraProps) => {
  return (
    <>
      {!isWebcamOn && <div>camera not mounted</div>}
      <Webcam
        ref={ref}
        onUserMedia={handleUserMedia}
        mirrored={mirrored}
        disablePictureInPicture
      />
    </>
  );
};

export default Camera;
