import { useNavigate } from "react-router-dom";
import { ContainerButton } from "../style.js";
export const Button = ({func_state, stateButton, res}) => {
    const navigate = useNavigate()
    
    const buttonClick = () => {
        navigate('/results')
    }

    return <ContainerButton onClick={buttonClick}>
        Узнать свой результат
    </ContainerButton>
}
