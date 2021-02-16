import { useState, useEffect } from 'react';
import ActiveSlideMP from '../../interfaces/interfaces';
import s from '../../styles/mainPage.module.sass';
import Slider from '../Slider/Slider';
import AttentionLane from '../AttentionLane/AttentionLane';
import ServicePreview from '../ServicePreview/ServicePreview';
import ChessBoard from '../ChessBoard/ChessBoard';
import CounterInfo from '../CounterInfo/CounterInfo';
import Footer from '../Footer/Footer';


import { useMutation } from 'urql';

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

interface dataSlides {
    id: string,
    img: string,
    title: string,
    desc: string,
    url: string
}


const MainPageContainer: React.FC<ActiveSlideMP> = (props) => {


    const [slides, setSlides] = useState<dataSlides[]>([]);

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


    return (
        <>
            <div className={s.mainPageContainer__container} >
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
                        link={'/artistic-modeling'}
                        img_src={'/artistic-preview.jpg'}
                    />
                    <ServicePreview
                        title={'ИНЖЕНЕРНОЕ МОДЕЛИРОВАНИЕ'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/artistic-modeling'}
                        img_src={'/engineering-preview.jpg'}
                        reverse={true}
                    />
                    <ServicePreview
                        title={'3D печать'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/artistic-modeling'}
                        img_src={'/3d-printer-preview.jpg'}
                    />
                </div>
                <ChessBoard />
                <CounterInfo data={[
                    {
                        number: '23123',
                        text: 'Крутая стата'
                    },
                    {
                        number: '23123',
                        text: 'Крутая стата'
                    },
                    {
                        number: '23123',
                        text: 'Крутая стата'
                    },
                    {
                        number: '23123',
                        text: 'Крутая стата'
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