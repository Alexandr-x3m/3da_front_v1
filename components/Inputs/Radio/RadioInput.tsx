import s from '../../../styles/inputs/radioInputs.module.sass'
import  { RadioInput } from '../../../interfaces/interfaces'

const RadioInput: React.FC<RadioInput> = (props) => {

    const { data } = props;

    return (
        <div className={s.radioInput__container} >
            {data.map(() => (
                <input type="text" name="" />
            ))}
        </div>
    )
}

export default RadioInput;