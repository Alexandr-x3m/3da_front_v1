import s from '../../../styles/interfaceEl/priceTag.module.sass'

interface PriceTag {
    price: number
}

const PriceTag: React.FC<PriceTag> = (props) => {

    const { price } = props

    return (
        <div className={s.priceTag__block} >
            <div className={s.priceTag__nameBlock} >
                <p>Стоимость</p>
            </div>
            <div className={s.priceTag__priceBlock} >
                <p className={s.priceTag__price} >
                    {price} ₽
                </p>
            </div>
        </div>
    )
}

export default PriceTag