type SelectPageProps = {
  pictures: string[];
};
const SelectPage = ({ pictures }: SelectPageProps) => {
  return (
    <div className="flex">
      <div>
        {pictures.map((picture, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="w-1/2"
            key={`picture-${index}`}
            src={picture}
            alt="picture preview"
          />
        ))}
      </div>
    </div>
  );
};

export default SelectPage;
