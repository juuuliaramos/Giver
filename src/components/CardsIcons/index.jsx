import { IconsContainer } from "./styles";


const CardIcons = ( { image, text }) => {
    return(
        <IconsContainer>
            <img src={image} alt="icons"/>
            <p>{text}</p>
        </IconsContainer>
    )
}

export default CardIcons;