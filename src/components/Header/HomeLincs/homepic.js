import { PicPointer } from "../style"
export const HomePic = ({p_object}) => {

    const buttonClick = () => {
        window.location.replace('/')
    }

    return <PicPointer onClick={buttonClick} > 
        {p_object}
    </PicPointer>
}
