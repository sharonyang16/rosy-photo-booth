import Image from "next/image";

type CroppedImageProps = {
  size: { height: number; width: number };
  src: string;
  alt: string;
  className?: string;
};

const CroppedImage = ({ src, size, alt, className }: CroppedImageProps) => {
  return (
    <div style={size} className="relative">
      <Image src={src} alt={alt} fill className={`object-cover ${className}`} />
    </div>
  );
};

export default CroppedImage;
