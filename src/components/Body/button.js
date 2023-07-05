import { ContainerButton } from "./style.js";
const Button = ({func_state, stateButton}) => {
    const buttonClick = () => {
        console.log(func_state)
        func_state(!stateButton)
        window.location.replace('/results')
    }

    return <ContainerButton onClick={buttonClick}>
        кнопка
    </ContainerButton>
}

export default Button