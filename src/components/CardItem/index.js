//STYLE
import { Card, CardImage, CardBody } from "./style";

const CardItem = ({ nome, descricao, imagem, info }) => {
  return (
    <Card onClick={info}>
      <CardImage>
        {imagem ? <img src={imagem} alt={`Foto ${nome}`} /> : <h1>Sem foto</h1>}
      </CardImage>

      <CardBody>
        <h2>{nome}</h2>
        <span>{descricao}</span>
      </CardBody>
    </Card>
  );
};
export default CardItem;
