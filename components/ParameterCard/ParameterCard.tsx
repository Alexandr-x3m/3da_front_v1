import { useState } from 'react'
import ScoreBar from '../interfaceEl/ScoreBar/ScoreBar'

import s from './ParameterCard.module.sass'

interface ParameterCard {
    dataPr: {
        name: string,
        value: string,
        parameters: {
            name: string,
            type: string, //score, text
            value: any   //if scrore, then maybe from 1, to 5
        }[]
    }
}

const ParameterCard: React.FC<ParameterCard> = ({dataPr}) => {

    const [data, setData] = useState<ParameterCard['dataPr']>(dataPr)

    return (
        <div className={s.container} >
            <div className={s.content} >
                <div className={s.header} >
                    <p>{data.name}</p>
                    <p>{data.value}</p>
                </div>
                <div className={s.hor_line} ></div>
                <div className={s.param_container} >
                    {data.parameters.map((el, index) => (
                        <div key={`parametr_${el.name}_${index}`} className={s.parametr_block}  >
                            <p>{el.name}</p>
                            {el.type === 'text'
                                ? <p>{el.value}</p>
                                : <ScoreBar score={el.value} />
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ParameterCard;