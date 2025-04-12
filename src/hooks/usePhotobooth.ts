import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { PhotoboothState, Layout } from "../types/photobooth";
import { PICTURE_COUNT } from "@/types/constants";

/**
 *
 * @returns
 */
export const usePhotobooth = () => {
  const webcamRef = React.useRef<Webcam>({} as Webcam);
  const [photoboothState, setPhotoboothState] =
    useState<PhotoboothState>("OPTIONS");
  const [layout, setLayout] = useState<Layout>("STRIP");
  const [countdown, setCountdown] = useState<number>(3);
  const [currentCountdown, setCurrentCountdown] = useState<number>(3);
  const [pictures, setPictures] = useState<string[]>([]);
  const [selectedPictures, setSelectedPictures] = useState<string[]>([]);

  const capture = React.useCallback(() => {
    return webcamRef.current?.getScreenshot();
  }, [webcamRef]);

  useEffect(() => {
    const hasMorePicturesLeft = pictures.length < PICTURE_COUNT * 2;

    if (photoboothState === "CAPTURE") {
      if (hasMorePicturesLeft) {
        let intervalId: string | number | NodeJS.Timeout | undefined;

        if (currentCountdown > 0) {
          intervalId = setInterval(() => {
            setCurrentCountdown((prevSeconds) => prevSeconds - 1);
          }, 1000);
        } else {
          clearInterval(intervalId);
          const imageSrc = capture();
          if (imageSrc) {
            setPictures((prev) => [...prev, imageSrc]);
          }
          // reset countdown
          setCurrentCountdown(countdown);
        }

        return () => clearInterval(intervalId);
      } else {
        setPhotoboothState("SELECT");
      }
    }
  }, [capture, countdown, currentCountdown, photoboothState, pictures]);
  const handleLayoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLayout(e.target.value as Layout);
  };

  const handleCountdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (value > 0 && value < 11) {
      setCountdown(value);
      setCurrentCountdown(value);
    }
  };

  return {
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
  };
};
