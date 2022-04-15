import "./style.css";

interface ImagesContainerProps {
  testUrls: string[];
  onClick: (link: string) => void;
}

const ImagesContainer = (props: ImagesContainerProps) => {
  const { testUrls, onClick } = props;
  return (
    <div className="out-test-images">
      {testUrls.map((link) => (
        <div
          className="test-images-contain"
          key={link}
          onClick={() => onClick(link)}
        >
          <img src={link} className="test-image" alt="test" />
        </div>
      ))}
    </div>
  );
};

export default ImagesContainer;
