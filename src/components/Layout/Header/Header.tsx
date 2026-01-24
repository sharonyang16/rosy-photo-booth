"use client";
import Typography from "@/components/base/Typography";
import useHeader from "@/hooks/useHeader";
import Link from "next/link";

const Header = () => {
  const { handleLogoClick } = useHeader();

  return (
    <header className="py-8">
      <Link href="/" onClick={handleLogoClick}>
        <Typography variant="title">Rosy Photo Booth</Typography>
      </Link>
    </header>
  );
};

export default Header;
