export const HomePic = ({func_state, stateButton}) => {
    const buttonClick = () => {
        window.location.replace('/')
    }

    return <div onClick={buttonClick}>
        {stateButton}
    </div>
}
