import { useNavigate } from "react-router-dom";
import { ContainerButton } from "../style.js";
export const Button = ({res}) => {
    const navigate = useNavigate()
    
    const buttonClick = () => {
        if (res===0){navigate('/extravert')}
        if (res===1){navigate('/introvert')}
        if (res===2){navigate('/choleric')}
        if (res===3){navigate('/sangvinik')}
    }

    return <ContainerButton onClick={buttonClick}>
        Узнать свой результат
    </ContainerButton>
}
