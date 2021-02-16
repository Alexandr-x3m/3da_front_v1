import s from '../../styles/CounterInfo.module.sass';

interface CounterInfoData {
    number: string,
    text: string
}

interface CounterInfoProps {
    data: Array<CounterInfoData>
}

const CounterInfo: React.FC<CounterInfoProps> = ({ data }) => {


    return (
        <div className={s.counterInfo__container} >
            <img src={'/background-img2.jpg'} className={s.counterInfo__background} />
            <h2 className={s.counterInfo__title} >
                Наша студия в цифрах
            </h2>
            <div className={s.conten_container} >
                {data.map(el => (
                    <div className={s.counterInfo__item} > 
                        <h4 className={s.counterInfo__counter} >
                            {el.number}
                        </h4>
                        <div className={s.counterInfo__horLine} ></div>
                        <p className={s.counterInfo__name} >
                            {el.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CounterInfo;