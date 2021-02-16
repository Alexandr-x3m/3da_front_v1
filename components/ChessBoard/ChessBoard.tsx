import s from '../../styles/chessBoard.module.sass';
import Image from 'next/image'

interface ChessBoardProps {

}

const ChessBoard: React.FC<ChessBoardProps> = () => {

    return (
        <div className={s.container} >
            <img src={'/background-img1.jpg'} className={s.background_img} /> 
            <div className={s.content_block} >
                <h2 className={s.chessBoard__title} >ПРАВИЛЬНЫЕ ПРИОРИТЕТЫ</h2>
                <h4 className={s.chessBoard__subtitle} >Для нас важные показателем качества нашей работы является, не только выполненная работа, но и хорошее впечатление от сотрудничества с нами </h4>
                <div className={s.chessBoard__descBlock}>
                    <div className={s.empty_item} style={{width: '328px'}} ></div>
                    <div className={s.item} style={{width: '600px'}} >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/support_icon.svg'} layout={'fill'} />
                        </div>
                        <h6 className={s.item_title} >Персонализированная поддержка</h6>
                        <div className={s.item_horLine} ></div>
                        <p className={s.item_subtitle} >Нужен совет? Не уверены, что сработает? Мы здесь, чтобы помочь превратить ваши идеи в уникальные концепции и добиться успешных результатов.</p>
                    </div>
                    <div className={s.empty_item} style={{width: '224px'}} ></div>
                    <div className={s.item} style={{width: '284px'}} >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/spy_icon.svg'} layout={'fill'} />
                        </div>
                        <h6 className={s.item_title} >Коммерческая тайна</h6>
                        <div className={s.item_horLine} ></div>
                        <p className={s.item_subtitle} >Для нас немаловажно, если вы хотите чтобы ваш заказ остался только у вас!</p>
                    </div>
                    <div className={s.empty_item} style={{width: '350px'}} ></div>
                    <div className={s.item} style={{width: '518px'}} >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/group_icon.svg'} layout={'fill'} />
                        </div>
                        <h6 className={s.item_title} >Сделаем простым</h6>
                        <div className={s.item_horLine} ></div>
                        <p className={s.item_subtitle} >Мы руководствуемся вашим проектом с учетом комплексного решения, что позволит вам избежать хлопот, связанных с работой с несколькими поставщиками услуг для достижения единого результата.</p>
                    </div>
                    <div className={s.empty_item} style={{width: '474px'}} ></div>
                    <div className={s.item} style={{width: '694px'}} >
                        <div className={s.mobile_img} >
                            <Image src={'/icons/calendar_icon.svg'} layout={'fill'} />
                        </div>
                        <h6 className={s.item_title} >Производство в сроки</h6>
                        <div className={s.item_horLine} ></div>
                        <p className={s.item_subtitle} >Развлекательные программы, живые выступления и специальные мероприятия требуют своевременной и своевременной доставки решений. Мы не пропускаем сроки.?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChessBoard;