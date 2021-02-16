import { useState } from 'react'

import s from '../styles/logAuth.module.sass'
import { LogAuthProps } from '../interfaces/interfaces'
import AuthForm from '../components/Forms/Auth/Auth'
import RegisterForm from '../components/Forms/Register/Register'



const LogAuthContainer: React.FC<LogAuthProps> = (props) => {

    const { authLog } = props

    const [activeForm, setActiveForm] = useState<boolean>(authLog)

    return (
        <div className={s.logAuth__container} >
            <div className={s.logAuth__tougleContainer} >
                <button 
                    onClick={() => setActiveForm(true)}
                    className={s.logAuth__tougle__item + ' ' + (activeForm ? s.logAuth__tougle__activeItem : null)} 
                >
                    Войти
                </button>
                <button 
                    onClick={() => setActiveForm(false)}
                    className={s.logAuth__tougle__item + ' ' + (!activeForm ? s.logAuth__tougle__activeItem : null)} 
                >
                    Зарегестрироваться
                </button>
                <div className={s.logAuth__horLine} ></div>
            </div>
            {activeForm
                ? <AuthForm />
                : <RegisterForm />
            }
            
        </div>
    )
}

export default LogAuthContainer