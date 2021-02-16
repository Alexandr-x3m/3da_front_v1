
import { useState } from 'react';

import s from '../../../styles/animatedBtn.module.sass'
import SendMailContainer from '../../Forms/SendMail/SendMailContainer'
import { AnimatedBtnProps } from '../../../interfaces/interfaces'

const AnimatedBtn: React.FC<AnimatedBtnProps> = (props) => {

    const { name, additClass } = props;
    
    const [requestForm, setRequestForm] = useState<boolean>(false);

    return (
        <>
            <a className={s.btn_2 + ' ' + additClass} onClick={() => setRequestForm(true)} >
                {name}
            </a>
            {requestForm
                ? <SendMailContainer setVisability={setRequestForm}  />
                : null
            }
        </>
    )
}

export default AnimatedBtn;