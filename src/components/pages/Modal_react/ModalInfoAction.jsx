import { useRef } from 'react'
import styles from './ModalInfoAction.module.css'

const ModalInfoAction = ({textModal = 'default modal'}) =>{
    return(
        <div className={styles.modal}>{textModal}</div>
    )
}

export default ModalInfoAction