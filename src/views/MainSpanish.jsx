import info from "../utils/apartmentsSpanish.json";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import Cards from "../components/Cards/Cards";

import "./main.css";

const MainEnglish = () => {
  return (
    <div className="container_app">
      <Button language={"English"} linkTo={"/"} linkLogo={"/imgs/usa.png"} />
      <Title language={"Apartamentos"} />
      <Cards
        apartments={info}
        details={"Detalles:"}
        services={"Servicios:"}
        booking={"Haz tu reserva!"}
        watchDetails={"Ver más detalles"}
      />
    </div>
  );
};

export default MainEnglish;
