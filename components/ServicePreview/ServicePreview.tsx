import Image from 'next/image';
import Link from 'next/link';
import InputButton from '../Inputs/InputButton/inputButton';
import s from '../../styles/servicePreview.module.sass';

interface ServicePreviewProps {
    title: string,
    subtitle: string,
    link: string,
    img_src: string,
    reverse?: boolean
}

const ServicePreview: React.FC<ServicePreviewProps> = (props) => {

    const { title, subtitle, link, img_src, reverse } = props;

    return (
        <div className={s.servicePreview__container} style={reverse ? {flexDirection: 'row-reverse'} : null} >
            <div className={s.servicePreview__info} >
                <h2>
                    {title}
                </h2>
                <h6>
                    {subtitle}
                </h6>
                <div className={s.servicePreview__btnContainer} >
                    <Link href={link}>
                        <InputButton
                            value={'Узнать больше'}
                            additClass={s.servicePreview__btn}
                        />
                    </Link>
                </div>
            </div>
            <div className={s.servicePreview__img} >
                <Image src={img_src} layout={'fill'} />
            </div>
        </div>
    )
}

export default ServicePreview;