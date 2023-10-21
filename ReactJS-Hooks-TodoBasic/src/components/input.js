import { Madd, Mdeleteall } from "./buttons"
import { useState } from "react"


export default function Input() {
    const [todo, setTodo] = useState([])
    const [value, setValue] = useState("")

    const add = () => {
        setTodo([...todo, value])
        setValue("")
    }

    const deleteall = () => {
        setTodo([])
    }

    return (
        <div className="input-group input-group-lg my-input">
            <input
                type="text"
                className="form-control "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="What do you want to add?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Madd add={add} />
            <Mdeleteall deleteall={deleteall} />
            <div className="list">
                <ul>
                    {todo.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
            </div>
        </div>

    )
}