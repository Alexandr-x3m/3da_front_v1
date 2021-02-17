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
                <h2 className={s.attentionLane__title} >
                    {title 
                        ? title
                        : 'ЧЕМ МЫ ЗАНИМАЕМСЯ'
                    }
                </h2>
                <h4 className={s.attentionLane__subtitle} >
                    {subtitle
                        ? subtitle
                        : 'Прототипирование, Скульптинг, Инженерное моделирование'
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