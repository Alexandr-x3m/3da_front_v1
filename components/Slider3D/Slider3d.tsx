import { useState } from 'react'

import s from './Slider3D.module.sass'

interface Slider3DProps {

}

const Slider3D: React.FC<Slider3DProps> = () => {

    const [activeImg, setActiveImg] = useState<string>('2')
    const [data, setData] = useState<{src: string, position: string}[]>([
        {
            src: '/placeholder.jpg',
            position: 'right'
        },
        {
            src: '/placeholder.jpg',
            position: 'right'
        },
        {
            src: '/placeholder.jpg',
            position: 'left'
        },
        {
            src: '/placeholder.jpg',
            position: 'left'
        },
        {
            src: '/placeholder.jpg',
            position: 'left'
        },
    ])

    const mouseOverHandler = (e) => {
        console.log('mouse over')
        let id = e.currentTarget.id
        setActiveImg(id)

    }

    const mouseLeaveHandler = (e) => {
        setActiveImg('2')
    }

    return (
        <div className={s.container} >
            {data.map((el, index) => (
                <div 
                    id={index} 
                    className={s.img_wrap + ' ' + (index < activeImg*1 ? s.right_block : s.left_block ) + ' ' + (activeImg == index ? s.focus_img : null)}  
                    style={((index > activeImg*1 && index != activeImg*1 ) ? {zIndex: 91-index} : null )}
                    onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => mouseOverHandler(e)} 
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => mouseLeaveHandler(e)}
                >
                    <div className={s.img_block }>
                        <img src={el.src} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Slider3D