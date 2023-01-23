import {useRef} from 'react';
import styles from './BaseForm.module.scss';
import search from './../../assets/img/search.svg';


interface BaseFormProps {
    placeholder: string,
    handleSubmit: (text:string)=> void,
}


const BaseForm = ({handleSubmit, placeholder}:BaseFormProps) => {
    const newRef = useRef<HTMLInputElement | null>(null)

    const onClick = ()=> {
        if (newRef.current?.value) {
            handleSubmit(newRef.current.value)
            newRef.current.value = ''
        }
    }

    return (
        <div className={styles.container}>
            <input type='text'
                   placeholder={placeholder}
                   ref={newRef}

            />
            <button onClick={onClick}><img src={search} alt='pic'/></button>
        </div>
    )
}

export default BaseForm