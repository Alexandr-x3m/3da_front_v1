import s from '../../../styles/prompt.module.sass'
import { PromptProps } from '../../../interfaces/interfaces'

const Prompt: React.FC<PromptProps> = ({name, view}) => {

    return (
        <div className={s.prompt__container} style={view ? {opacity: '1'} : {opacity: '0'}} >
            <div className={s.prompt__background} ></div>
            <p className={s.prompt__text} >
                {name}
            </p>
            <div className={s.prompt__pointer} ></div>
        </div>
    )
}

export default Prompt