import Link from 'next/link';
import Image from 'next/image';
import s from '../../styles/header.module.sass';
import InputButton from '../Inputs/InputButton/inputButton';
import MainNav from '../mainNav/MainNav';
import { useState } from 'react';
import PopUp from '../PopUp/PopUp';
import LogAuthContainer from '../LogAuthContainer';
import AnimatedBtn from '../Inputs/AnimatedBtn/AnimatedBtn';
import Menu from '../Menu/Menu';
import SocialIcon from '../interfaceEl/SocialIcon/SocialIcon';




const HeaderBlock: React.FC = () => {

    const [popUp, setPopUp] = useState<boolean>(false);
    const [authLog, setAuthLog] = useState<boolean>(false);
    const [serviceList, setServiceList] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const openAuthorization = () => {
        setAuthLog(true)
        setPopUp(true)
    }

    const openRegistration = () => {
        setAuthLog(false)
        setPopUp(true)
    }

    return (
        <div>
            <div className={s.header__container}>
                <div className={s.headerTop__container} >
                    <div className={s.headerTop__contentBlock} >
                        <div className={s.headerTop__infoTextBlock} >
                            <div className={s.headerTop__infoText} >
                                <img src={'/phone_icon.svg'} />
                                <Link href='tel: +79295436694' >
                                    <p >+7 (929) 543-66-94</p>
                                </Link>
                            </div>
                            <div className={s.headerTop__infoText} >
                                <img src={'/email_icon.svg'} />
                                <p >service@27cypher.com</p>
                            </div>
                        </div>
                        <div className={s.headerTop__btnBlock} >
                            <AnimatedBtn name={'Получить предложение'} />
                        </div>
                    </div>
                </div>
                <div className={s.headerBottom__container} >
                    <Link href='/' >
                        <Image
                            src={'/logotype.svg'}
                            alt='27 cypher'
                            width={232}
                            height={48} />
                    </Link>
                    <div className={s.header__interfaceBlock} >
                        <div className={s.header__navbar} >
                            <Link href='/' passHref >
                                <p className={s.navbar_item} >Главная</p>
                            </Link>
                            <div
                                className={s.navbar_item}
                                onClick={() => setServiceList(!serviceList)}
                            >
                                <p className={s.header__navbarItem_text} >Услуги</p>
                                <img src={'/arrow-left-r.svg'} className={s.header__navbarItem_icon} />
                                {serviceList
                                    ? (<Menu
                                        visability={serviceList}
                                        setVisability={setServiceList}
                                        data={
                                            [
                                                {
                                                    url: './artistic-modeling',
                                                    icon_src: './cube_icon.svg',
                                                    name: 'Художественное моделирование'
                                                },
                                                {
                                                    url: '/services/engineering-modeling',
                                                    icon_src: './cube_icon.svg',
                                                    name: 'Инженерное моделирование'
                                                },
                                                {
                                                    url: '/services/3d-printing',
                                                    icon_src: './3d_printer.svg',
                                                    name: '3D печать'
                                                }]
                                        } />)
                                    : null
                                }
                            </div>
                            <Link href='/' passHref >
                                <p className={s.navbar_item} >Контакты</p>
                            </Link>
                        </div>
                        {/*  <div className={s.header__userContainer} >
                                <InputButton
                                    value='Войти'
                                    onClick={openAuthorization}
                                    additClass={s.header__userAuthBtn} />
                                <InputButton
                                    value='Регистрация'
                                    onClick={openRegistration}
                                    additClass={s.header__userRegBtn} />
                                <div className={s.header__userbar} >
                                    <img src={'/account_circle.svg'} className={s.header__userbar_profileIcon} />
                                    <img src={'/arrow-left-r.svg'} className={s.header__navbarItem_icon} alt="" />
                                </div>
                            </div> */}
                    </div>
                </div>
                <div className={s.header_mobile} >
                    <div className={s.mobile_container} >
                        <Image
                            src={'/logotype.svg'}
                            alt='27 cypher'
                            width={232}
                            height={48} />
                        <input 
                            type="checkbox" 
                            id="menu_checkbox" 
                            className={s.menu_checkbox + ' ' + s.visuallyHidden} 
                            onChange={() => setMobileMenu(!mobileMenu)} 
                        />
                        <label htmlFor={'menu_checkbox'}>
                            <div className={s.hamburger + ' ' + s.hamburger4}>
                                <span className={s.bar + ' ' + s.bar1} ></span>
                                <span className={s.bar + ' ' + s.bar2} ></span>
                                <span className={s.bar + ' ' + s.bar3} ></span>
                                <span className={s.bar + ' ' + s.bar4} ></span>
                                <span className={s.bar + ' ' + s.bar5} ></span>
                            </div>  
                            <div className={s.menu_background} ></div>    
                        </label>
                        <div className={s.mobile_menu} style={mobileMenu ? {right: '0px'} : {right: '-280px'}} >
                            <div className={s.mobile_menu__navbar} >
                                <div className={s.navbar_container} >
                                    <Link href='/' passHref >
                                        <p className={s.navbar_item} >Главная</p>
                                    </Link>
                                    <div>
                                        <div
                                            className={s.navbar_item}
                                            onClick={() => setServiceList(!serviceList)}
                                        >
                                            <p className={s.header__navbarItem_text} >Услуги</p>
                                            <img src={'/arrow-left-r.svg'} className={s.header__navbarItem_icon} />

                                        </div>
                                        {serviceList
                                            ? (<div className={s.mobile_menu__sublist} >
                                                <Link href={'./artistic-modeling'} >
                                                    <div className={s.sublist_item} >
                                                        <InputButton
                                                            value={'Художественное мод'}
                                                            additClass={s.sublist_item__btn}
                                                        />
                                                    </div>
                                                </Link>
                                                <Link href={'/services/engineering-modeling'} >
                                                    <div className={s.sublist_item} >
                                                        <InputButton
                                                            value={'Инженерное мод'}
                                                            additClass={s.sublist_item__btn}
                                                        />
                                                    </div>
                                                </Link>
                                                <Link href={'/services/3d-printing'} >
                                                    <div className={s.sublist_item} >
                                                        <InputButton
                                                            value={'3D печать'}
                                                            additClass={s.sublist_item__btn}
                                                        />
                                                    </div>
                                                </Link>
                                            </div>)
                                            : null
                                        }
                                    </div>
                                    <Link href='/' passHref >
                                        <p className={s.navbar_item} >Контакты</p>
                                    </Link>
                                </div>
                                <div className={s.social_container} >
                                    <SocialIcon socialName={'instagram'} href={'instgram.com'} />
                                    <SocialIcon socialName={'facebook'} href={'facebook.com'} />
                                    <SocialIcon socialName={'telegram'} href={'telegram.com'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {popUp
                ? (<PopUp setVisibility={setPopUp} content={<LogAuthContainer authLog={authLog} />} />)
                : null
            }
        </div >
    )
}

export default HeaderBlock;