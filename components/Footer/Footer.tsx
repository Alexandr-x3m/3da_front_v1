import s from './Footer.module.sass'
import SocialIcon from '../interfaceEl/SocialIcon/SocialIcon'

const Footer: React.FC = () => {
    return (
        <div className={s.footer__container} >
            <div className={s.footer__contentBlock} >
                <p className={s.footer__txt} >
                    ⓒ 3Da Modelling Studio.
                </p>
                <div className={s.footer__iconContainer} >
                    <SocialIcon href={'https://wa.me/79260865993'} socialName={'whatsapp'} />
                    <SocialIcon href={'https://web.telegram.org/#/login'} socialName={'telegram'} />

                </div>
            </div>
        </div>
    )
}

export default Footer;