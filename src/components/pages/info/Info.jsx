import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import styles from './Info.module.css'
import { Link } from "react-router-dom"

const Info = ()=>{
    const {user, setUser} = useContext(AuthContext)

    return(
        <div className={styles.main}>
            {user ? 
            <div className = {styles.userHeader}>
                Привет тебе, {user.name}
            </div>
            :
            <div className= {styles.userHeader}>
                Привет тебе, друг
            </div>
            }

            <div className={styles.headerInfo}>
                Мы являемся командой
            </div>
            <h1 className={styles.header1}>Buy PC</h1>
            <div className={styles.section_info}>
                Мы являемся тестовым сайтом по компьютерным комплектующим, созданным в 2023 году.
                На этом сайте можно оценить работу библиотеки React с ее надстройками, упрощающими заводские способы управления этой грандиозной библиотеки для Front-end разработки
            </div>
            <div className={styles.section_info}>
                Сайт относится к компьютерным комплектующим и некоторое время назад автор данной разработки очень увлекался темой сборки компьютеров. В принципе, как и сейчас, я полагаю.
                Поэтому было решено сделать сайт для тестирования скиллов программирования, закрепления практики и получения удовольствия от сборки
            </div>
            <Link to = "/" className={styles.linkButton}>Вернуться назад</Link>
        </div>
    )
}

export default Info