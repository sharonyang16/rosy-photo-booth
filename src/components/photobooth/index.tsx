/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { usePhotobooth } from "../../hooks/usePhotobooth";
import PhotoboothOptionsPage from "./optionsPage";

const Photobooth = () => {
  const {
    photoboothState,
    setPhotoboothState,
    layout,
    handleLayoutChange,
    countdown,
    handleCountdownChange,
    currentCountdown,
    setCurrentCountdown,
    pictures,
    setPictures,
    selectedPictures,
    setSelectedPictures,
  } = usePhotobooth();

  switch (photoboothState) {
    case "OPTIONS":
      return (
        <PhotoboothOptionsPage
          layout={layout}
          handleLayoutChange={handleLayoutChange}
          countdown={countdown}
          handleCountdownChange={handleCountdownChange}
        />
      );
    case "CAPTURE":
      return <></>;
    case "SELECT":
      return <></>;
    case "DONE":
      return <></>;
    default:
      return <></>;
  }
};

export default Photobooth;
