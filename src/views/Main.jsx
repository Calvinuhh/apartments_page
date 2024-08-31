import info from "../utils/apartmentsEnglish.json";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import Cards from "../components/Cards/Cards";

import "./main.css";

const Main = () => {
  return (
    <div className="container_app">
      <Button
        language={"Spanish"}
        linkTo={"/spanish"}
        linkLogo={"/imgs/spain.png"}
      />
      <Title language={"Apartments"} />
      <Cards
        apartments={info}
        details={"Details:"}
        services={"Services:"}
        booking={"Make your reservation!"}
        watchDetails={"See more details"}
      />
    </div>
  );
};

export default Main;
