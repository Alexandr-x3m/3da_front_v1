import s from './InputButton.module.sass'
import { InputButtonProps } from '../../../interfaces/interfaces'
//selfwritten components
import Loader from '../../Loader/Loader'

const InputButton: React.FC<InputButtonProps> = (props) => {

    const { name, type, value, onClick, additClass, loading, link } = props

    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        onClick(e)
    }

    const linkRedirect = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
    }

    return (
        <label htmlFor={'inputButton_' + name}>
            <div className={s.container + ' ' + additClass} >
                {loading
                    ? <Loader />
                    : (<input
                            id={'inputButton_' + name}
                            type={'button'}
                            name={name}
                            value={value}
                            onClick={
                                link
                                    ? (e: React.MouseEvent<HTMLInputElement>) => linkRedirect(e) 
                                    : (e: React.MouseEvent<HTMLInputElement>) => clickHandler(e)
                                
                            }
                            className={s.input}
                    />)
                }
                {/* {icon
                    ? (typeof iconParams.src === 'undefined'
                        ? iconParams.component
                        : <img src={iconParams.src} />)
                    : null
                } */}
            </div>
        </label>
    )
}

export default InputButton;