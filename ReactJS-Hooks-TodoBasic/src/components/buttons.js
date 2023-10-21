

function Madd({add}) {
    return (
        <button className="input-group-text my-btn" id="inputGroup-sizing-lg" onClick={()=>add()}>ADD</button>
    )
}

function Mdeleteall({deleteall}) {
    return (
        <button className="input-group-text my-btn" id="inputGroup-sizing-lg" onClick={()=>deleteall()} >DELETE ALL</button>
    )
}

function Medit() {
    return (
        <button className="input-group-text my-btn" id="inputGroup-sizing-lg" >EDIT</button>
    )
}
function Mdelete() {
    return (
        <button className="input-group-text my-btn" id="inputGroup-sizing-lg" >DELETE</button>
    )
}


export { Madd, Mdelete, Mdeleteall, Medit };