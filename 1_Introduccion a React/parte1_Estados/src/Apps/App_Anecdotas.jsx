import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const [selected, setSelected] = useState(0)
    const [voto, setVoto] = useState(Array(anecdotes.length).fill(0))




    const getRandom = () => Math.floor(Math.random() * anecdotes.length)

    //Esta es una opcion de lo mismo.
    //const getOtherAnecdote = () => setSelected(getRandom());
    //< Button onClick={getOtherAnecdote} text={"otra"} />

    ///asi se actualiza el estado, primero haciendo una copia.
    const actualizarVotos = () => {
        const copy = [...voto]
        copy[selected] += 1
        setVoto(copy)
    }
    const mostrarVotos = () => voto[selected]
    const anecdotaMasVotada = () => Math.max(...voto)
    const posicion = voto.indexOf(anecdotaMasVotada());


    return (
        <div>
            <h1>Anecdota del dia</h1>
            {anecdotes[selected]}
            <div>{"tiene " + mostrarVotos() + " votos"}</div>
            <div>
                <Button onClick={actualizarVotos} text={"Votar"} />
                <Button onClick={() => setSelected(getRandom())} text={"Next Anecdote"} />
            </div>
            <h1>Anecdota con mas votos</h1>
            <h4>La anecdota: {anecdotes[posicion]} </h4>
            <div>{"Tiene un total de: " + anecdotaMasVotada()}</div>
        </div>
    )
}
/// el operador spread ... copia el array, para no modificar el original
/// y los desempaqueta para individualizar los elementos, por eso el max no le puedo pasar el array solo
///sino desempaquetado es decir, los elementos del array
export default App