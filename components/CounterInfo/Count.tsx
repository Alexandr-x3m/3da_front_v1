import { useEffect, useRef, useState } from 'react'

import s from './CounterInfo.module.sass'
import { CounterData } from '../../interfaces/interfaces'

const Count: React.FC<{ number: number, text: string}> = ({ number, text }) => {

    const item = useRef<HTMLDivElement>(null)

    const [dataInfo, _setDataInfo] = useState<CounterData['data']>({ number, text });
    const [viewInfo, setViewinfo] = useState<CounterData['data']>({ number: 0, text });
    const [view, setView] = useState<boolean>(false)

    useEffect(() => {
        let callback = (entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setView(true)
                } else {
                    setView(false)
                }
            })
        }
        
        if (item && item.current) {
            let observer = new IntersectionObserver(callback)
            observer.observe(item.current)
        }
    }, [view])

    useEffect(() => {
        if (dataInfo.number !== viewInfo.number && view) {
            let diff = dataInfo.number - viewInfo.number
            let x: number;

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
        <div
            className={s.counter_container}
        >
            <div
                ref={item}
                className={s.counterInfo__item}
            >
                {view
                    ? (<svg className={s.top_angle} width="122" height="47" viewBox="0 0 122 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0L2 45L122 45" stroke="#0AAFF1" strokeWidth="3" >
                            <animate attributeName="d" values="M2 0L2 0L1 0; M2 0L2 45L1 45; M2 0L2 45L122 45" dur="1s" />
                        </path>
                    </svg>)
                    : null
                }

                <h4 className={s.counterInfo__counter} >
                    {viewInfo.number}
                </h4>
                <p className={s.counterInfo__name} >
                    {viewInfo.text}
                </p>
                {view
                    ? (<svg className={s.bottom_angle} width="122" height="47" viewBox="0 0 122 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 0L2 45L122 45" stroke="#0AAFF1" strokeWidth="3" >
                            <animate attributeName="d" values="M2 0L2 0L1 0; M2 0L2 45L1 45; M2 0L2 45L122 45" dur="1s" />
                        </path>
                    </svg>
                    )
                    : null
                }
            </div>
        </div>
    )
}

export default Count;