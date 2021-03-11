

import React, { useState } from 'react';

import s from './InputFile.module.sass'
import { InputFileProps } from '../../../interfaces/interfaces'


const InputFile: React.FC<InputFileProps> = (props) => {
    
    const { name, file, setFile, multiple } = props;

    const [dragFocus, setDragFocus] = useState<boolean>(false);
    const [fileName, setFilename] = useState<string>('');

    const handleChange = (e: any) => {
        let file = e.target.files[0]
        let name = e.target.files[0].name

        setFile(file)
        setFilename(name)
    }

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

        let dt = e.dataTransfer.files

        if (dt) {
            let file = dt[0]
            let name = file.name
            debugger
            setFile(file)
            setFilename(name)
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
                onChange={(e) => handleChange(e)}
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
                            ? <p>Вы выбрали файл: {fileName}</p>
                            : <p>Выберите файл или перетащите его сюда</p> 
                        }
                    </div>
                </div>
            </label>
        </div>

    )
}

export default InputFile;