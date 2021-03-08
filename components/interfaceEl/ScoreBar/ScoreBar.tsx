import { useState } from 'react'

import s from './ScoreBar.module.sass'

const ScoreBar: React.FC<{score: number}> = ({score}) => {

    const [number, setNumber] = useState<number>(score)

    return (
        <div className={s.container} >
            <div className={s.band} ></div>
            <div className={s.progress} style={{width: `${number*20}%`}} ></div>
            <div className={s.decor_container} >
                <div className={s.wall} ></div>
                <div className={s.wall} ></div>
                <div className={s.wall} ></div>
                <div className={s.wall} ></div>
            </div>
        </div>
    )
}

export default ScoreBar;