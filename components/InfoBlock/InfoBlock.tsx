import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from './InfoBlock.module.sass'
import { InfoBlockProps } from '../../interfaces/interfaces'



const InfoBlock: React.FC<InfoBlockProps> = (props) => {

    const { list, listData, title, description, style, src, additClass } = props

    const [anima, setAnima] = useState<boolean>(true)
    const [data, setData] = useState<{title: string, subtitle: string}[]>(listData ? listData : [{title: ' ', subtitle: ' '}])

    const container = useRef<HTMLDivElement>(null)

    // right and left moving
    const topFadeOut = (el: HTMLDivElement) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top bottom-=20%',
                end: 'bottom',
                markers: true
            },
            opacity: 1,
            top: 0,
            duration: 1
        })
    }


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (container && container.current && style === 'style_3') topFadeOut(container.current)
    }, [anima, container])


    return (
        <div className={s.container + ' ' + s[style] + ' ' + additClass} ref={container} >
            <div className={s.mainImg_container} >
                    <img src={src} className={s.main_img} />
            </div>
            {list
                ? (<div className={s.list_container} >
                    <div className={s.list_wrapper}>
                        {data.map((el, index) => (
                            <div key={'list_itme_' + index} className={s.list_item} >
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
                : (<div className={s.txt_container} >
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