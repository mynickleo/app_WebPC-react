import { Link } from "react-router-dom"
import { useToDos } from "./hooks/useToDos"
import styles from "./ToDo.module.css"

const ToDo = ()=>{
    const {isLoading, data} = useToDos()
    
    return (
        <div className={styles.main}>
            <h1 className={styles.info}>Демонстрация Axios запросов</h1>
            <div className={styles.todo_container}>
            {
                isLoading ?
                (<div>Загружаю данные с сервера...</div>)
                :
                data?.length ? data.map(todo => (
                    <h1>
                        Дело: {todo.title}
                    </h1>
                ))
                :
                <h1>
                    Данные не были обнаружены...
                </h1>
            }
            </div>
            <Link to = "/" className={styles.linkButton}>На главную</Link>
        </div>
    )
}

export default ToDo