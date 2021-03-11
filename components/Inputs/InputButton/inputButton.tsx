import s from './InputButton.module.sass'
import { InputButtonProps } from '../../../interfaces/interfaces'
import Loader from '../../Loader/Loader'

const InputButton: React.FC<InputButtonProps> = (props) => {

    const { name, type, value, onClick, additClass, icon, iconParams, loading } = props

    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log('click')
        onClick(e)
    }

    return (
        <label htmlFor={'inputButton_' + name}>
            <div className={s.inputButton__container + ' ' + additClass} >
                {loading
                    ? <Loader />
                    : (<input
                            id={'inputButton_' + name}
                            type={'button'}
                            name={name}
                            value={value}
                            onClick={(e: React.MouseEvent<HTMLInputElement>) => clickHandler(e)}
                            className={s.inputButton__input}
                    />)
                }
                {icon
                    ? (typeof iconParams.src === 'undefined'
                        ? iconParams.component
                        : <img src={iconParams.src} />)
                    : null
                }
            </div>
        </label>
    )
}

export default InputButton;