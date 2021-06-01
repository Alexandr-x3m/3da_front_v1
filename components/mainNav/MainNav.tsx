import s from '../../styles/Header.module.sass'
import { MainNavProps } from '../../interfaces/interfaces'

export const MainNav: React.FC<MainNavProps> = (props) => {

    const { data1, activeSlide, setActiveSlide } = props;

    const menuItems = data1.map((el, index) => {

        const length = data1.length - 1

        return (
            <div
                key={`${el.name}_${index}`}
                className={s.mainNav__item + ' ' + (activeSlide === index ? s.mainNav__activeItem : null)}
                onClick={() => setActiveSlide(index)} >
                <div 
                    className={s.mainNav__itemMarker} 
                    style={{marginTop: (index === 0 ? '25.5px' : 'opx')}}
                    >
                    {index !== 0 
                        ? <div className={s.mainNav__itemLine} />
                        : null
                    }
                    <div className={s.mainNav__itemCircle} />
                    {index !== length
                        ? <div className={s.mainNav__itemLine} />
                        : null
                    }
                </div>
                <p className={s.mainNav__itemName} >{el.name}</p>
            </div>
        )
    })

    return (
        <>
            <div className={s.mainNav__container} >
                <img src='./scroll_Icon.svg' className={s.scroll_icon} />
                <div className={s.mainNav__itemBlock} >
                    {menuItems}
                </div>
            </div>
        </>
    )
}

export default MainNav;