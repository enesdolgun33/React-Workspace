import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import '../css/Todo.css'
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;


    const dispatch = useDispatch();
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    return (
        <div className="todo-div">
            <div>
                {content}
            </div>
            <div>
                <CiCircleRemove onClick={handleRemoveTodo} className="icons" />
                <CiEdit className="icons" />
            </div>
        </div>
    )
}

export default Todo