import img from "../../resources/img/title.jpg";

const Title = () => {
  return (
    <div className="container">
      <div className="swiper-slide">
        <h1 className="title__content">
          <img src={img} alt="title" />
        </h1>
      </div>
    </div>
  );
};

export default Title;
