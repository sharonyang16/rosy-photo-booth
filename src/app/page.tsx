"use client";
import { usePhotobooth } from "@/hooks/usePhotobooth";
import CapturePage from "@/components/pages/CapturePage/CapturePage";
import OptionsPage from "@/components/pages/OptionsPage/OptionsPage";
import SelectPage from "@/components/pages/SelectPage/SelectPage";
import CustomizePage from "@/components/pages/CustomizePage/CustomizePage";

const Photobooth = () => {
  const {
    webcamRef,
    photoboothState,
    setPhotoboothState,
    mirrored,
    handleMirroredChange,
    orientation,
    handleOrientationChange,
    pictureSize,
    layout,
    handleLayoutChange,
    countdown,
    handleCountdownChange,
    currentCountdown,
    pictures,
    selectedPictures,
    handleDragEnd,
    handleResetToDefault,
    handleClearSelected,
  } = usePhotobooth();

  switch (photoboothState) {
    case "OPTIONS":
      return (
        <OptionsPage
          webcamRef={webcamRef}
          orientation={orientation}
          pictureSize={pictureSize}
          mirrored={mirrored}
          handleMirroredChange={handleMirroredChange}
          handleOrientationChange={handleOrientationChange}
          layout={layout}
          handleLayoutChange={handleLayoutChange}
          countdown={countdown}
          handleCountdownChange={handleCountdownChange}
          setPhotoboothState={setPhotoboothState}
          handleResetToDefault={handleResetToDefault}
        />
      );
    case "CAPTURE":
      return (
        <CapturePage
          webcamRef={webcamRef}
          pictureSize={pictureSize}
          mirrored={mirrored}
          currentCountdown={currentCountdown}
          pictures={pictures}
        />
      );
    case "SELECT":
      return (
        <SelectPage
          layout={layout}
          pictureSize={pictureSize}
          pictures={pictures}
          selectedPictures={selectedPictures}
          setPhotoboothState={setPhotoboothState}
          handleDragEnd={handleDragEnd}
          handleClearSelected={handleClearSelected}
        />
      );
    case "CUSTOMIZE":
      return (
        <CustomizePage
          layout={layout}
          pictureSize={pictureSize}
          selectedPictures={selectedPictures}
        />
      );
    default:
      return <></>;
  }
};

export default Photobooth;
