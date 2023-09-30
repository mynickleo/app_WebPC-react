import { Link } from "react-router-dom"
import styles from "./Home.module.css"

const Home = ()=>{
    return(
        <div className={styles.main}>
            <h1 className={styles.header1}>Buy PC</h1>
            <h2 className={styles.header2}>Вдохновлен удобством и скоростью</h2>
            <section className={styles.section_info}>
                Мы - счастливый и удобный сервис по выбору компьютерных комплектующих. 
                На нашем сайте вы можете собрать себе игровое или рабочее решение
            </section>
            <Link to = "/more_info" className={styles.linkMoreInfo}>Узнать больше</Link>
            <div className={styles.picture}></div>
        </div>
    )
}

export default Home