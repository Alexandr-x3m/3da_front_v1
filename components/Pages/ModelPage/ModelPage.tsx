import { useState, useEffect } from 'react'
import { useMutation } from 'urql'

import s from './ModelPage.module.sass'
import DownloadBoard from '../../interfaceEl/DownloadBoard/DownloadBoard'
import ViewBoard from '../../interfaceEl/ViewBoard/ViewBoard'
import PriceTag from '../../interfaceEl/PriceTag/PriceTag'
import Slider from '../../Slider/Slider'
import ShareBtn from '../../interfaceEl/ShareBtn/ShareBtn'
import InputButton from '../../Inputs/InputButton/inputButton'
import LikeBoard from '../../interfaceEl/LikeBoard/LikeBoard'

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

const ModelPage: React.FC = () => {

    const [model3D, setModel3D] = useState<boolean>(false);
    
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

    return (
        <div className={s.modelPage__contentContainer} >
            <div className={s.modelPage__sliderWindow} >
                <Slider 
                    data={slides}
                    thumbnail={true}
                    swiper={false}
                    additClass={'modelPage__slider'}
                />
                <div className={s.modelPage__navigation} >
                    {/* <InputButton 
                        value={'Просмотр в 3D'} 
                        onClick={() => setModel3D(!model3D)}
                        additClass={s.modelPage__buttons}
                    /> */}
                    <LikeBoard onlyIcon={true} liked={false} count={12312} />
                </div>
            </div>
            <div className={s.modelPage__infoContainer} >
                <h4 className={s.modelPage__name} >
                    Название проекта
                </h4>
                <div className={s.modelPage__priceBlock} >
                    <PriceTag price={22000} />
                </div>
                <div className={s.modelPage__horLine} ></div>
                <p className={s.modelPage__desc} >
                    Название работы Название работы Название работы Название работы Название работы Название работы  Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы Название работы
                </p>
                <div className={s.modelPage__horLine} ></div>
                <div className={s.modelPage__statistics} >
                    <ShareBtn />
                    <ViewBoard count={124424}  />
                    <DownloadBoard count={124424} />
                </div>
            </div>
            {/* model3D
                ? <PopUp content={<Model3D />} setVisibility={setModel3D} />
                : null
             */}
            
        </div>
    )
}

export default ModelPage;