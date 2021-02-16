import { useRef, useState } from "react"
import s from '../../../styles/interfaceEl/likeBoard.module.sass'
import Prompt from "../Prompt/Prompt"

interface LikeBoardProps {
    onlyIcon: boolean,
    liked: boolean,
    count: number,
}

const LikeBoard: React.FC<LikeBoardProps> = (props) => {

    const { liked, count, onlyIcon } = props

    const [focus, setFocus] = useState<boolean>(false)
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
        setFocus(true)
        setPrompt(true)
    }

    const handleMouseOut = () => {
        setFocus(false)
        setPrompt(false)
    }

    return (
        <div 
            className={s.likeBoard__container} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {onlyIcon 
                ? (
                    <div className={s.likeBoard__onlyIcon} >
                        {liked 
                            ? <img src={'/like_icon_pink.svg'} className={s.likeBoard__icon} />
                            : (focus 
                                ? <img src={'/like_icon_pink.svg'} className={s.likeBoard__icon} />
                                : <img src={'/like_icon.svg'} className={s.likeBoard__icon} />
                            )
                        }
                    </div>
                )
                : (
                    <>
                        {liked 
                            ? <img src={'/like_icon_pink.svg'} className={s.likeBoard__icon} />
                            : (focus 
                                ? <img src={'/like_icon_pink.svg'} className={s.likeBoard__icon} />
                                : <img src={'/like_icon.svg'} className={s.likeBoard__icon} />
                            )
                        }
                        <p className={s.likeBoard__text} >
                            {length > 3 
                                ?  (x !== '0'
                                    ? (z + 'k')
                                    : (y.toFixed(0) + 'k')
                                )
                                : count + 'k'
                            }
                        </p>
                        <Prompt name={'Понравилось'} view={prompt} />
                    </>
                )   
            }
        </div>
    )
}

export default LikeBoard;