import { useState } from 'react'

import s from '../../../styles/interfaceEl/downloadBoard.module.sass'
import Prompt from '../Prompt/Prompt'
import { DownloadBoardProps } from '../../../interfaces/interfaces'

const DownloadBoard: React.FC<DownloadBoardProps> = (props) => {

    const { count, small } = props

    const [prompt, setPrompt] = useState<boolean>(false)

    // колличество знаков в числе
    let length = count.toString().length
    // десятичное представление числа
    let y = count/1000
    // округление до десятой
    let z = y.toFixed(1)
    // знак десятой
    let x = z[z.length-1]

    const handleMouseOver = () => {
        setPrompt(true)
    }

    const handleMouseOut = () => {
        setPrompt(false)
    }

    return (
        <div 
            className={small ? s.downloadBoard__smallContainer : s.downloadBoard__container} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <img src={'/cloud_download.svg'} className={small ? s.downloadBoard__smallIcon : s.downloadBoard__icon} />
            <p className={small ? s.downloadBoard__smallText : s.downloadBoard__text} >
                {length > 3 
                    ?  (x !== '0'
                        ? (z + 'k')
                        : (y.toFixed(0) + 'k')
                    )
                    : count + 'k'
                }
            </p>
            <Prompt name={'Скачано'} view={prompt} />
        </div>
    )
}

export default DownloadBoard;