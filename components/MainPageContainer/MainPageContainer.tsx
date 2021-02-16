import { useState, useEffect } from 'react'
import { useMutation } from 'urql'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import s from '../../styles/MainPage.module.sass';
import { ActiveSlideMP, DataSlides } from '../../interfaces/interfaces'
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


const MainPageContainer: React.FC<ActiveSlideMP> = () => {


    const [slides, setSlides] = useState<DataSlides[]>([]);


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
            <div
                className={s.mainPageContainer__container}
            >
                <div className={s.mainPageContainer__sliderWindow} >
                    <Slider
                        data={slides}
                        thumbnail={false}
                        swiper={true}
                        additClass={s.mainPageContainer__slider}
                        autoSwipe={true}
                    />
                </div>
                <AttentionLane />

                <div className={s.mainPageContainer__servicesList}>
                    <ServicePreview
                        title={'Художественное моделирование'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-modeling'}
                        img_src={'/artistic-preview.jpg'}
                        animation={true}
                    />
                    <ServicePreview
                        title={'ИНЖЕНЕРНОЕ МОДЕЛИРОВАНИЕ'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-modeling'}
                        img_src={'/engineering-preview.jpg'}
                        reverse={true}
                        animation={true}
                    />
                    <ServicePreview
                        title={'3D печать'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-printing'}
                        img_src={'/3d-printer-preview.jpg'}
                        animation={true}
                    />
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