export const TaskItem = (props)=>{

    return <>
    <li>{props.items} ({props.status}) <button onClick={props.onStatusChange}>Change status</button></li>
    </>
}