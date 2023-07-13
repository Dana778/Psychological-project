import { useNavigate } from "react-router-dom";
import { ContainerButton } from "../style.js";
export const Button = ({tg_link}) => {
    const navigate = useNavigate()

    const buttonClick = () => {
        navigate(tg_link)
    }

    return <ContainerButton onClick={buttonClick}>
        Записаться на прием
    </ContainerButton>
}
