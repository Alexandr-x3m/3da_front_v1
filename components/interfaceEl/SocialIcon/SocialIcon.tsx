import React from 'react'

import s from '../../../styles/SocialIcon.module.sass';
import { SocialIconProps } from '../../../interfaces/interfaces'

const SocialIcon: React.FC<SocialIconProps> = (props) => {

    const { socialName, href } = props;

    return (
        <div className={s.conatiner} >
            <a href={href}>
                <img
                    src={`/socialIcons/${socialName}_icon.svg`}
                    className={s.socialIcon__img}
                />
            </a>
        </div>
    )
}

export default SocialIcon;