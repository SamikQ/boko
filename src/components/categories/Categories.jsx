

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="wrapper">
          <div className="section__header">
            <h3 className="section__header-title">обрати за категорією</h3>
            <p className="section__header-text">BoKo Your Style</p>
          </div>
          <div className="categories__list">
            <div className="catogiries__list-top-row">
              <a href="/#" className="catogiries__list-item elegance" aria-label="eternal elegance"><h3 className="categories__list-item__title">eternal elegance</h3></a>
            </div>
            <div className="catogiries__list-middle-row">
              <a href="/#" className="catogiries__list-item basic" aria-label="basic"><h3 className="categories__list-item__title">basic</h3></a>
              <a href="/#" className="catogiries__list-item shoes" aria-label="shoes"><h3 className="categories__list-item__title">shoes</h3></a>
            </div>
            <div className="catogiries__list-bottom-row">
              <a href="/#" className="catogiries__list-item bags" aria-label="bags"><h3 className="categories__list-item__title">bags</h3></a>
              <a href="/#" className="catogiries__list-item sport" aria-label="sport"><h3 className="categories__list-item__title">sport</h3></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;