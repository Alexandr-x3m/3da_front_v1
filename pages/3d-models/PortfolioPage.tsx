import PreviewCard from '../../components/PreviewCard/PreviewCard'
import s from '../../styles/3d-models/portfolio.module.sass'

const PortfolioPage: React.FC = () => {

    const data = [
        {
            name: 'Работа номер 1', 
            views: 1240, 
            likes: 300, 
            loads: 546
        },
        {
            name: 'Работа номер 2',
            views: 1240, 
            likes: 300, 
            loads: 22546
        },
        {
            name: 'Работа номер 3', 
            views: 1240, 
            likes: 1240, 
            loads: 22300
        },
        {
            name: 'Работа номер 4', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 5', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 6', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 7', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 8', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 9', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 10', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 11', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 12', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 13', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 14', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 15', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            name: 'Работа номер 16', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        }
    ]

    const viewData = data.map((el, index) => {
        return (
            <div key={el.name + '_' + index} className={s.portfolio__itemContainer} >
                <PreviewCard 
                    id={index}
                    name={el.name}
                    views={el.views}
                    likes={el.likes}
                    loads={el.loads}
                />
            </div>
        )
    })

    return (
        <div className={s.portfolio__container} >
            <div className={s.portfolio__categoryBlock} >
                
            </div>
            <div className={s.portfolio__listContainer} >
                {viewData}
            </div>
        </div>
    )
}

export default PortfolioPage;