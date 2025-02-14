import { useState } from 'react'
import "../Apps/Button.css"

/** Separar distintas funciones en simples componentes es una muy buena practica */
const Display = ({ counter }) => <div>{counter}</div>

/** Creamos tambien un componente de button */

/* Por convención, las props de los controladores de eventos deberían iniciar con on, 
seguido de una letra mayúscula. 
Por ejemplo, el prop onClick del componente Button pudo haberse llamado onSmash: */
const Button = ({ onSmash, text }) => <button className="button2" onClick={onSmash}>{text}</button>


const App2 = () => {
    const [counter, setCounter] = useState(0)

    /** lo ideal es separar estas funciones en 2 y reutilizarlas 
     * Controladores de Eventos.
    */
    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)
    const decreaseByOne = () => setCounter(counter - 1)

    /**El propio tutorial oficial de React sugiere: "En React, 
     * es convencional usar nombres onSomething para props que representan eventos
     *  y handleSomething para las definiciones de funciones que controlan los eventos." */

    /** con onClick contralamos Eventos */
    return (
        <div>
            <Display counter={counter} />
            <Button onSmash={increaseByOne} text="plus" />
            <Button onSmash={setToZero} text="zero" />
            <Button onSmash={decreaseByOne} text="minus" />
        </div>

    )
}

export default App2