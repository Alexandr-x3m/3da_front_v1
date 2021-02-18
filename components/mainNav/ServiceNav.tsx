import s from './ServiceNav.module.sass'

interface ServiceNavProps {
    data: {
        name: string
    }[],    
    activeSection: string,
    setActiveSection: Function
}   

const ServiceNav: React.FC<ServiceNavProps> = (props) => {

    const { data, activeSection, setActiveSection } = props

    return (
        <div className={s.container} >
            <div className={s.content} >
                {data.map((el, index) => (
                    <label 
                        key={'serviceNav_' + el.name + '_'} 
                        className={s.item_container} 
                        htmlFor={'serviceNav_' + el.name + '_'}
                    >
                        <div className={s.item_icon} >   
                            {activeSection === el.name 
                                ? <img src={'/icons/label_important.svg'} />
                                : null
                            }
                        </div>
                        <input 
                            type='button'
                            id={'serviceNav_' + el.name + '_'}
                            className={s.item + ' ' + (activeSection === el.name ? s.active_item : null)} 
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => setActiveSection(e.currentTarget.value)}
                            value={el.name}
                        />
                    </label>
                ))}
            </div>
        </div>
    )
}

export default ServiceNav