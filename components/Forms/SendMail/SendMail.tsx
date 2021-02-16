import { useState } from 'react';
import InputButton from '../../Inputs/InputButton/inputButton';
import InputText from '../../Inputs/InputText/InputText';

import s from '../../../styles/form/sendMail.module.sass';

const MailForm: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [mail, setMail] = useState<string>('');

    const handleSubmit = (e) => {
        e.preventDefault()
        debugger
    }

    return (
        <form 
            method={'POST'}
            action={'http://localhost:3001/sendmail'}
            className={s.mailForm__container} 
            //onSubmit={handleSubmit}
        >
            <h1 className={s.mailForm__title} >Оставить заявку</h1>
            <InputText 
                name={'name'}
                label={'Имя*'}
                value={name}
                handleValue={setName}
            />
            <InputText 
                name={'phone'}
                label={'Номер телефона*'}
                value={phone}
                handleValue={setPhone}
            />
            <InputText 
                name={'email'}
                label={'Эл. почта*'}
                value={mail}
                handleValue={setMail}
            />
            <div className={s.mailForm__submitContainer} >
                <InputButton 
                    value={'Отправить'}
                    type={'submit'}
                />
            </div>
        </form>
    )
}

export default MailForm;