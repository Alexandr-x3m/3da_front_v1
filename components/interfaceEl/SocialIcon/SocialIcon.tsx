import Link from 'next/link';
import s from '../../../styles/socialIcon.module.sass';


interface SocialIconProps {
    socialName: string,
    href: string
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {

    const { socialName, href } = props;

    return (
        <Link href={href} >
            <img 
                src={`/socialIcons/${socialName}_icon.svg`} 
                className={s.socialIcon__img}
            />
        </Link>
    )
} 

export default SocialIcon;