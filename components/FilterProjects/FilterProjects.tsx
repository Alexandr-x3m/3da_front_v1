import s from './FilterProjects.module.sass'
import { GalleryNavigationProps } from '../../interfaces/interfaces'


const FilterProjects: React.FC<GalleryNavigationProps> = (props) => {

    const { activeTag, setActiveTag, tagsList } = props;

    return (
        <div className={s.container} >
            <div className={s.tags_list} >
                <div className={s.all_view} >
                    <p>Посмотреть все</p>
                    <img src={'./arrow-right-r.svg'} />
                </div>
                {tagsList.map((el) => (
                    <div key={`tag_item_${el.id}`} className={s.tag_item}  >
                        <input 
                            name={'filter_tag'} 
                            id={'tag_' + el.id} 
                            type={'checkbox'} 
                            checked={activeTag === el.id ? true : false}
                        />
                        <label htmlFor={'tag_' + el.id} >
                            <p key={'filter_tag_' + el.id} onClick={() => setActiveTag(el.id)} >
                                {el.name}
                            </p>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterProjects;