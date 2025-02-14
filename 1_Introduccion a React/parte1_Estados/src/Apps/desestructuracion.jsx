

/**
 DESESTRUCTURACION de props tambien para no estar llamandolas props.name etc sino directamente name.
 
 */

const Hello = ({ name, age }) => {

    /*
    DESESTRUCTURACION
    otra manera de poner lo mismo
    const Hello = (props) =>
    const name = props.name
    const age = props.age 
    */

    const bornYear = () => new Date().getFullYear() - age

    /*const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - age
    }*/
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
                <p>So you were probably born in {bornYear()}</p>
            </p>
        </div>
    )
}

const desesc = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

export default desesc
