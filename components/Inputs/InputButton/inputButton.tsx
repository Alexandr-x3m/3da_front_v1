import s from '../../../styles/inputs/inputButton.module.sass'

interface iconParams {
    src?: string,
    component?: JSX.Element,
}

 interface InputButtonProps {
    name?: string
    type?: string,
    value: string,
    onClick?: Function,
    additClass?: string,
    icon?: boolean,
    iconParams?: iconParams
}


const InputButton: React.FC<InputButtonProps> = (props) => {

const { name, type, value, onClick, additClass, icon, iconParams } = props

    return (
        <label htmlFor={'inputButton_' + name}>
            <div className={s.inputButton__container + ' ' + additClass} >
                <input 
                    id={'inputButton_' + name}
                    type={(typeof type === 'undefined') ? 'button' : type}
                    name={name}
                    value={value}
                    onClick={(val) => onClick(val)}
                    className={s.inputButton__input}
                />
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