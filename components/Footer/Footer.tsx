import Link from 'next/link'
import s from '../../styles/footer.module.sass'
import SocialIcon from '../interfaceEl/SocialIcon/SocialIcon'

const Footer: React.FC = () => {
    return (
        <div className={s.footer__container} >
            <div className={s.footer__contentBlock} >
                <p className={s.footer__txt} >
                    ⓒ 27 Cypher Modelling Studio.
                </p>
                <div className={s.footer__iconContainer} >
                    <SocialIcon href={'https://www.instagram.com/'} socialName={'instagram'} />
                    <SocialIcon href={'https://facebook.com/'} socialName={'facebook'} />
                    <SocialIcon href={'https://web.telegram.org/#/login'} socialName={'telegram'} />

                </div>
            </div>
        </div>
    )
}

export default Footer;