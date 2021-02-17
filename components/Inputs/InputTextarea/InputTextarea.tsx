import s from '../InputText/InputText.module.sass'
import { InputTextareaProps } from '../../../interfaces/interfaces'

const InputTextarea: React.FC<InputTextareaProps> = (props) => {

    const { required, label, name, value, setValue } = props;

    return (
        <div 
            className={s.container}
            style={{height: '100%', marginBottom: '32px'}} 
        >
            <textarea
                id={'inputTextarea_' + label}
                className={s.input + ' ' + (value.length > 0 ? s.activeInput : null)}
                name={name}
                value={value}
                required={required}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    minWidth: '100%', 
                    maxWidth: '100%', 
                    minHeight: '200px'
                }}
            />
            <label className={s.label} htmlFor={'inputTextarea_' + label} >
                {label}
            </label>
        </div>
    )
}

export default InputTextarea;