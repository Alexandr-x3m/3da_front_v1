import { useState, useEffect } from 'react';
import s from '../../styles/infoblock.module.sass'


interface infoBlockProps {
    list: boolean,
    listData?: Array<{
        title: string,
        subtitle: string
    }>,
    title?: string,
    description?: string,
    style: string // style_1, style_2, style_3
}

const InfoBlock: React.FC<infoBlockProps> = (props) => {

    const { list, listData, title, description, style } = props;

    return (
        <div className={s.container + ' ' + s[style]} >
            <div className={s.mainImg_container} >
                <img src={'/placeholder.jpg'} className={s.main_img} />
            </div>
            {list
                ? (<div className={s.list_container} >
                    <p className={s.list_title} >Самое важное</p>
                    {listData.map(el => (
                        <div className={s.list_item} >
                            <img src={'/list_marker.svg'} className={s.list_icon} />
                            <div className={s.list_txtContainer} >
                                <p className={s.listItem__title} >
                                    {el.title}
                                </p>
                                <p className={s.listItem_description} >
                                    {el.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>)
                : (<div className={s.txt_container} >
                    {title
                        ? <p className={s.txt_title} >{title}</p>
                        : null
                    }
                    {description
                        ? <p className={s.txt_description} >{description}</p>
                        : null
                    }
                </div>)
            }
        </div>
    )
}

export default InfoBlock;