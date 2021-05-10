import s from '../../styles/components/PopUp.module.sass'
import { Scrollbars } from 'react-custom-scrollbars';
import { PopUpProps } from '../../interfaces/interfaces'


const PopUp: React.FC<PopUpProps> = (props) => {

    const { setVisibility, scroll, content, title } = props

    return (
        <div className={s.popUp__container} >
            <div className={s.popUp__background} onClick={() => setVisibility(false)} ></div>

            <div className={s.popUp__ContentContainer} >
                <button className={s.popUp__closeBtn} onClick={() => setVisibility(false)} >
                    <img src={'./clear_icon.svg'} />
                </button>
                {scroll
                    ? (<div className={s.content_container} >
                        <img className={s.image_background} src={'/form_background.png'} alt="" />
                        <h1 className={s.content_title} >
                            {title}
                        </h1>
                        <div className={s.content_scroll_container} >
                            <Scrollbars autoHeightMax={200} >
                                <div className={s.content_block} >
                                    {content}
                                </div>
                            </Scrollbars>
                        </div>
                    </div>)
                    : (<div className={s.content_container + ' ' + s.content_noScroll_container} >
                        {content}
                    </div>)
                }

            </div>
        </div>
    )
}

export default PopUp;