import { useState, useEffect } from 'react'
import { useMutation } from 'urql'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import s from './MainPage.module.sass';
import { ActiveSlideMP } from '../../interfaces/interfaces'
import Slider from '../Slider/Slider'
import AttentionLane from '../AttentionLane/AttentionLane'
import ServicePreview from '../ServicePreview/ServicePreview'
import ChessBoard from '../ChessBoard/ChessBoard'
import CounterInfo from '../CounterInfo/CounterInfo'
import Footer from '../Footer/Footer'

const GET_MAIN_SLIDES = `
query {
    main_page_slides {
        id
        desc
        img
        title
        url
    }
  }`


const MainPageContainer: React.FC<ActiveSlideMP> = ({scroll}) => {


    const [slides, setSlides] = useState<any>([]);


    const [getSlidesResult, getSlidesQuery] = useMutation(GET_MAIN_SLIDES);

    useEffect(() => {
        if (slides.length == 0) {
            getSlidesQuery()
                .then(res => {
                    let data = res.data.main_page_slides
                    setSlides(data)
                })
        }
    }, [slides])

    gsap.registerPlugin(ScrollTrigger)

    return (
        <>
            <div className={s.container} style={scroll > 120 ? {top: '64px'} : {top: '112px'}} >
                <div className={s.sliderWindow} >
                    <Slider
                        data={slides}
                        thumbnail={false}
                        swiper={true}
                        additClass={s.mainPageContainer__slider}
                        autoSwipe={true}
                    />
                </div>
                <AttentionLane />

                <div className={s.servicesList}>
                    <ServicePreview
                        title={'Художественное моделирование'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-modeling?segment=1'}
                        img_src={'/artistic-preview.jpg'}
                        animation={true}
                    />
                    <ServicePreview
                        title={'ИНЖЕНЕРНОЕ МОДЕЛИРОВАНИЕ'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-modeling?segment=2'}
                        img_src={'/engineering-preview.jpg'}
                        reverse={true}
                        animation={true}
                    />
                    <ServicePreview
                        title={'Ювелирное МОДЕЛИРОВАНИЕ'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-modeling?segment=3'}
                        img_src={'/jewelry/photo_2021-01-30_04-02-14 (2).jpg'}
                        animation={true}
                    />
                    <ServicePreview
                        title={'3D печать'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-printing'}
                        img_src={'/3d-printer-preview.jpg'}
                        reverse={true}
                        animation={true}
                    />
                    <div className={s.transition_background} ></div>
                </div>
                <ChessBoard />
                <CounterInfo data={[
                    {
                        number: 764,
                        text: 'Проектов выполнено'
                    },
                    {
                        number: 42,
                        text: 'Постоянных клиентов'
                    },
                    {
                        number: 3,
                        text: 'Года на рынке'
                    },
                    {
                        number: 141,
                        text: 'Напечатанно моделей'
                    }
                ]} />

                <AttentionLane
                    title={'Давайте воплотим вашу идею'}
                    subtitle={'Отправте свои требования к проекту, мы обработаем заявку и свяжемся с вами в ближайшее время'}
                    btn={true}
                />
                <Footer />
            </div>
        </>
    )
}

export default MainPageContainer;