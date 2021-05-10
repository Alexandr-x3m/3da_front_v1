import { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import s from './ServiceNav.module.sass'

interface ServiceNavProps {
    data: {
        name: string,
        icon: string,
    }[],    
    activeSection: string,
    setActiveSection: Function
}   

const ServiceNav: React.FC<ServiceNavProps> = (props) => {

    const { data, activeSection, setActiveSection } = props

    


    return (
        <div 
            className={s.container} 
        >
            <div className={s.content} >
                {data.map((el) => (
                    <label 
                        key={'serviceNav_' + el.name} 
                        className={s.item_container + ' ' + (activeSection === el.name ? s.active_item : null)} 
                        htmlFor={'serviceNav_' + el.name}
                    >
                        <img src={el.icon} className={s.mobile_icon} alt=""/>
                        <input 
                            type='button'
                            id={'serviceNav_' + el.name}
                            className={s.item} 
                            onClick={(e: React.MouseEvent<HTMLInputElement>) => setActiveSection(e.currentTarget.value)}
                            value={el.name}
                        />
                        
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ServiceNav