import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import InputButton from '../Inputs/InputButton/inputButton'
import s from './ServicePreview.module.sass'
import { ServicePreviewProps } from '../../interfaces/interfaces'
import { useRouter } from 'next/router'


const ServicePreview: React.FC<ServicePreviewProps> = (props) => {

    const { title, subtitle, link, img_src, reverse, animation } = props;

    const [anima, setAnima] = useState<boolean>(animation)

    const router = useRouter()

    let text = useRef<HTMLDivElement>(null);
    let image = useRef<HTMLDivElement>(null);

    //fade and up animation
    const fadeOut = (obj: any) => {
        gsap.to(obj, {
            scrollTrigger: {
                trigger: obj,
                start: 'top bottom-=20%',
                end: 'bottom top+=18%',
                toggleActions: 'play reverse play reverse',
            },
            opacity: 1,
            duration: 0.8
        })
    }
    
    //left or right moving animation
    const fadeLeftRight = (obj: HTMLDivElement) => {
        gsap.to(obj, {
            scrollTrigger: {
                trigger: obj,
                start: 'top bottom-=20%',
                end: 'bottom top+=16%',
                toggleActions: 'play reverse play reverse',
            },
            opacity: 1,
            right: 0,
            left: 0,
            duration: 0.8
        })
    }

    useEffect(() => {
        if (document.documentElement.clientWidth < 1200) {
            setAnima(false)
        } else {
            gsap.registerPlugin(ScrollTrigger)
            if (image && image.current) fadeLeftRight(image.current)
            if (text && text.current) fadeOut(text.current)
        }
    }, [image, text])

    return (
        <div className={s.container + ' ' + (reverse ? s.reverse : '')} >
            <div
                ref={text}
                className={s.info_block}
                style={{
                    opacity: (anima ? '0' : '1')
                }}
            >
                <h2>
                    {title}
                </h2>
                <h6>
                    {subtitle}
                </h6>
                <div className={s.servicePreview__btnContainer} >
                    <InputButton
                        value={'Узнать Больше'}
                        additClass={s.servicePreview__btn}
                        onClick={() => router.push(link)}
                    />
                </div>
            </div>
            <div
                ref={image}
                className={s.image}
            >
                <Image src={img_src} layout={'fill'} />
            </div>
        </div>
    )
}

export default ServicePreview;