
import { useState } from 'react';

import s from '../../../styles/animatedBtn.module.sass'
import PopUp from '../../PopUp/PopUp';
import MailForm from '../../Forms/SendMail/SendMail'

interface AnimatedBtnProps {
    name: string,
    additClass?: string,
}

const AnimatedBtn: React.FC<AnimatedBtnProps> = (props) => {

    const { name, additClass } = props;

    
    const [requestForm, setRequestForm] = useState<boolean>(false)

    return (
        <>
            <a className={s.btn_2 + ' ' + additClass} onClick={() => setRequestForm(true)} >
                {name}
            </a>
            {requestForm
                ? <PopUp setVisibility={setRequestForm} content={<MailForm />} />
                : null
            }
        </>
    )
}

export default AnimatedBtn;