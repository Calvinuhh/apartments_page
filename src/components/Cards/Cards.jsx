import style from "./cards.module.css";

const Cards = ({ apartments }) => {
  console.log(apartments);

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

            {elem.apartment_data.map((elem, i) => {
              return (
                <span>
                  {elem}
                  {i < elem.length - 1 && " · "}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
