import Link from 'next/link'

import { PreviewCardProps } from '../../interfaces/interfaces'
import s from './PreviewCard.module.sass'
import LikeBoard from '../interfaceEl/LikeBoard/LikeBoard'
import DownloadBoard from '../interfaceEl/DownloadBoard/DownloadBoard'
import ViewBoard from '../interfaceEl/ViewBoard/ViewBoard'

const PreviewCard: React.FC<PreviewCardProps> = (props) => {

    const { id, name, views, likes, loads } = props

    return (
        <>
            <div className={s.previewCard__block} >
                <img src='/test_img_card.jpg' className={s.previewCard__img} />
                <div className={s.previewCard__info} >
                    <Link href={'/model/' + id} >
                        <a className={s.previewCard__name}>
                            {name}
                        </a>
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