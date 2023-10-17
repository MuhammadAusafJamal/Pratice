
function Ques2() {
    return (
        <div className="main">
            <h1 className="heading">  Question 2 </h1>

            <h2 className="heading"> Briefly explain with an example what's the difference between import Something from 'package' VS import Something from 'package' </h2>

            <h4 className="heading">{" In React JS both import Something from 'package' VS import {Something} from 'package' are used to import components or other constructs of JavaScript. However there is a slight difference in how they handle named exports. "}</h4>
            <h4 className="heading"> import Something from 'package' is a syntax used to import a default export from the 'package'. The default export is a single value or construct that the module considers its primary export. You can choose any name for the imported value. </h4>
            <h4 className="heading">{" import {Something} from 'package' are used to import a named export specifically name Something from the 'package'. Named exports  allows you to export multiple values from a module and import only the one you need with their exact names."}</h4>
        </div>
    )
}

export default Ques2;