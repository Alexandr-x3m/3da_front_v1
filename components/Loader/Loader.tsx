import s from './Loader.module.sass'


const Loader: React.FC = () => {

    return (
        <div className={s.container} >
            <div className={s.content_container} >
                <div className={s.gif_block} >
                    <img src={'/loader.gif'} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Loader