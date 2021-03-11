import { useEffect, useState, createRef } from 'react'

import s from './Slider3D.module.sass'

interface Slider3DProps {
    dt: { id: string, position: number, src: string, name: string }[]
}

const Slider3D: React.FC<Slider3DProps> = ({ dt }) => {



    const [data, setData] = useState<{ id: string, position: number, src: string, name: string }[]>(dt)
    const [sndSwipe, setSndSwipe] = useState<{ dir: string, step: number }>({ dir: '', step: 0 })

    useEffect(() => {
        if (sndSwipe.dir === 'left') swipeSlideLeft(sndSwipe.step)
        if (sndSwipe.dir === 'right') swipeSlideRight(sndSwipe.step)
    }, [sndSwipe])


    const swipeSlideLeft = async (step: number) => {

        const dt = data.map((el) => ({ ...el, position: el.position === 5 ? 1 : el.position + 1 }))
        setData(dt)
        step = step - 1

        if (step !== 0 && step > 0) setSndSwipe({ dir: 'left', step: step })
        else setSndSwipe({ dir: '', step: 0 })
    }

    const swipeSlideRight = async (step: number) => {

        const dt = data.map((el) => ({ ...el, position: el.position === 1 ? 5 : el.position - 1 }))
        setData(dt)
        step = step - 1

        if (step !== 0 && step > 0) setSndSwipe({ dir: 'right', step: step })
        else setSndSwipe({ dir: '', step: 0 })
    }


    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        let activeSlide = e.currentTarget.id /// 'id_1'
        let pos = data.findIndex(el => el.id === activeSlide)
        let diff = data[pos].position - 3

        if (diff < 0) {
            // swipe to the left
            let step = Math.abs(diff)
            swipeSlideLeft(step)
        } else {
            let step = Math.abs(diff)
            swipeSlideRight(step)
        }
    }

    return (
        <div className={s.container} >
            <div className={s.carousel}>
                {data.map((el, index) => (
                    <div
                        key={`${el.id}_321321lds_${index}`}
                        id={`${el.id}`}
                        className={s.item + ' ' + s[`position_${el.position}`]}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => clickHandler(e)}
                    >
                        <img src={el.src} />
                        <h2 className={s.name}>{el.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider3D