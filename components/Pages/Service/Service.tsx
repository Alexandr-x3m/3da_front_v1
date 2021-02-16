import s from '../../../styles/Pages/serviceContainer.module.sass';
import InfoBlock from '../../InfoBlock/InfoBlock';

interface ServiceContainerProps {

}

const ServiceContainer: React.FC<ServiceContainerProps> = (props) => {

    console.log(props)

    return (
        <div className={s.serviceContainer} >
            <div className={s.serviceContainer__previewBlock} >
                <h1 className={s.serviceContainer__title} >
                    {'ХУДОЖЕСТВЕННОЕ МОДЕЛИРОВАННИЕ'}
                </h1>
                <p className={s.serviceContainer__subtitle} >В погоне за лучшим качеством предоставления услуг в 3D скульптинге, печати, инженерном моделировании</p>
                <InfoBlock 
                    direction={'row-reverse'}
                    list={false}
                />
            </div>

        </div>
    )
}

export default ServiceContainer;