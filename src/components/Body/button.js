import { useNavigate } from "react-router-dom";
import { ContainerButton } from "./style.js";
export const Button = ({func_state, stateButton}) => {
    const navigate = useNavigate()

    const buttonClick = () => {
        navigate('/results')
    }

    return <ContainerButton onClick={buttonClick}>
        кнопка
    </ContainerButton>
}
