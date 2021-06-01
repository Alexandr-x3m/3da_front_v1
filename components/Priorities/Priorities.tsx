import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import s from '../../styles/components/priorities.module.sass'

const Priorities: React.FC = () => {

    let container1 = useRef<HTMLDivElement>(null)
    let container2 = useRef<HTMLDivElement>(null)
    let container3 = useRef<HTMLDivElement>(null)
    let container4 = useRef<HTMLDivElement>(null)

    let fadeOut = (container: HTMLDivElement) => {
        gsap.to(container, {
            scrollTrigger: {
                trigger: container,
                start: 'top bottom-=20%',
                end: 'bottom top+=20%',
                toggleActions: 'play reverse play reverse',
            },
            opacity: 1,
            duartion: 1.5
        })
    }

    useEffect(() => {
        //gsap.registerPlugin(ScrollTrigger)

        if (container1 && container1.current) fadeOut(container1.current)
        if (container2 && container2.current) fadeOut(container2.current)
        if (container3 && container3.current) fadeOut(container3.current)
        if (container4 && container4.current) fadeOut(container4.current)

    }, [container1, container2, container3, container4])

    return (
        <div className={s.container} >
            <div className={s.layer_1} >
                <div ref={container1} className={s.priority_item} >
                    <div className={s.mobile_img + ' ' + s.mobile_img}  >
                        <Image src={'/icons/spy_icon.svg'} layout={'fill'} />
                    </div>
                    <h4 className={s.title}>
                        КОММЕРЧЕСКАЯ <mark className={s.marker}>ТАЙНА</mark>
                    </h4>
                    <p className={s.description}>Для нас немаловажно, если вы хотите чтобы ваш заказ остался только у вас!</p>
                    <img src={'/icons/spy_icon.svg'} className={s.icon_spy} alt="" />
                </div>

                <div ref={container2} className={s.priority_item} >
                    <div className={s.mobile_img} >
                        <Image src={'/icons/support_icon.svg'} layout={'fill'} />
                    </div>
                    <h4 className={s.title}>
                        ПЕРСОНАЛЬНАЯ <mark className={s.marker}>ПОДДЕРЖКА</mark>
                    </h4>
                    <p className={s.description}>Нужен совет? Не уверены, что сработает? Мы здесь, чтобы помочь превратить ваши идеи в уникальные концепции и добиться успешных результатов.</p>
                </div>
            </div>
            <div className={s.layer_2} >
                <div ref={container3} className={s.priority_item} >
                    <div className={s.icon_watch /* + ' ' + s.mobile_img */} >
                        <svg width="162" height="163" viewBox="0 0 162 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={s.hour_arrow} d="M83 69C83 67.3431 84.3431 66 86 66V66C87.6569 66 89 67.3431 89 69V82H83V69Z" fill="#0AAFF1" />
                            <path className={s.minute_arrow} d="M83 57C83 55.3431 84.3431 54 86 54V54C87.6569 54 89 55.3431 89 57L89 83L83 83L83 57Z" fill="#0AAFF1" />
                            <path d="M136.688 81.5C136.688 68.5667 131.869 56.746 123.948 47.7533C123.933 47.6972 123.92 47.6412 123.901 47.5855L117.461 28.1465C116.84 26.2713 115.547 24.7703 113.906 23.8658V7.64062C113.906 3.42778 110.5 0 106.312 0H65.8125C61.6255 0 58.2188 3.42778 58.2188 7.64062V23.8655C56.5785 24.7703 55.2847 26.2713 54.6636 28.1465L48.2238 47.5855C48.2054 47.6412 48.1918 47.6972 48.1773 47.7533C43.5154 53.0457 39.9279 59.3167 37.7659 66.2188H32.9062C28.7189 66.2188 25.3125 69.6462 25.3125 73.8594V89.1406C25.3125 93.3538 28.7189 96.7812 32.9062 96.7812H37.7659C39.9279 103.684 43.5157 109.955 48.1779 115.248C48.1925 115.304 48.2058 115.359 48.2241 115.415L54.6639 134.854C55.285 136.729 56.5782 138.23 58.2184 139.135V155.359C58.2184 159.572 61.6252 163 65.8122 163H106.312C110.499 163 113.906 159.572 113.906 155.359V139.135C115.547 138.23 116.841 136.729 117.462 134.854L123.902 115.415C123.921 115.358 123.934 115.302 123.949 115.245C131.87 106.253 136.688 94.433 136.688 81.5ZM59.466 29.7574C59.8112 28.7157 60.7763 28.0156 61.8675 28.0156H93.6553C95.0532 28.0156 96.1866 26.8753 96.1866 25.4688C96.1866 24.0622 95.0532 22.9219 93.6553 22.9219H63.2812V7.64062C63.2812 6.23634 64.4168 5.09375 65.8125 5.09375H106.312C107.708 5.09375 108.844 6.23634 108.844 7.64062V22.9219H103.782C102.384 22.9219 101.25 24.0622 101.25 25.4688C101.25 26.8753 102.384 28.0156 103.782 28.0156H110.257C111.349 28.0156 112.314 28.7154 112.659 29.7571L116.266 40.6462C107.829 34.3147 97.3731 30.5625 86.0625 30.5625C74.7519 30.5625 64.296 34.3147 55.8587 40.6462L59.466 29.7574ZM32.9062 91.6875C31.5106 91.6875 30.375 90.5449 30.375 89.1406V73.8594C30.375 72.4551 31.5106 71.3125 32.9062 71.3125H36.4554C35.7884 74.6053 35.4375 78.0121 35.4375 81.5C35.4375 84.9879 35.7884 88.3947 36.4554 91.6875H32.9062ZM86.0625 35.6562C111.186 35.6562 131.625 56.2216 131.625 81.5C131.625 106.778 111.186 127.344 86.0625 127.344C60.9392 127.344 40.5 106.778 40.5 81.5C40.5 56.2216 60.9392 35.6562 86.0625 35.6562ZM112.659 133.243C112.314 134.285 111.349 134.984 110.258 134.984H103.782C102.384 134.984 101.251 136.125 101.251 137.531C101.251 138.938 102.384 140.078 103.782 140.078H108.844V155.359C108.844 156.764 107.708 157.906 106.312 157.906H65.8125C64.4168 157.906 63.2812 156.764 63.2812 155.359V140.078H93.6559C95.0538 140.078 96.1872 138.938 96.1872 137.531C96.1872 136.125 95.0538 134.984 93.6559 134.984H61.8682C60.7769 134.984 59.8119 134.285 59.4667 133.243L55.8593 122.354C64.2966 128.685 74.7522 132.438 86.0625 132.438C97.3737 132.438 107.83 128.685 116.267 122.353L112.659 133.243Z" fill="white" />
                            <path d="M86.0625 122.25C108.394 122.25 126.562 103.97 126.562 81.5C126.562 72.5987 123.761 64.1418 118.461 57.0436C117.621 55.9192 116.034 55.6925 114.916 56.5374C113.799 57.3824 113.573 58.9789 114.413 60.1037C118.541 65.6311 120.931 72.1033 121.407 78.9531H118.969C117.571 78.9531 116.437 80.0935 116.437 81.5C116.437 82.9065 117.571 84.0469 118.969 84.0469H121.409C120.165 101.682 106.121 115.813 88.5937 117.064V114.609C88.5937 113.203 87.4604 112.062 86.0625 112.062C84.6646 112.062 83.5312 113.203 83.5312 114.609V117.064C66.0042 115.813 51.9596 101.682 50.7164 84.0469H53.1562C54.5541 84.0469 55.6875 82.9065 55.6875 81.5C55.6875 80.0935 54.5541 78.9531 53.1562 78.9531H50.7164C51.9596 61.3179 66.0042 47.1866 83.5312 45.9358V48.3906C83.5312 49.7971 84.6646 50.9375 86.0625 50.9375C87.4604 50.9375 88.5937 49.7971 88.5937 48.3906V45.9377C95.4003 46.4162 101.831 48.8201 107.324 52.9715C108.441 53.8158 110.028 53.5898 110.868 52.4647C111.708 51.3399 111.482 49.7437 110.364 48.8987C103.311 43.5678 94.9076 40.75 86.0625 40.75C63.7305 40.75 45.5625 59.0302 45.5625 81.5C45.5625 103.97 63.7305 122.25 86.0625 122.25Z" fill="white" />
                            <rect x="83" y="79" width="6" height="6" rx="3" fill="white" />
                        </svg>
                    </div>
                    <h4 className={s.title}>
                        ПРОИЗВОДСТВО <mark className={s.marker}>В СРОКИ</mark>
                    </h4>
                    <p className={s.description}>Развлекательные программы, живые выступления и специальные мероприятия требуют своевременной и своевременной доставки решений. Мы не пропускаем сроки?</p>
                </div>

                <div ref={container4} className={s.priority_item} >
                    <div className={s.mobile_img} >
                        <Image src={'/icons/group_icon.svg'} layout={'fill'} />
                    </div>
                    <h4 className={s.title}>
                        СДЕЛАЕМ <mark className={s.marker}>ПРОСТЫМ</mark>
                    </h4>
                    <p className={s.description}>Мы руководствуемся вашим проектом с учетом комплексного решения, что позволит вам избежать хлопот, связанных с работой с несколькими поставщиками услуг для достижения единого результата.</p>
                </div>
            </div>
        </div>
    )
}

export default Priorities