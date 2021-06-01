import React, { useEffect, useState, useRef } from 'react'

import s from './Slider3D.module.sass'

interface Slider3DProps {
    dt: { id: string, position: number, src: string, name: string }[]
}

const Slider3D: React.FC<Slider3DProps> = ({ dt }) => {



    const [data, setData] = useState<{ id: string, position: number, src: string, name: string }[]>(dt)
    const [sndSwipe, setSndSwipe] = useState<{ dir: string, step: number }>({ dir: '', step: 0 })
    const [view, setView] = useState<boolean>(false)

    const [touchStart, setTouchStart] = useState<number>(0)

    const container = useRef<HTMLDivElement>(null)

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
        
        if (container && container.current && document.documentElement.clientWidth < 1200) {
            let observer = new IntersectionObserver(callback, {threshold: 1.0})
            observer.observe(container.current)
        }
    }, [view, container])


    const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {

        let x = e.changedTouches[0].screenX
    
        setTouchStart(x)
    } 

    const touchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {

        let x = e.changedTouches[0].screenX

        let diff = touchStart - x

        console.log(diff)
        if (diff > 75) setSndSwipe({dir: 'left', step: 1})
        if (diff < 75) setSndSwipe({dir: 'right', step: 1})

    } 
    


    return (
        <div className={s.container} ref={container} >
            <div className={s.carousel} 
                onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => touchEndHandler(e)}
                onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => touchStartHandler(e)}
            >
                {data.map((el) => (
                    <div
                        key={`${el.id}_slide_3d`}
                        id={`${el.id}`}
                        className={s.item + ' ' + s[`position_${el.position}`]}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => clickHandler(e)}
                    >
                        <img src={el.src} />
                        <h2 className={s.name}>{el.name}</h2>
                    </div>
                ))}
                {view
                    ? (<svg className={s.swipe_icon} width="98" height="109" viewBox="0 0 98 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2025 20.4599L15.0521 20.0961C32.8705 6.4626 57.799 6.45773 75.6142 20.0961L71.454 20.4615C69.8421 20.6028 68.6498 22.027 68.7891 23.6429C68.9219 25.1711 70.2001 26.3225 71.7035 26.3225C71.7893 26.3225 71.8752 26.3192 71.9627 26.3111L82.9803 25.3465C84.5906 25.2052 85.7829 23.7809 85.6436 22.1667L84.6813 11.1186C84.5403 9.50435 83.1131 8.31071 81.5093 8.44875C79.8974 8.59004 78.7051 10.0143 78.8444 11.6285L79.1765 15.4336C59.2619 0.177717 31.3865 0.193955 11.4751 15.4514L11.8088 11.6285C11.9498 10.0127 10.7575 8.58841 9.14555 8.44713C7.51745 8.31071 6.11291 9.49948 5.97359 11.1186L5.01131 22.1634C4.87037 23.7777 6.06269 25.2019 7.67459 25.3448L18.6938 26.3095C18.7797 26.316 18.8656 26.3209 18.9514 26.3209C20.4532 26.3209 21.733 25.1678 21.8658 23.6396C22.0051 22.0254 20.8144 20.6011 19.2025 20.4599Z" fill="white"/>
                            <path className={s.icon_hand} d="M72.4817 48.5396C71.1739 48.5396 69.985 48.8969 69.0339 49.4924C67.9639 47.2293 65.7051 45.6809 63.0895 45.6809C61.7817 45.6809 60.5928 46.0382 59.6417 46.6338C58.5717 44.3707 56.3128 42.8222 53.6973 42.8222C52.7462 42.8222 51.6762 43.0604 50.8439 43.4178V25.5511C50.8439 21.8587 47.8717 19 44.3051 19C40.7384 19 37.7662 21.9778 37.7662 25.5511V55.3289L35.7451 51.16C34.7939 48.6587 32.2973 46.872 29.5628 46.872C28.8495 46.872 28.0173 46.9911 27.3039 47.2293C25.6395 47.8249 24.3317 49.016 23.6184 50.6835C22.9051 52.232 22.7862 54.0187 23.3806 55.6862C23.3806 55.6862 23.3806 55.8053 23.4995 55.8053L37.1717 84.8684C37.1717 84.9875 37.2906 84.9875 37.2906 85.1067C38.7173 87.2507 40.3817 89.1564 42.4028 90.824C42.5217 90.9431 42.6406 90.9431 42.7595 91.0622C42.8784 91.1813 42.8784 91.1813 42.9973 91.3004C46.9206 94.1591 51.5573 95.7075 56.4317 95.7075C68.5584 95.7075 78.545 86.1787 79.0206 74.1484C79.0206 74.1484 79.0206 74.0293 79.0206 73.9102C79.0206 73.5529 79.0206 73.1955 79.0206 72.8382C79.0206 72.7191 79.0206 72.7191 79.0206 72.6V72.3618C79.0206 72.1235 79.0206 72.0044 79.0206 71.7662V55.0907C79.1395 51.5173 76.1673 48.5396 72.4817 48.5396ZM56.4317 92.0151C52.3895 92.0151 48.5851 90.824 45.3751 88.4418L45.1373 88.2036C44.8995 87.9653 44.6617 87.8462 44.4239 87.7271C42.8784 86.4169 41.5706 84.9875 40.5006 83.32L26.9473 54.4951C26.7095 53.7804 26.7095 53.0658 27.0662 52.3511C27.4228 51.6364 27.8984 51.16 28.6117 50.9218C30.0384 50.4453 31.7028 51.16 32.1784 52.5893C32.1784 52.5893 32.1784 52.7084 32.2973 52.7084L37.8851 64.6195C38.2417 65.4533 39.1928 65.8107 40.0251 65.6916C40.8573 65.4533 41.4517 64.7387 41.4517 63.9049V25.5511C41.4517 24.0027 42.7595 22.6924 44.3051 22.6924C45.8506 22.6924 47.1584 24.0027 47.1584 25.5511V49.3733C47.1584 50.4453 47.9906 51.2791 49.0606 51.2791C50.1306 51.2791 50.9628 50.4453 50.9628 49.3733C50.9628 47.8249 52.2706 46.5147 53.8162 46.5147C55.3617 46.5147 56.6695 47.8249 56.6695 49.3733V52.232C56.6695 53.304 57.5017 54.1378 58.5717 54.1378C59.6417 54.1378 60.4739 53.304 60.4739 52.232C60.4739 50.6835 61.7817 49.3733 63.3273 49.3733C64.8728 49.3733 66.1806 50.6835 66.1806 52.232V55.0907C66.1806 56.1627 67.0128 56.9964 68.0828 56.9964C69.1528 56.9964 69.985 56.1627 69.985 55.0907C69.985 53.5422 71.2928 52.232 72.8384 52.232C74.3839 52.232 75.6917 53.5422 75.6917 55.0907V72.1235V72.6C75.6917 72.8382 75.6917 72.9573 75.6917 73.1955C75.6917 73.5529 75.6917 73.7911 75.6917 74.1484C74.7406 84.1538 66.5373 92.0151 56.4317 92.0151Z" fill="white"/>
                        </svg>)
                    : null
                }                
            </div>
        </div>
    )
}

export default Slider3D