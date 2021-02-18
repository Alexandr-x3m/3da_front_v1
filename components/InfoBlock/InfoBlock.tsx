import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from './InfoBlock.module.sass'
import { InfoBlockProps } from '../../interfaces/interfaces'
import Animation1 from '../interfaceEl/Animation1/Animation1'



const InfoBlock: React.FC<InfoBlockProps> = (props) => {

    const { list, listData, title, description, style, src } = props

    const [anima, setAnima] = useState<boolean>(true)

    const image = useRef<HTMLImageElement>()
    const text = useRef<HTMLInputElement>()

    // right and left moving
    const animation1 = (el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'center bottom+=50px',
                markers: true
            },
            opacity: 1,
            top: 0,
            right: 0,
            left: 0,
            duration: 1.5
        })
    }
    const animation2 = (el) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'center bottom+=50px',
                markers: true
            },
            opacity: 1,
            top: 0,
            right: 0,
            left: 0,
            duration: 0.1
        })
    }

    useEffect(() => {
        
        if (document.documentElement.clientWidth < 1200) {
            setAnima(false)
        } else {
            debugger
            if (anima) {
                gsap.registerPlugin(ScrollTrigger)

                animation1(image.current)
                animation1(text.current)
            }
        }
    }, [anima])


    return (
        <div className={s.container + ' ' + s[style]} >
            <div className={s.mainImg_container} >
                <Animation1>
                    <img 
                        ref={image}
                        src={src} 
                        className={s.main_img}
                        style={
                            (anima && style !== 'style_2') 
                                ? {top: '120px', opacity: '0'} 
                                : {opacity: '0'}
                        }  
                    />
                </Animation1>
            </div>
            {list
                ? (<div  ref={text} className={s.list_container} style={(anima) ? {opacity: '0'} : null} >
                    <div className={s.list_wrapper}>
                        <p className={s.list_title} >МЫ ЭКСПЕРТЫ</p>
                        {listData.map((el, index) => (
                            <div 
                                key={'list_itme_' + index} 
                                className={s.list_item} 
                            >
                                <img src={'/list_marker.svg'} className={s.list_icon} />
                                <div className={s.list_txtContainer} >
                                    <p className={s.listItem__title} >
                                        {el.title}
                                    </p>
                                    <p className={s.listItem_description} >
                                        {el.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
                : (<div 
                        ref={text}
                        className={s.txt_container} 
                        style={
                            (anima)
                                ? ({top: '120px', opacity: '0'})
                                : null 
                        }
                    >
                    {title
                        ? <p className={s.txt_title} >{title}</p>
                        : null
                    }
                    {description
                        ? <p className={s.txt_description} >{description}</p>
                        : null
                    }
                </div>)
            }
        </div>
    )
}

export default InfoBlock;