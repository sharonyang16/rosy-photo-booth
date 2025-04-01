import { PhotoboothFormProps } from "../../../../types/photobooth";

export const PhotoboothForm = ({
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
}: PhotoboothFormProps) => {
  return (
    <form className="flex flex-col">
      <fieldset>
        <label>
          <input
            type="radio"
            value="STRIP"
            checked={layout === "STRIP"}
            onChange={(e) => handleLayoutChange(e)}
          />
          strip
        </label>
        <label>
          <input
            type="radio"
            value="SQUARE"
            checked={layout === "SQUARE"}
            onChange={(e) => handleLayoutChange(e)}
          />
          square
        </label>
      </fieldset>

      <fieldset>
        <input
          type="number"
          min="1"
          max="10"
          value={countdown}
          onChange={(e) => handleCountdownChange(e)}
        />
      </fieldset>
      <button type="submit">start</button>
    </form>
  );
};
