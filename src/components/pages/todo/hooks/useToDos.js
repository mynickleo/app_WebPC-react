import { useQuery } from "@tanstack/react-query"
import ToDoServices from "../../../services/ToDo.services"

const data = {
    data: [
        {
            id: 1,
            completed: false,
            title: 'Test',
            userID: 1
        }
    ]
}

export const useToDos = ()=>{
    return useQuery(
        ['todos'], ()=>
        ToDoServices.getAll(),
        {
            select: ({data}) => data,
            initialData(){
                return data
            }
        }
    )
}