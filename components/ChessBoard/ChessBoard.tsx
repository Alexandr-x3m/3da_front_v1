import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from '../../styles/chessBoard.module.sass'

const ChessBoard: React.FC = () => {

    const [anima, setAnima] = useState<boolean>(true);

    const item = useRef<HTMLInputElement>();
    const itemContain = useRef<HTMLInputElement>();

    const item1 = useRef<HTMLInputElement>();
    const itemContain1 = useRef<HTMLInputElement>();

    const item2 = useRef<HTMLInputElement>();
    const itemContain2 = useRef<HTMLInputElement>();

    const item3 = useRef<HTMLInputElement>();
    const itemContain3 = useRef<HTMLInputElement>();

    // right and left moving
    const animation1 = (el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'bottom center+=45%',
                endTrigger: el,
                end: "top center-=35%",
                toggleActions: 'play reverse play reverse'
            },
            opacity: 1,
            //top: 0,
            //right: 0,
            //left: 0,
            duration: 0.6
        })
    }    

    useEffect(() => {
        if (document.documentElement.clientWidth < 1200) {
            setAnima(false)
        } else {
            if (anima) {
                gsap.registerPlugin(ScrollTrigger)

                animation1(item.current)
                animation1(item1.current)
                animation1(item2.current)
                animation1(item3.current)
            }
        }
    }, [item])

    return (
        <div className={s.container} > 
            <img src={'/background.jpg'} className={s.background_img} /> 
            <div className={s.content_block} >
                <h2 className={s.chessBoard__title} >ПРАВИЛЬНЫЕ ПРИОРИТЕТЫ</h2>
                <h4 className={s.chessBoard__subtitle} >Для нас важные показателем качества нашей работы является, не только выполненная работа, но и хорошее впечатление от сотрудничества с нами </h4>
                <div className={s.chessBoard__descBlock}>

                    <div className={s.empty_item} style={{width: '328px'}} ></div>

                    <div 
                        ref={itemContain}
                        className={s.item} 
                        style={{width: '600px'}} 
                    >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/support_icon.svg'} layout={'fill'} />
                        </div>
                        <div ref={item} className={s.item_content} >
                            <h6 className={s.item_title} >
                                Персонализированная поддержка
                            </h6>
                            <div className={s.item_horLine} ></div>
                            <p className={s.item_subtitle} >
                                Нужен совет? Не уверены, что сработает? Мы здесь, чтобы помочь превратить ваши идеи в уникальные концепции и добиться успешных результатов.
                            </p>
                        </div>
                    </div>

                    <div className={s.empty_item} style={{width: '240px', marginRight: '0'}} ></div>

                    <div 
                        ref={itemContain1}
                        className={s.item} 
                        style={{width: '292px'}} 
                    >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/spy_icon.svg'} layout={'fill'} />
                        </div>
                        <div ref={item1} className={s.item_content} >
                            <h6 className={s.item_title} >
                                Коммерческая тайна
                            </h6>
                            <div className={s.item_horLine} ></div>
                            <p className={s.item_subtitle} >
                                Для нас немаловажно, если вы хотите чтобы ваш заказ остался только у вас!
                            </p>
                        </div>
                    </div>

                    <div className={s.empty_item} style={{width: '350px'}} ></div>

                    <div 
                        ref={itemContain2}
                        className={s.item} 
                        style={{width: '526px', marginRight: '0'}} 
                    >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/group_icon.svg'} layout={'fill'} />
                        </div>
                        <div ref={item2} className={s.item_content} >
                            <h6 className={s.item_title} >
                                Сделаем простым
                            </h6>
                            <div className={s.item_horLine} ></div>
                            <p className={s.item_subtitle} >
                                Мы руководствуемся вашим проектом с учетом комплексного решения, что позволит вам избежать хлопот, связанных с работой с несколькими поставщиками услуг для достижения единого результата.
                            </p>
                        </div>
                    </div>

                    <div className={s.empty_item} style={{width: '482px'}} ></div>

                    <div 
                        ref={itemContain3}
                        className={s.item} 
                        style={{width: '702px', marginRight: '0'}} 
                    >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/calendar_icon.svg'} layout={'fill'} />
                        </div>
                        <div ref={item3} className={s.item_content} >
                            <h6 className={s.item_title} >
                                Производство в сроки
                            </h6>
                            <div className={s.item_horLine} ></div>
                            <p className={s.item_subtitle} >
                                Развлекательные программы, живые выступления и специальные мероприятия требуют своевременной и своевременной доставки решений. Мы не пропускаем сроки.?
                            </p>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ChessBoard;