
function Ques1() {
    const name = "Hello World";
    const obj = { name: "Hello World Object" }
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
    const complex = [{ company: 'XYZ', jobs: ['Javascript ', ' React'] }, { company: 'ABC', jobs: [' AngularJs ', ' Ionic '] }]
    return (
        <div className="main">
            <h1 className="heading" >Question 1</h1>
            <p>Name : {name}</p>
            <p>Object : {obj.name}</p>
            <p>{data.map((v, i) => <li key={i}>{v}</li>)}</p>
            <p>{list.map((v, i) => <li key={i}>{v.name}</li>)}</p>
            <table>
                <thead>
                    <tr>
                        <th> Company </th>
                        <th> Jobs </th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="j1" >
                        <td>{complex[0].company}</td>
                        <td>{complex[0].jobs}</td>
                    </tr>

                    <tr className="j2" >
                        <td>{complex[1].company}</td>
                        <td>{complex[1].jobs}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default Ques1;