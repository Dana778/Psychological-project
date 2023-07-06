import { TLinksStyle } from "../style"
export const TitleLink = ({t_objest}) => {

    const buttonClick = () => {
        window.location.replace('/')
    }

    return <TLinksStyle onClick={buttonClick} > 
        {t_objest}
    </TLinksStyle>
}