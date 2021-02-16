import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import InputButton from '../Inputs/InputButton/inputButton'
import s from '../../styles/ServicePreview.module.sass'
import { ServicePreviewProps } from '../../interfaces/interfaces'


const ServicePreview: React.FC<ServicePreviewProps> = (props) => {

    const { title, subtitle, link, img_src, reverse, animation } = props;

    const [anima, setAnima] = useState<boolean>(animation)

    const text = useRef<HTMLInputElement>();
    const image = useRef<HTMLInputElement>();

    //fade and up animation
    const animation1 = (obj) => {
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
    const animation2 = (obj) => {
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
        <div className={s.servicePreview__container} style={reverse ? { flexDirection: 'row-reverse' } : null} >
            <div 
                ref={text}
                className={s.servicePreview__info} 
                style={anima ? ({top: '60px', opacity: '0'}) : null} 
            >
                <h2>
                    {title}
                </h2>
                <h6>
                    {subtitle}
                </h6>
                <div className={s.servicePreview__btnContainer} >
                    <Link href={link}>
                        <a>
                            <InputButton
                                value={'Узнать Больше'}
                                additClass={s.servicePreview__btn}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div 
                ref={image}
                className={s.servicePreview__img}
                style={anima
                    ? (reverse 
                        ? ({right: '200px'})
                        : ({left: '200px'})
                    )
                    : null
                } 
            >
                <Image src={img_src} layout={'fill'} />
            </div>
        </div>
    )
}

export default ServicePreview;