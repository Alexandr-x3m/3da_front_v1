import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

    const text = useRef<any>();
    const image = useRef<any>();

    //fade and up animation
    const animation1 = (obj: any) => {
        gsap.to(obj, {
            scrollTrigger: {
                trigger: obj,
                start: 'top bottom',
                end: '+=400'
            },
            opacity: 1,
            top: 0,
            duration: 1.5
        })
    }

    //left or right moving animation
    const animation2 = (obj: any) => {
        gsap.to(obj, {
            scrollTrigger: {
                trigger: obj,
                start: 'top bottom',
                end: '+=400'
            },
            //opacity: 1,
            right: 0,
            left: 0,
            duration: 1.5
        })
    }


    useEffect(() => {
        if (document.documentElement.clientWidth < 1200) {
            setAnima(false)
        } else {
            if (anima) {
                gsap.registerPlugin(ScrollTrigger)

                animation1(text.current)
                animation2(image.current)
            }
        }

    }, [anima, text])

    return (
        <div className={s.servicePreview__container} style={{ flexDirection: (reverse ? 'row-reverse' : 'row') }} >
            <div
                ref={text}
                className={s.servicePreview__info}
                style={{
                    top: (anima ? '60px' : '0px'),
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
                className={s.servicePreview__img}
                style={{
                    right: (anima && reverse ? '200px' : '0px'),
                    left: (anima && reverse ? '200px' : '0px')
                }}
            >
                <Image src={img_src} layout={'fill'} />
            </div>
        </div>
    )
}

export default ServicePreview;