import { ContainerButton } from "./style.js";
export const Button = ({func_state, stateButton}) => {
    const buttonClick = () => {
        window.location.replace('/results')
    }

    return <ContainerButton onClick={buttonClick}>
        кнопка
    </ContainerButton>
}
