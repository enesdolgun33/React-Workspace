import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import '../css/Todo.css'
import type { TodoType } from "../types/Types";

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;

    return (
        <div className="todo-div">
            <div>
                {content}
            </div>
            <div>
                <CiCircleRemove className="icons" />
                <CiEdit className="icons" />
            </div>
        </div>
    )
}

export default Todo