import { useState, useEffect } from 'react'
import s from '../../../styles/inputs/inputText.module.sass'

interface iconParams {
    src?: string,
    component?: JSX.Element,
    onClick?: Function
}

interface InputTextProps {
    name?: string
    placeholder?: string,
    value: string,
    hideValue?: boolean,
    handleValue: Function,
    label: string,
    errorText?: string,
    errorValue?: boolean,
    icon?: boolean,
    iconParams?: iconParams,
    autocomplete?: string
}

const InputText: React.FC<InputTextProps> = (props) => {

    const { name, placeholder, value, hideValue, handleValue, label, errorText, errorValue, autocomplete,  icon, iconParams } = props;

    const [visability, setVisability] = useState<boolean>(true)

    const [valueTxt, setValueTxt] = useState<string>(value)
    
    /* const handleVisability = () => {
        setVisability(!visability)
    } */

    /* useEffect(() => {
        if (typeof hideValue !== 'undefined') {
            if (visability) {
                setValueTxt(value)
            } else {
                let arrVal = value.split('')
                let newVal = arrVal.map(el => el = '*')
                let strNewVal = newVal.join('')
                setValueTxt(strNewVal)
            }
        }
    }, [hideValue, visability, valueTxt, value]) */

    const handleChange = (e) => {
        debugger
        if (visability) {
            handleValue(e.target.value)
        } else {
            //превращаем текущее значение строки, такого формата '****s' в массив, выбираем последний символ массива и обновляем state 
            //поля добавляем к текущему value этого символа
            let val = e.target.value
            let arrVal = val.split('')
            let lastSymb = arrVal[arrVal.length - 1]
            handleValue(value + lastSymb)
        }
    }

    return (
        <>
            <div className={s.inputText__block} >
                <input
                    name={name}
                    id={'inputText_' + label}
                    className={s.inputText__input + ' ' + (value.length > 0 ? s.inputText__activeInput : null)}
                    value={hideValue ? (visability ? value : valueTxt) : value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoComplete={autocomplete}
                />
                <label className={s.inputText__label} htmlFor={'inputText_' + label} >
                    {label}
                </label>
                {/* hideValue 
                    ? (visability
                        ? (
                            <button onClick={handleVisability} className={s.inputText__icon} >
                                <img src={'./visibility_eye.svg'} />
                            </button>
                        )
                        : (
                            <button onClick={handleVisability} className={s.inputText__icon} >
                                <img src={'./visibility_off_eye.svg'} />
                            </button>
                        )
                    )
                    : null */
                }
                {errorValue ? (
                    <>
                        <p className={s.inputText__errorText} >{errorText}</p>
                        {/* <ErrorOutlineIcon  className='inputText__errorIcon' /> */}
                    </>
                ) : null}
            </div>
        </>
    )
}

export default InputText;