

import s from '../../../styles/modelPage.module.sass'
import DownloadBoard from '../../interfaceEl/DownloadBoard/DownloadBoard'
import ViewBoard from '../../interfaceEl/ViewBoard/ViewBoard'
import PriceTag from '../../interfaceEl/PriceTag/PriceTag'
import Slider from '../../Slider/Slider'
import ShareBtn from '../../interfaceEl/ShareBtn/ShareBtn'
import InputButton from '../../Inputs/InputButton/inputButton'
import LikeBoard from '../../interfaceEl/LikeBoard/LikeBoard'
import PopUp from '../../PopUp/PopUp'
import Model3D from '../../Model3D/Model3D'
import { useState } from 'react'

const ModelPage: React.FC = (props) => {

    const {  } = props 

    const [model3D, setModel3D] = useState<boolean>(false)

    return (
        <div className={s.modelPage__contentContainer} >

        
            <div className={s.modelPage__sliderWindow} >
                <Slider 
                    thumbnail={true}
                    title={false}
                    desc={false}
                    swiper={false}
                    additClass={'modelPage__slider'}
                />
                <div className={s.modelPage__navigation} >
                    <InputButton 
                        value={'Просмотр в 3D'} 
                        onClick={() => setModel3D(!model3D)}
                        additClass={s.modelPage__buttons}
                    />
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