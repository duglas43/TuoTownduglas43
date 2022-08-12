import React from "react";
import { Slider, CategoriesItem, ProductBlock } from "../components/";
import TestImage from "../assets/img/image_17.png";
import InfoImg from "../assets/img/info-img.jpg";
import InfoImg1 from "../assets/img/info-img1.jpg";
const CategorieItems = [
  {
    svgImage: "#kitchen-knife",
    title: "Кухонные ножи",
  },
  {
    svgImage: "#fold-knife",
    title: "Складные ножи",
  },
  {
    svgImage: "#knife-sharpener",
    title: "Точилки для ножей",
  },
  {
    svgImage: "#kitchen-accessories",
    title: "Аксессуары для кухни",
  },
];
const products = [
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: false,
  },
];
function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="visually-hidden">Магазин TUOTOWN</h1>
        <Slider></Slider>
        <section className="categories">
          <h2 className="visually-hidden">Категории</h2>
          <ul className="flex4">
            {CategorieItems.map((item, index) => {
              return <CategoriesItem key={index} items={item} />;
            })}
          </ul>
        </section>
        <section className="products grid-container--42">
          <h2 className="visually-hidden" hidden>
            Товары
          </h2>
          {products.map((item, index) => {
            return <ProductBlock key={index} {...item} />;
          })}
        </section>
        <div className="email">
          <div className="email__title">
            Узнавайте первым о новинках и новостях
          </div>
          <div className="input-group-btn">
            <input
              type="text"
              placeholder="Ваш e-mail"
              className="email__input input"
            ></input>
            <button type="button" className="email__button input-button">
              <svg className="svg--transparent" width="8" height="12">
                <use xlinkHref="#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid-container--41 email-grid">
          {products.slice(0, 4).map((item, index) => {
            return <ProductBlock key={index} {...item} />;
          })}
        </div>
        <section className="actual">
          <h2 className="visually-hidden">Актуальные товары</h2>
          <div className="actual__tabs">
            <button className="actual__new">Новинки</button>
            <button className="actual__popular">Популярное</button>
          </div>
          <div className="grid-container--41">
            {products.slice(0, 4).map((item, index) => {
              return <ProductBlock key={index} {...item} />;
            })}
          </div>
        </section>
        <section className="info">
          <h2 className="visually-hidden">Информация</h2>
          <div className="info1">
            <div className="info__desc">
              <img
                src={InfoImg}
                alt="Изображение ножей"
                className="info__img"
              />
              <div className="info__text">
                <p className="info__title">«Tuotown» – легендарные ножи, создающие шедевры</p>
                <p className="info__subtitle">Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов.<br/><br/> Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.</p>
              </div>
            </div>
          </div>
          <div className="info2">
            <div className="info__desc">
              <div className="info__text">
                Истинная красота ножа — совершённая функциональность и визуальная гармония. Этот предмет издревле сопутствовал человеку: от зари цивилизации до сегодняшних дней. На протяжении всей истории человечества он был верным помощником, незаменимым инструментом и грозным оружием. Предлагаем изделия Hi-end качества по доступным ценам настоящим ценителям японских ножей.<br/><br/>
                Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены. Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.<br/>
                <span className="info2__title">Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</span>
              </div>
              <img
                src={InfoImg1}
                alt="Изображение ножей"
                className="info__img"
              />
            </div>
          </div>
        </section>
        <section className="news">
          <h2>Новости</h2>
        </section>
      </div>
    </main>
  );
}
export default Home;