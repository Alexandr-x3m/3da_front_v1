import s from '../../styles/alerts/succesSend.module.sass'
import { SuccessSendProps } from '../../interfaces/interfaces'


const SuccessSend: React.FC<SuccessSendProps> = (props) => {

    const { success, title, subtitle } = props;

    return (
        <div className={s.container} >
            <div className={s.content_block} >
                <div className={s.img_block} >
                    {success
                        ?   <img src='/icons/thumb_icon.svg' alt='' />
                        :   <img src='/icons/bad_thumb_icon.svg' alt='' />
                    }
                </div>
                <div className={s.text_block} >
                    <h2 className={s.title} >
                        {title}
                    </h2>
                    <p className={s.subtitle} >
                        {subtitle}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SuccessSend