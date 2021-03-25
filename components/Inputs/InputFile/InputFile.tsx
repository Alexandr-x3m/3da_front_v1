

import React, { useState } from 'react';

import s from './InputFile.module.sass'
import { InputFileProps } from '../../../interfaces/interfaces'


const InputFile: React.FC<InputFileProps> = (props) => {
    
    const { name, file, setFile, multiple } = props;

    const [dragFocus, setDragFocus] = useState<boolean>(false);
    const [fileName, setFilename] = useState<string>('');

    

    const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragFocus(true)
    } 
    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragFocus(false)
    } 

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        let files = e.dataTransfer.files

        if (multiple) {
            setFile(files)
            setFilename(`Выбрано файлов: ${files.length} шт.`)
        } else {
            let name = files[0].name
            setFile(file)
            setFilename('Вы выбрали файл с именем: ' + name)
        }
    } 

    const handleChange = (e: any) => {
        e.preventDefault()
        let files = e.dataTransfer.files

        if (multiple) {
            setFile(files)
            setFilename(`Выбрано файлов: ${files.length} шт.`)
        } else {
            let name = files[0].name
            setFile(file)
            setFilename('Вы выбрали файл с именем: ' + name)
        }
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragFocus(true)
    } 

    
    return (
        <div className={s.container} >
            <input 
                id="file-input" 
                type="file" 
                name={name} 
                multiple={multiple}
                className={s.input} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <label htmlFor="file-input">
                <div 
                    className={s.btn + ' ' + (dragFocus ? s.btn_hover : null)} 
                    draggable={true}
                    onDrop={(e: React.DragEvent<HTMLDivElement>) => dropHandler(e)}
                    onDragOver={(e: React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
                    onDragEnter={(e: React.DragEvent<HTMLDivElement>) => dragEnterHandler(e)}
                    onDragLeave={(e: React.DragEvent<HTMLDivElement>) => dragLeaveHandler(e)}
                >
                    <div className={s.img_block} >
                        <img id="upload-image" src="/icons/upload_icon.svg" />
                    </div>
                    <div >
                        {fileName
                            ? <p>{fileName}</p>
                            : <p>Выберите изображение(я) или перетащите его сюда, чтобы добавить.</p> 
                        }
                    </div>
                </div>
            </label>
        </div>

    )
}

export default InputFile;