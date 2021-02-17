import { useEffect, useRef, useState } from 'react'

import s from './CounterInfo.module.sass'
import { CounterData } from '../../interfaces/interfaces'

const Count: React.FC<CounterData> = ({ number, text }) => {

    const item = useRef<HTMLInputElement>();
    const [dataInfo, setDataInfo] = useState<CounterData>({ number, text });
    const [viewInfo, setViewinfo] = useState<CounterData>({ number: 0, text });
    const [view, setView] = useState<boolean>(false)

    useEffect(() => {
        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setView(true)
                } else {
                    setView(false)
                }
            })
        }

        let observer = new IntersectionObserver(callback)
        observer.observe(item.current)
    }, [view])

    useEffect(() => {
        if (dataInfo.number !== viewInfo.number && view) {
            let diff = dataInfo.number - viewInfo.number
            let x;

            if (diff >= 100) {
                x = viewInfo.number + 12
                setTimeout(() => (setViewinfo(({ ...viewInfo, number: x }))), 10)
            }
            if (diff < 100 && diff >= 50) {
                x = viewInfo.number + 6
                setTimeout(() => (setViewinfo(({ ...viewInfo, number: x }))), 20)
            }
            if (diff < 50 && diff >= 5) {
                x = viewInfo.number + 2
                setTimeout(() => (setViewinfo(({ ...viewInfo, number: x }))), 50)
            }
            if (diff < 5 && diff >= 1) {
                x = viewInfo.number + 1
                setTimeout(() => (setViewinfo(({ ...viewInfo, number: x }))), 300)
            }
        }
    }, [viewInfo, view])


    return (
        <div ref={item} className={s.counterInfo__item} >
            <h4 className={s.counterInfo__counter} >
                {viewInfo.number}
            </h4>
            <div className={s.counterInfo__horLine} ></div>
            <p className={s.counterInfo__name} >
                {viewInfo.text}
            </p>
        </div>
    )
}

export default Count;