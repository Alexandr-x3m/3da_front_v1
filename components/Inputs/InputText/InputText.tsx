import { useState, useEffect } from 'react'

import s from './InputText.module.sass'
import { InputTextProps } from '../../../interfaces/interfaces'


const InputText: React.FC<InputTextProps> = (props) => {

    const { name, placeholder, value, hideValue, handleValue, required, label, errorText, errorValue, autocomplete,  icon, iconParams } = props;

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
            <div className={s.container} >
                <input
                    name={name}
                    id={'inputText_' + label}
                    className={s.input + ' ' + (value.length > 0 ? s.activeInput : null)}
                    value={hideValue ? (visability ? value : valueTxt) : value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    autoComplete={autocomplete}
                    required={required}
                />
                <label className={s.label} htmlFor={'inputText_' + label} >
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