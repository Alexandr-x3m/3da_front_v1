import { useRef, useState } from 'react'
import axios from 'axios'

import s from '../../../styles/form/sendMail.module.sass'
import InputButton from '../../Inputs/InputButton/inputButton'
import InputText from '../../Inputs/InputText/InputText'
import InputFile from '../../Inputs/InputFile/InputFile'
import InputTextarea from '../../Inputs/InputTextarea/InputTextarea'
import { MailFormProps } from '../../../interfaces/interfaces'


const MailForm: React.FC<MailFormProps> = (props) => {

    const { setSuccess, setMailSended } = props;

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [file, setFile] = useState<File>(null);
    const [sending, setSending] = useState<boolean>(false)

    const forma = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)

        let formData = new FormData()

        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('email', mail)
        formData.append('file', file)

        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:3001/sendmail',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            })
            if (res.status === 200) {
                setMailSended(true)
                setSuccess(true)
                setSending(false)
            }
            if (res.status === 400 || res.status === 500) {
                setMailSended(true)
                setSuccess(true)
                setSending(false)
            }
        } catch (err) {
            console.error(err)
            setMailSended(true)
            setSuccess(true)
            setSending(false)
        }
    }

    return (
        <div className={s.container}>
            <form 
                method={'POST'}
                ref={forma}
                className={s.mailForm__container} 
                onSubmit={handleSubmit}
            >
                <div className={s.input_block} >
                    <InputText 
                        name={'name'}
                        label={'Имя*'}
                        value={name}
                        handleValue={setName}
                        required={true}
                    />
                </div>
                <div className={s.input_block} >
                    <InputText 
                        name={'phone'}
                        label={'Номер телефона*'}
                        value={phone}
                        handleValue={setPhone}
                        required={true}
                    />
                </div>
                <div className={s.input_block} >
                    <InputText 
                        name={'email'}
                        label={'Эл. почта*'}
                        value={mail}
                        handleValue={setMail}
                        required={true}
                    />
                </div>
                <div className={s.input_block} >
                    <InputTextarea 
                        label={'Добавьте комменатрий или описание к задаче...'}
                        name={'desc'}
                        value={desc}
                        setValue={setDesc}
                        required={true}
                    />
                </div>
                <InputFile name={'mailfail'} file={file} setFile={setFile} multiple={true}  />
                <div className={s.mailForm__submitContainer} >
                    <InputButton 
                        value={'Отправить'}
                        type={'submit'}
                        additClass={s.submit_btn}
                        loading={sending}
                    />
                </div>
            </form>
        </div>
    )
}

export default MailForm;