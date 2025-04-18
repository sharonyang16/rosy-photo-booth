import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { PhotoboothState, Layout } from "../types/photobooth";
import { orientationToClass, PICTURE_COUNT } from "@/types/constants";
import { DragEndEvent } from "@dnd-kit/core";

/**
 * TODO: write JSDoc Comment
 * @returns
 */
export const usePhotobooth = () => {
  const webcamRef = React.useRef<Webcam>({} as Webcam);
  const [photoboothState, setPhotoboothState] =
    useState<PhotoboothState>("OPTIONS");
  const [mirrored, setMirrored] = useState<boolean>(true);
  const [orientation, setOrientation] = useState<string>("landscape");
  const [pictureSize, setPictureSize] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });
  const [layout, setLayout] = useState<Layout>("STRIP");
  const [countdown, setCountdown] = useState<number>(3);
  const [currentCountdown, setCurrentCountdown] = useState<number>(3);
  const [pictures, setPictures] = useState<string[]>([]);
  const [selectedPictures, setSelectedPictures] = useState<string[]>(
    Array(PICTURE_COUNT).fill("")
  );

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

  useEffect(() => {
    const size = orientationToClass.get(orientation) || {
      height: 0,
      width: 0,
    };
    setPictureSize({
      height: size.height / 2,
      width: size.width / 2,
    });
  }, [orientation]);

  const handleMirroredChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMirrored(e.target.checked);
  };

  const handleOrientationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrientation(e.target.value);
  };
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      const capturedPictureSrc = active.id as string;
      const selectedSlot = over.id as number;

      setSelectedPictures((prev) => {
        const newSelectedPictures = [...prev];
        newSelectedPictures[selectedSlot] = capturedPictureSrc;
        return newSelectedPictures;
      });
    }
  };

  return {
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
  };
};
