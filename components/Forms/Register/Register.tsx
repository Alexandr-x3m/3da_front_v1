import { useState } from 'react'
import s from './Register.module.sass'
import InputButton from '../../Inputs/InputButton/inputButton'
import InputText from '../../Inputs/InputText/InputText'


const RegisterForm: React.FC = () => {

    const [nameUser, setNameUser] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPass, setConfirmPass] = useState<string>('')
    const [hash, setHash] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        debugger
        /* bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
                // Store hash in your password DB.
                setHash(hash)
            });
        }); */
    }

    console.log('hash: ' + hash)
    return (
        <form className={s.registerForm__container} onSubmit={handleSubmit} >
            <InputText 
                label={'Имя пользователя'}
                value={nameUser}
                handleValue={setNameUser}
            />
            <InputText 
                label={'Эл. почта'}
                value={email}
                handleValue={setEmail}
            />
            <InputText 
                label={'Пароль'}
                value={password}
                handleValue={setPassword}
                hideValue={true}
                autocomplete={'off'}
            />
            <InputText 
                label={'Подтвердите пароль'}
                value={confirmPass}
                handleValue={setConfirmPass}
                hideValue={true}
                autocomplete={'off'}
            />
            <div className={s.registerForm__submitContainer} >
                {/* <InputButton 
                    value={'Зарегестрироваться'}
                    type={'submit'}
                /> */}
            </div>
        </form>
    )
}

export default RegisterForm;