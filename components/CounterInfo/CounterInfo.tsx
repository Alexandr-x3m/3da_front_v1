
import s from '../../styles/CounterInfo.module.sass'
import { CounterInfoProps } from '../../interfaces/interfaces'
import Count from './Count'

const CounterInfo: React.FC<CounterInfoProps> = ({ data }) => {

    return (
        <div className={s.counterInfo__container} >
            <img src={'/background2.jpg'} className={s.counterInfo__background} />
            <h2 className={s.counterInfo__title} >
                Наша студия в цифрах
            </h2>
            <div className={s.conter_container} >
                {data.map((el, index) => (
                    <div key={'counter_item_' + index}>
                        <Count number={el.number} text={el.text} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CounterInfo;