import s from '../../../styles/inputs/inputButton.module.sass'
import { InputButtonProps } from '../../../interfaces/interfaces'
import Loader from '../../Loader/Loader'

const InputButton: React.FC<InputButtonProps> = (props) => {

    const { name, type, value, onClick, additClass, icon, iconParams, loading } = props

    return (
        <label htmlFor={'inputButton_' + name}>
            <div className={s.inputButton__container + ' ' + additClass} >
                {loading
                    ? <Loader />
                    : (<input
                            id={'inputButton_' + name}
                            type={(typeof type === 'undefined') ? 'button' : type}
                            name={name}
                            value={value}
                            onClick={onClick ? (val) => onClick(val) : null}
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