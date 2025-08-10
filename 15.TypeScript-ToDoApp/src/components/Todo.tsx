import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import '../css/Todo.css'

function Todo() {
    return (
        <div className="todo-div">
            <div>Ben ilk todoyum</div>
            <div>
                <CiCircleRemove className="icons" />
                <CiEdit className="icons" />
            </div>
        </div>
    )
}

export default Todo