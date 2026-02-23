export default function Todo({ task, isDone }){
    if (isDone === true) {
        return <li className="border22">task: {task}</li>
    }
    return <li>To be done: {task} </li>
}