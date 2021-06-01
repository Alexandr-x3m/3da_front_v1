import React from 'react'

import s from '../../styles/Pages/mainPage.module.sass';
import { ActiveSlideMP } from '../../interfaces/interfaces'
import Slider from '../../components/Slider/Slider'
import AttentionLane from '../../components/AttentionLane/AttentionLane'
import ServicePreview from '../../components/ServicePreview/ServicePreview'
import Footer from '../../components/Footer/Footer'
import Count from '../../components/CounterInfo/Count'
import Priorities from '../../components/Priorities/Priorities'


const MainPage: React.FC<ActiveSlideMP> = () => {

    const slides = [
        {
            desc: "Это возможность вдохнуть жизнь в модель",
            img: "https://cdnb.artstation.com/p/assets/images/images/008/509/051/large/pablo-munoz-gomez-zbgs-organic-hard-surface-modeling-rendered.jpg?1513210646",
            title: "3D печать",
        },
        {
            desc: "Воплотите идею в моделе",
            img: "https://i.ytimg.com/vi/eUQ4HSCYJfg/maxresdefault.jpg",
            title: "3D моделирование",
        }
    ]
    
    let counters=[
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
    ] 

    return (
        <>
            <div  className={s.container} >
                <div className={s.sliderWindow} >
                    <Slider
                        data={slides}
                        thumbnail={false}
                        swiper={true}
                        autoSwipe={true}
                    />
                </div>
                <AttentionLane />

                <div className={s.servicesList}>
                    <ServicePreview
                        title={'Художественное моделирование'}
                        subtitle={'В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании'}
                        link={'/3d-modeling?segment=1'}
                        img_src={'/preview/zczczxc-421432-min.jpg'}
                    />
                    <ServicePreview
                        title={'ИНЖЕНЕРНОЕ МОДЕЛИРОВАНИЕ'}
                        subtitle={'Мы создаем 3D модели высокой точности в размерах, с учетом особенностей дальнейшего ее использования'}
                        link={'/3d-modeling?segment=2'}
                        img_src={'/preview/engineering-preview-min.jpg'}
                        reverse={true}
                    />
                    <ServicePreview
                        title={'Ювелирное МОДЕЛИРОВАНИЕ'}
                        subtitle={'В нашей команде есть специалист обученный ювелирному ремеслу, который воплотит вашу мечту в реальность'}
                        link={'/3d-modeling?segment=3'}
                        img_src={'/preview/kmdlkfsnmd-232131-min.jpg'}
                    />
                    <ServicePreview
                        title={'3D печать'}
                        subtitle={'Наши принтеры помогу решить задачи из разных сфер деятельности'}
                        link={'/3d-printing'}
                        img_src={'/preview/3d-printer-preview-min.jpg'}
                        reverse={true}
                    />
                </div>
                <div className={s.section_item} >
                    <div className={s.block_content} >
                        <div className={s.main_title_container} >
                            <h2 className={s.title} >
                                ПРАВИЛЬНЫЕ ПРИОРИТЕТЫ
                            </h2>
                            <h4 className={s.subtitle} >
                                Для нас важные показателем качества нашей работы является, не только выполненная работа, но и хорошее впечатление от сотрудничества с нами 
                            </h4>
                        </div>
                        <Priorities />
                    </div>
                </div>
                <div className={s.section_item} >
                    <div className={s.block_content} >
                        <div className={s.main_title_container} >
                            <h2 className={s.title} >
                                Наша студия в цифрах
                            </h2>
                        </div>
                        <div className={s.counter_content} >
                                {counters.map((el, index) => (
                                    <Count key={`counter_item_${index}`} number={el.number} text={el.text} />
                                ))}
                        </div>
                    </div>
                </div>
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

export default MainPage;