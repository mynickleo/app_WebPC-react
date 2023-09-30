import axios from "axios"

class ToDoService{
    #URL = 'https://jsonplaceholder.typicode.com/todos'

    async getAll(){
        return axios.get(`${this.#URL}/?_start=0&_limit=10`)

    }

    async getByID(id){
        return axios.get(`${this.#URL}/${id}`)
    }
}

export default new ToDoService()