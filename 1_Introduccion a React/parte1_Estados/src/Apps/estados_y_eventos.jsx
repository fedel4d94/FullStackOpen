import { useState } from 'react'
/*useState para cambiar de estado los componentes y reenderizar ese componente
 
 1. Primera Renderización (Mounting)
Cuando el componente se monta por primera vez en el DOM. Esto ocurre cuando es utilizado dentro de otro componente o directamente en el ReactDOM.render() (React 17) o createRoot().render() (React 18).

2. Cambio en el Estado (useState)
Cada vez que se actualiza un estado (useState), React re-renderiza el componente para reflejar los nuevos valores.

3. Cambio en las Propiedades (props)
Si el componente recibe nuevas props (diferentes de las anteriores), se renderiza nuevamente.

4. Cambio en el Contexto (useContext)
Si un componente usa un Context y su valor cambia, el componente se vuelve a renderizar.

5. Cambio en el Componente Padre
Si un componente padre se re-renderiza, React vuelve a renderizar a sus hijos (a menos que optimices con memo() o useMemo()).
*/
const App2 = () => {

    /*
    reenderizamos con hooks de estado 
    */
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        console.log("clicked")
        setCounter(counter + 1)
    }

    /** con onClick contralamos Eventos */
    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleClick}>
                plus
            </button>
            <button onClick={() => setCounter(0)}>
                zero
            </button>
        </div>

    )
}

export default App2