import { useState } from "react"
import InputButton from "../../Inputs/InputButton/inputButton"
import InputText from "../../Inputs/InputText/InputText"
import s from './Auth.module.sass'


const AuthForm: React.FC = () => {

    const [login, setLogin] = useState<string>('')

    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className={s.authForm__container} >
            <InputText 
                key={'123'}
                label={'Логин'}
                value={login}
                handleValue={setLogin}
            />
            <InputText 
                key={'124'}
                label={'Пароль'}
                value={password}
                hideValue={true}
                handleValue={setPassword}
            />
            <div className={s.authForm__submitContainer} >
                {/* <InputButton 
                    type={'submit'}
                    value={'Войти'}
                /> */}
            </div>
        </form>
    )
}

export default AuthForm;