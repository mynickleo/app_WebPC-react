import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import styles from './withAuth.module.css'
import { Link } from "react-router-dom"

export const withAuth = (Component) => (props) => {
    const {user} = useContext(AuthContext)

    if(!user) return (
        <div className={styles.main}>
            <h1>Вы не авторизировались, чтобы видеть эту страницу</h1>
            <h2>Пожалуйста, войдите в профиль</h2>
            <Link to = "/" className={styles.linkButton}>На главную</Link>
        </div>
    )

    return <Component {...props}/>
}