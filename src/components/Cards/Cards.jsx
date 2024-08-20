import style from "./cards.module.css";
import { Link } from "react-router-dom";

const Cards = ({ apartments }) => {
  return (
    <div className={style.container}>
      {apartments.map((elem, index) => {
        return (
          <div className={style.card_container} key={index}>
            <h1 className={style.titles}>{elem.title}</h1>

            <section className={style.slider}>
              {elem.images.map((elem, i) => {
                return (
                  <img key={i} src={elem} alt={`apartment_image_${i + 1}`} />
                );
              })}
            </section>

            <h2 className={style.apartment_info}>
              {elem.apartment_data.map(
                (data, i) =>
                  `${data}${i < elem.apartment_data.length - 1 ? " · " : ""}`
              )}
            </h2>

            <details>
              <summary className={style.summary}>Detalles:</summary>
              <p className={style.p_description}>{elem.description}</p>
            </details>

            <details>
              <summary className={style.summary}>Servicios:</summary>
              {elem.offers.map((elem, i) => {
                return (
                  <li key={i} className={style.lista_offers}>
                    {elem}
                  </li>
                );
              })}
            </details>

            <details>
              <summary className={style.summary}>Link:</summary>

              <Link className={style.link} target="_blank" rel="noopener noreferrer" to={elem.link}>
                Ver más detalles
              </Link>
            </details>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
