import Link from 'next/link';
import s from '../../styles/menu.module.sass';

interface MenuDataObj {
    name: string,
    icon_src: string,
    url: string
}

interface MenuProps {
    visability: boolean,
    setVisability: Function,
    data: Array<MenuDataObj>
}

const Menu: React.FC<MenuProps> = (props) => {

    const { data, visability, setVisability } = props;

    return (
        <div className={s.menu__container} >
            {data.map(el => (
                <Link href={'/' + el.url} >
                    <div className={s.menu__itemBlock} >
                        <img src={el.icon_src} />
                        <p>{el.name}</p>
                    </div>
                </Link>
            ))}
            <div className={s.menu__background} onClick={() => setVisability(!visability)} ></div>
        </div>
    )
}

export default Menu;