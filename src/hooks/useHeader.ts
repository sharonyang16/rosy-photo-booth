const useHeader = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return { handleLogoClick };
};

export default useHeader;
