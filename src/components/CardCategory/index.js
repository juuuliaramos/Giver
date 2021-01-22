import { CardItemCategory, CardCategorys } from "./style";
import { Desktop, Book, StreetView } from "grommet-icons";

const CardCategory = ({ onClickEletronic, onClickBooks, onClickClothes }) => {
  return (
    <CardCategorys>
      <CardItemCategory onClick={onClickEletronic}>
        <Desktop />
        Eletrônicos
      </CardItemCategory>
      <CardItemCategory onClick={onClickBooks}>
        <Book />
        Livros
      </CardItemCategory>
      <CardItemCategory onClick={onClickClothes}>
        <StreetView />
        Vestuários
      </CardItemCategory>
    </CardCategorys>
  );
};

export default CardCategory;
