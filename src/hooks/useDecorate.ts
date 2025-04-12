import { useState, useRef } from "react";
import html2canvas from "html2canvas-pro";

export const useDecorate = () => {
  const [backgroundColor, setBackgroundColor] = useState("sky");
  const downloadableImageRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleDownloadImage = async () => {
    const element = downloadableImageRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return {
    backgroundColor,
    setBackgroundColor,
    downloadableImageRef,
    handleDownloadImage,
  };
};
