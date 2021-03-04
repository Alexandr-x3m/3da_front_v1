import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import s from './Header.module.sass'
import InputButton from '../Inputs/InputButton/inputButton'
import PopUp from '../PopUp/PopUp'
import LogAuthContainer from '../LogAuthContainer'
import AnimatedBtn from '../Inputs/AnimatedBtn/AnimatedBtn'
import Menu from '../Menu/Menu'
import SocialIcon from '../interfaceEl/SocialIcon/SocialIcon'




const HeaderBlock: React.FC<{scroll: number}> = ({scroll}) => {

    const [popUp, setPopUp] = useState<boolean>(false)
    const [authLog, setAuthLog] = useState<boolean>(false)
    const [serviceList, setServiceList] = useState<boolean>(false)
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    const [windowHeight, setWindowHeight] = useState<number>()
    const [pageHeight, setPageHeight] = useState<number>()

    const openAuthorization = () => {
        setAuthLog(true)
        setPopUp(true)
    }

    const openRegistration = () => {
        setAuthLog(false)
        setPopUp(true)
    }

    useEffect(() => {
        if (document.documentElement.clientWidth >= 800) {
            setTimeout(() => {
                debugger
                let windowH = window.document.documentElement.clientHeight
                let pageH = window.document.documentElement.offsetHeight

                setWindowHeight(windowH)
                setPageHeight(pageH)
                console.log(windowH)
            }, 100)
        }
    }, [])

    console.log(scroll)
    return (
        <div >
            <div className={s.header__container} >
                <div 
                    className={s.headerTop__container} 
                    style={scroll > 150 || (scroll !< 150 && scroll !> 100) ? {height:  '0px'} : {height:  '48px'}} 
                >
                    <div className={s.headerTop__contentBlock} >
                        <div className={s.headerTop__infoTextBlock} >
                            <div className={s.headerTop__infoText} >
                                <img src={'/phone_icon.svg'} />
                                <a href='tel: +79295436694' >
                                    <p >+7 (929) 543-66-94</p>
                                </a>
                            </div>
                            <div className={s.headerTop__infoText} >
                                <img src={'/email_icon.svg'} />
                                <p >service@27cypher.com</p>
                            </div>
                        </div>
                        <div className={s.headerTop__btnBlock} >
                            <AnimatedBtn 
                                name={'Получить предложение'} 
                                additClass={s.get_sentence} 
                            />
                        </div>
                    </div>
                </div>
                <div className={s.headerBottom__container} >
                    <div className={s.headerBottom_content} >
                        <div className={s.logo_container} >
                            <Link href='/' ><a>
                                <Image
                                    src={'/logotype.svg'}
                                    alt='27 cypher'
                                    width={'fill'}
                                    height={42} />
                                <div className={s.logo_gradient}  style={{height: `${pageHeight}px`,top: `-${scroll}px`}}  ></div>
                            </a></Link>
                        </div>
                        <div className={s.header__interfaceBlock} >
                            <div className={s.header__navbar} >
                                <Link href='/' passHref >
                                    <a className={s.navbar_item} >Главная</a>
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
                                            data={[
                                                {
                                                    url: './3d-modeling',
                                                    icon_src: './cube_icon.svg',
                                                    name: '3D Моделирование'
                                                },
                                                {
                                                    url: './3d-printing',
                                                    icon_src: './3d_printer.svg',
                                                    name: '3D печать'
                                                }]
                                            } />)
                                        : null
                                    }
                                </div>
                                <Link href='/aboutus' passHref >
                                    <a className={s.navbar_item} >Контакты</a>
                                </Link>
                                <Link href='/gallery' passHref >
                                    <a className={s.navbar_item} >Галерея</a>
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
                </div>
                <div className={s.header_mobile} >
                    <div className={s.mobile_container} >
                        <Link href='/' >
                            <a>
                                <Image
                                    src={'/logotype.svg'}
                                    alt='3Da modeling studio'
                                    width={232}
                                    height={48}
                                />
                            </a>
                        </Link>
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
                        <div
                            className={s.mobile_menu}
                            style={
                                mobileMenu
                                    ? {
                                        right: '0px',
                                        height: `calc(${windowHeight}px - 64px)`
                                    }
                                    : {
                                        right: '-280px',
                                        height: `calc(${windowHeight}px - 64px)`
                                    }
                            }
                        >
                            <div className={s.mobile_menu__navbar} >
                                <div className={s.navbar_container} >
                                    <Link href='/' passHref >
                                        <a className={s.navbar_item} >Главная</a>
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
                                                <Link href={'/3d-modeling'} >
                                                    <a>
                                                        <div className={s.sublist_item} >
                                                            <InputButton
                                                                value={'3D Моделированиеы'}
                                                                additClass={s.sublist_item__btn}
                                                            />
                                                        </div>
                                                    </a>
                                                </Link>
                                                <Link href={'/3d-printing'} >
                                                    <a>
                                                        <div className={s.sublist_item} >
                                                            <InputButton
                                                                value={'3D Печать'}
                                                                additClass={s.sublist_item__btn}
                                                            />
                                                        </div>
                                                    </a>
                                                </Link>
                                            </div>)
                                            : null
                                        }
                                    </div>
                                    <Link href='/aboutus' passHref >
                                        <p className={s.navbar_item} >Контакты</p>
                                    </Link>
                                    <Link href='/gallery' passHref >
                                        <p className={s.navbar_item} >Галерея</p>
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