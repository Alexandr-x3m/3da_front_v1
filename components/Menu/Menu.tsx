import Link from 'next/link'

import s from './Menu.module.sass'
import { MenuProps } from '../../interfaces/interfaces'

const Menu: React.FC<MenuProps> = (props) => {

    const { data, visability, setVisability } = props;

    return (
        <div className={s.menu__container} >
            {data.map((el) => (
                <Link key={`menu_link_${el.name}`} href={'/' + el.url} >
                    <a>
                        <div className={s.menu__itemBlock} >
                            <img src={el.icon_src} />
                            <p>{el.name}</p>
                        </div>
                    </a>
                </Link>
            ))}
            <div className={s.menu__background} onClick={() => setVisability(!visability)} ></div>
        </div>
    )
}

export default Menu;