import React, {useState} from "react";
import { Form,Button } from "react-bootstrap";
import UserInterface from "../interfaces/User";

interface UserRowInterface extends UserInterface {
    UpdateUser(user:UserInterface) : void
}
const UserRow =(props:UserRowInterface) => {
    const [FirstName,setFirstName] = useState<string>(props.FirstName)
    const [LastName,setLastName] = useState<string>(props.LastName)
    const [Username,setUsername] = useState<string>(props.Username)
    const[changed,setChanged] = useState<boolean>(false)
    const resetData = () => {
        setFirstName(props.FirstName)
        setLastName(props.LastName)
        setUsername(props.Username)
        setChanged(false)

    }
    const changeFunction =(myF: React.Dispatch<React.SetStateAction<string>>,value:string) => {
        myF(value)
        setChanged(true)
    }
    return(
        <tr>
            <td>{props.Id}</td>
            <td> <Form.Control type="text" value={FirstName} onChange={(e) => {changeFunction(setFirstName,e.target.value)} } placeholder="Enter FirstName" /></td>
            <td> <Form.Control type="text" value={LastName} onChange={(e) => {changeFunction(setLastName,e.target.value)} } placeholder="Enter LastName" /></td>

            <td> <Form.Control type="text" value={Username} onChange={(e) => {changeFunction(setUsername,e.target.value)} } placeholder="Enter Username" /></td>
            <td>
                <Button variant="success" onClick = {(e) =>{props.UpdateUser({Id:props.Id,FirstName,LastName,Username})}} disabled = {!changed}>Update</Button>
                <Button variant="primary" onClick = {resetData} disabled = {!changed}>Reset</Button></td>
            </tr>
    )
}
export default UserRow