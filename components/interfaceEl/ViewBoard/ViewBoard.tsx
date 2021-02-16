import { useState } from 'react'
import s from '../../../styles/interfaceEl/viewBoard.module.sass'
import Prompt from '../Prompt/Prompt'

interface ViewBoardProps {
    count: number
    small?: boolean
}

const ViewBoard: React.FC<ViewBoardProps> = (props) => {

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
            className={small ? s.viewBoard__smallContainer : s.viewBoard__container}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <img src={'/remove_eye.svg'} className={small ? s.viewBoard__smallIcon : s.viewBoard__icon} />
            <p className={small ? s.viewBoard__smallText : s.viewBoard__text} >
                {length > 3 
                    ?  (x !== '0'
                        ? (z + 'k')
                        : (y.toFixed(0) + 'k')
                    )
                    : count + 'k'
                }
            </p>
            <Prompt name={'Просмотров'} view={prompt} />
        </div>
    )
}

export default ViewBoard;

