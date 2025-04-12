/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { usePhotobooth } from "@/hooks/usePhotobooth";
import CapturePage from "@/pages/CapturePage/CapturePage";
import OptionsPage from "@/pages/OptionsPage/OptionsPage";
import SelectPage from "@/pages/SelectPage/SelectPage";

const Photobooth = () => {
  const {
    webcamRef,
    photoboothState,
    setPhotoboothState,
    layout,
    handleLayoutChange,
    countdown,
    handleCountdownChange,
    currentCountdown,
    pictures,
    setPictures,
    selectedPictures,
    setSelectedPictures,
  } = usePhotobooth();

  switch (photoboothState) {
    case "OPTIONS":
      return (
        <OptionsPage
          webcamRef={webcamRef}
          layout={layout}
          handleLayoutChange={handleLayoutChange}
          countdown={countdown}
          handleCountdownChange={handleCountdownChange}
          setPhotoboothState={setPhotoboothState}
        />
      );
    case "CAPTURE":
      return (
        <CapturePage
          webcamRef={webcamRef}
          currentCountdown={currentCountdown}
          pictures={pictures}
        />
      );
    case "SELECT":
      return <SelectPage pictures={pictures} />;
    case "CUSTOMIZE":
      return <></>;
    default:
      return <></>;
  }
};

export default Photobooth;
