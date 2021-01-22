import { HomePageCardLayout, IconsContainer, KnowMore } from "./styles";
import CardsIcons from "../CardsIcons/";
import camiseta from "../../img/camiseta.png";
import tv from "../../img/tv.png";
import livro from "../../img/livro.png";
import { Link } from "react-scroll";

const HomePageCard = () => {
  return (
    <div>
      <HomePageCardLayout>
        <IconsContainer>
            <CardsIcons
              image={tv}
              text={"Evite o descarte desnecessário de eletrônicos"}
            />
            <CardsIcons
              image={camiseta}
              text={"Doe roupas que você não usa mais"}
            />
            <CardsIcons
              image={livro}
              text={"Enriqueça a cultura de outra pessoa"}
            />
        </IconsContainer>
        <KnowMore>
          <section id="section1">
            <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
              <span></span>Saiba mais
            </Link>
          </section>
        </KnowMore>
      </HomePageCardLayout>
    </div>
  );
};

export default HomePageCard;
