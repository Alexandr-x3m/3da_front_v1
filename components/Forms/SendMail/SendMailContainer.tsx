
import { useState } from 'react'

import SuccessSend from '../../Alerts/SuccessSend'
import PopUp from '../../PopUp/PopUp'
import MailForm from './SendMail'
import { SendMailContainerProps } from '../../../interfaces/interfaces'
import s from '../../styles/components/PopUp.module.sass'

const SendMailContainer: React.FC<SendMailContainerProps> = (props) => {

    const { setVisability } = props;

    const [success, setSuccess] = useState<boolean>(false);
    const [mailSended, setMailSended] = useState<boolean>(false);

    return (
        <>
            {mailSended
                ? (<PopUp
                    setVisibility={setVisability}
                    scroll={false}
                    content={
                        <SuccessSend
                            success={success}
                            title={success ? 'Спасибо вам!' : 'Упс, что-то сломалось'}
                            subtitle={
                                success
                                    ? ('Мы уже обрабатываем заяку и скоро свяжемся с вами!')
                                    : ('Попробуйте отправить заявку позже или позвонить по телефону: <a href="tel:+78009232131321" > +78009232131321 </a>')}
                        />
                    }
                />)
                : (<PopUp
                    setVisibility={setVisability}
                    title={'Оставить заявку'}
                    scroll={true}
                    content={
                        <MailForm
                            setSuccess={setSuccess}
                            setMailSended={setMailSended}
                        />
                    }
                />)
            }

        </>
    )
}

export default SendMailContainer;