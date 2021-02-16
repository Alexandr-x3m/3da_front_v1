import { useState } from 'react';
import s from '../../styles/popUp.module.sass'
import RadioInput from '../Inputs/Radio/RadioInput';

interface PopUpProps {
    setVisibility: Function,
    content: JSX.Element
}

const PopUp: React.FC<PopUpProps> = (props) => {

    const { setVisibility, content } = props;

    //const [] = useState<boolean>(true)

    return (
        <div className={s.popUp__container} >
            <div className={s.popUp__background} onClick={() => setVisibility(false)} ></div>
            <div className={s.popUp__ContentContainer} >
                <button className={s.popUp__closeBtn} onClick={() => setVisibility(false)} >
                    <img src={'./clear_icon.svg'} />
                </button>
                {content}
            </div>
        </div>
    )
}

export default PopUp;