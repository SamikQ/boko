import img from "../../resources/img/title.jpg";

const Title = () => {
  return (
    <div className="swiper-slide">
        <h1>
          <img src={img} alt="title" />
        </h1>
    </div>
  );
};

export default Title;
