
import { useState } from 'react';
import s from '../../styles/attentionLane.module.sass';
import MailForm from '../Forms/SendMail/SendMail';
import AnimatedBtn from '../Inputs/AnimatedBtn/AnimatedBtn';

interface AttentionLaneProps {
    title?: string,
    subtitle?: string,
    btn?: boolean
}

const AttentionLane: React.FC<AttentionLaneProps> = (props) => {

    const { title, subtitle, btn} = props;

    return (
        <div className={s.attentionLane__container} >
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