import { useState } from 'react';

import FilterProjects from '../../components/FilterProjects/FilterProjects'
import PreviewCard from '../../components/PreviewCard/PreviewCard'
import s from '../../styles/3d-models/portfolio.module.sass'

const PortfolioPage: React.FC = () => {

    const data = [
        {
            id: '1',
            name: 'Работа номер 1', 
            views: 1240, 
            likes: 300, 
            loads: 546
        },
        {
            id: '2',
            name: 'Работа номер 2',
            views: 1240, 
            likes: 300, 
            loads: 22546
        },
        {
            id: '3',
            name: 'Работа номер 3', 
            views: 1240, 
            likes: 1240, 
            loads: 22300
        },
        {
            id: '4',
            name: 'Работа номер 4', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '5',
            name: 'Работа номер 5', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '6',
            name: 'Работа номер 6', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '7',
            name: 'Работа номер 7', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '8',
            name: 'Работа номер 8', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '9',
            name: 'Работа номер 9', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '10',
            name: 'Работа номер 10', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '11',
            name: 'Работа номер 11', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '12',
            name: 'Работа номер 12', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '13',
            name: 'Работа номер 13', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '14',
            name: 'Работа номер 14', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '15',
            name: 'Работа номер 15', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        },
        {
            id: '16',
            name: 'Работа номер 16', 
            views: 1240, 
            likes: 22300, 
            loads: 546
        }
    ]

    const tagsList = [
        {
            id: '1',
            name: 'фантастика'
        },
        {
            id: '2',
            name: 'dota 2'
        },
        {
            id: '3',
            name: 'еще тег'
        },
        {
            id: '4',
            name: 'машина'
        },
        {
            id: '5',
            name: 'синий'
        },
    ]

    const [activeTag, setActiveTag] = useState<string>('');

    const viewData = data.map((el, index) => {
        return (
            <div key={`${el.name}_${index}`} className={s.item} >
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
        <div className={s.container} >
            <div className={s.category_container} >

                <FilterProjects 
                    activeTag={activeTag}
                    setActiveTag={setActiveTag} 
                    tagsList={tagsList} 
                />
            </div>
            <div className={s.list_container} >
                {viewData}
            </div>
        </div>
    )
}

export default PortfolioPage;