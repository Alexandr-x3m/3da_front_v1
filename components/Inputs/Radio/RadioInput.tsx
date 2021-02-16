import s from '../../../styles/inputs/radioInputs.module.sass'

interface RadioInput {
    data: Array<string>
}

const RadioInput: React.FC = (props) => {

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