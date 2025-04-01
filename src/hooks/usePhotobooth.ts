import React, { useState } from "react";
import { PhotoboothState, Layout } from "../types/photobooth";

/**
 *
 * @returns
 */
export const usePhotobooth = () => {
  const [photoboothState, setPhotoboothState] = useState<PhotoboothState>('OPTIONS');
  const [layout, setLayout] = useState<Layout>("STRIP");
  const [countdown, setCountdown] = useState<number>(3);
  const [currentCountdown, setCurrentCountdown] = useState<number>(3);
  const [pictures, setPictures] = useState<string[]>([]);
  const [selectedPictures, setSelectedPictures] = useState<string[]>([]);

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
  };
};
