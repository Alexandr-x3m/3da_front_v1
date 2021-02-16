import Image from 'next/image'
import s from '../../styles/previewCard.module.sass'
import PriceTag from '../interfaceEl/PriceTag/PriceTag'
import Link from 'next/link'
import LikeBoard from '../interfaceEl/LikeBoard/LikeBoard'
import { useState } from 'react'
import DownloadBoard from '../interfaceEl/DownloadBoard/DownloadBoard'
import ViewBoard from '../interfaceEl/ViewBoard/ViewBoard'

interface PreviewCard {
    id: string,
    name: string, 
    views: number,
    likes: number,
    loads: number
}


const PreviewCard: React.FC<PreviewCard> = (props) => {

    const { id, name, views, likes, loads } = props

    return (
        <>
            <div className={s.previewCard__block} >
                <img src='/test_img_card.jpg' className={s.previewCard__img} />
                <div className={s.previewCard__info} >
                    <Link href={'/model/' + id} >
                        <p className={s.previewCard__name}>
                            {name}
                        </p>
                    </Link>
                    <div className={s.previewCard__statistics}>
                        <ViewBoard small={true} count={views} />
                        <DownloadBoard small={true} count={loads} />
                        <LikeBoard liked={false} count={likes} />
                    </div>

                </div>
                

            </div>
        </>
    )
}

export default PreviewCard;