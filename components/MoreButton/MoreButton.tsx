import s from '../../styles/inputs/moreButton.module.sass'
import InputButton from '../Inputs/InputButton/inputButton'

interface MoreButtonProps {
    value: string,
    onClick: Function,
    icon: boolean
}

const MoreButton: React.FC<MoreButtonProps> = (props) => {

    const { value, onClick, icon } = props

    return (
        <>
            <div className={s.moreButton__container} >
                <div className={s.moreButton__line} ></div>
                <InputButton 
                    value={value}
                    onClick={onClick}
                    icon={icon}
                    additClass={s.inputButton__moreInput}
                    iconParams={{
                        component: (<ExpandMoreIcon className={s.moreButton__icon} />)
                    }}
                />
                <div className={s.moreButton__line} ></div>
            </div>
        </>
    )
}

export default MoreButton