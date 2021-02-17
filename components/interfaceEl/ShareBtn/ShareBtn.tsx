import s from './ShareBtn.module.sass'

const ShareBtn: React.FC = () => {

    return (
        <div className={s.shareBtn__container} >
            <img src={'/share.svg'} className={s.shareBtn__icon} />
            <p className={s.sharebtn__text} >
                Поделиться
            </p>
        </div>
    )
}

export default ShareBtn;