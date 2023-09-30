import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Info from "../pages/info/Info"
import Cpu from "../pages/cpu_page/Cpu"
import Gpu from "../pages/gpu_page/Gpu"
import Ram from "../pages/ram_page/Ram"
import { accounts } from "../databases/accounts.data"
import Basket from "../pages/basket/Basket"
import ModalInfoAction from "../pages/Modal_react/ModalInfoAction"
import ToDo from "../pages/todo/ToDo"

const buttonLoginModal = document.getElementById("login_")
const loginHTML = document.getElementById("login")
const passwordHTML = document.getElementById("password")
const buttonLogin = document.getElementById("buttonLogin")
const modalLogin = document.querySelector(".modal")

const Router = ()=>{

    const {user, setUser} = useContext(AuthContext);
    const [modal_log_in, setShowModalIn] = useState('')
    const [modal_log_out, setShowModalOut] = useState('')
    const [modal_error, setShowError] = useState('')
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const login = loginHTML.value
        const password = passwordHTML.value
        const user_ = {login, password}

        //по красоте использовать axios на сервер. Но сервера нет :D
        //поэтому будем изголяться внутренней базой
        accounts.map((account) =>{
            if(account.login == user_.login && account.password == user_.password){
                localStorage.setItem('user', JSON.stringify(user_))
                setUser({name: user_.login})
                buttonLogin.textContent = "Выйти"
                showModal_LogIN()
            }
            else{
                showModal_Error()
            }
        })
    }

    const loginOut = () =>{
        localStorage.removeItem('user')
        setUser(null)
        buttonLogin.textContent = "Войти"
        buttonLogin.removeEventListener("click", loginOut, false)
        buttonLogin.addEventListener("click", openModal)
        showModal_LogOut()
    }

    const showModal_LogIN = ()=>{
        setShowModalIn(true)
        setTimeout(()=> {setShowModalIn(false)}, 3000)
    }

    const showModal_LogOut = ()=>{
        setShowModalOut(true)
        setTimeout(()=> {setShowModalOut(false)}, 3000)
    }

    const showModal_Error = ()=> {
        setShowError(true)
        setTimeout(()=> {setShowError(false)}, 3000)
    }

    useEffect(()=>{
        if(!user){
            const loggedUser = JSON.parse(localStorage.getItem('user'));
            if(loggedUser){
                setUser({name: loggedUser.login})
                buttonLogin.textContent = "Выйти"
                buttonLogin.removeEventListener("click", openModal, false)
                buttonLogin.addEventListener("click", loginOut)
            }
            else{
                if(buttonLoginModal != undefined){
                    buttonLoginModal.addEventListener("click", (e)=>{
                        handleSubmit(e)
                        modalLogin.style.display = "none"
                    })
                }
                else{
                    throw new Error("Something wrong... HTML not created Login button ID")
                }
            }
        }
        else{
            buttonLogin.textContent = "Выйти"
            buttonLogin.removeEventListener("click", openModal, false)
            buttonLogin.addEventListener("click", loginOut)
        }
    })

    return(
        <BrowserRouter>
            <Routes>
                <Route element = {<Home />} path = '/'/>
                <Route element = {<Info />} path = '/more_info'/>
                <Route element = {<Cpu />} path="/cpu"/>
                <Route element = {<Gpu />} path="/gpu"/>
                <Route element = {<Ram />} path="/ram"/>
                <Route element = {<Basket/>} path="/basket"/>
                <Route element = {<ToDo/>} path="/todo"/>

                <Route path = '*' element = {<div>Page not found</div>} />
            </Routes>
            {modal_log_in && <ModalInfoAction textModal="Выполнен вход"/>}
            {modal_log_out && <ModalInfoAction textModal="Выполнен выход"/>}
            {modal_error && <ModalInfoAction textModal="Неверный логин или пароль"/>}
        </BrowserRouter>
    )
}

export default Router