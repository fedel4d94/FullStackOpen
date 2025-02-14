
/*
cuando el component es tan corto se puede usar el oneLiner

const Header = ({course}) => <h1>{course}</h1>
*/
const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
}
const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </div>)
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)
}

const App2 = () => {

    /*
    Aca representamos como seria meter objetos dentro de un array

    const object = {...} OBJETO
    const array = [] ARRAY
    const parts = [ {}, {}, {} ] array de objetos 
    */
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course}></Header>
            <Content parts={parts}></Content>
            <Total parts={parts}></Total>
        </div>
    )
}

export default App2