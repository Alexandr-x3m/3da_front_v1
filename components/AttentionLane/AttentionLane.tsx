import s from './AttentionLane.module.sass'
import AnimatedBtn from '../Inputs/AnimatedBtn/AnimatedBtn'
import { AttentionLaneProps } from '../../interfaces/interfaces'

const AttentionLane: React.FC<AttentionLaneProps> = (props) => {

    const { title, subtitle, btn} = props;

    return (
        <div className={s.attentionLane__container} >
            <div 
                //src={'/background_line.jpg'} 
                className={s.background}  />
            <div className={s.attentionLane__contentBlock} >
                <div>
                    {title 
                        ? <h2 className={s.title_txt + ' ' + s.custom_title} >{title}</h2>
                        : <h2 className={s.title_txt} >ЧЕМ МЫ ЗАНИМАЕМСЯ !!!</h2>
                    }
                </div>
                <h4 className={s.attentionLane__subtitle} >
                    {subtitle
                        ? subtitle
                        : null
                    }
                </h4>
                {btn
                    ? (
                        <AnimatedBtn 
                            name={'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ'}
                            additClass={s.attentionLane__request}
                        />
                    )
                    : null
                }
                
            </div>
        </div>
    )
}

export default AttentionLane;