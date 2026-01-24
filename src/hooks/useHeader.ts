/**
 * Custom hook to manage header functionality.
 */
const useHeader = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return { handleLogoClick };
};

export default useHeader;
