import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from './Animation1.module.sass'


const Animation1: React.FC = (props) => {

    const [showEl, setShowEl] = useState<boolean>(false)
    const gif = useRef<HTMLDivElement>()

    useEffect(() => {
        
        if (showEl) {

        }
        gsap.registerPlugin(ScrollTrigger)
        
        

        gsap.to(gif.current, {
            scrollTrigger: {
                markers: true
            }
        })

        setTimeout(() => {
            setShowEl(true)
        }, 1500)

    }, [gif])

    return (
        <>
            <div className={s.container}>
                {props.children}
            </div>
        </>
    )
}

export default Animation1