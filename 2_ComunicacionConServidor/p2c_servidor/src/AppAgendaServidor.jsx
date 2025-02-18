import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personaService from './services/persona'

const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }
    return (
        <div className={"notificacion " + type}>
            {message}
        </div>
    )
}

const App = () => {

    const initialState = { name: '', number: '' }
    const [persons, setPersons] = useState([])
    const [newPerson, setNewPerson] = useState(initialState)
    const [newFilter, setNewFilter] = useState('')
    const [errorMessage, setErrorMessage] = useState({ message: null, type: null })

    useEffect(() => {
        console.log('useEffect get all');
        personaService.getAll()
            .then(initialPersons => { setPersons(initialPersons) })
    }, []);

    const addPerson = (event) => {
        event.preventDefault();
        if (persons.find(person => person.name === newPerson.name)) {
            if (window.confirm(newPerson.name + " is already added to phonebook, replace the old number with a new one?")) {
                const personUpdate = persons.find(person => person.name === newPerson.name)
                console.log(personUpdate);
                const personNewObject = {
                    ...personUpdate,
                    number: newPerson.number
                };
                personaService.update(personUpdate.id, personNewObject)
                    .then(returnedPerson => {
                        console.log('Returned Person:', returnedPerson);
                        setPersons(persons.map(person => person.id !== personUpdate.id ? person : returnedPerson))
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(error => {
                        setErrorMessage({
                            message: newPerson.name + " ERROR ",
                            type: "error"
                        }
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    })
                setErrorMessage(
                    newPerson.name + " Se Actualizó correctamente"
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            }
            /**
             * El método map recorre cada elemento del array persons y retorna un nuevo array 
             * con los resultados de la función de callback (person => ...) aplicada a cada elemento.
             * Para cada person en el array:
            
            person.id !== personUpdate.id
            Esta condición verifica si el id del elemento actual (person.id) es diferente del id de personUpdate.
            
            ? person : returnedPerson
            Esto es un operador ternario:
            
            Si la condición es verdadera (person.id !== personUpdate.id), retorna el elemento original (person), sin cambios.
            Si la condición es falsa (person.id === personUpdate.id), reemplaza ese elemento por returnedPerson.
            */

        } else {
            console.log("Estamos OK");
            const personObject = {
                name: newPerson.name,
                number: newPerson.number
            };
            console.log(personObject)
            personaService.create(personObject)
                .then(returnedPerson => { setPersons(persons.concat(returnedPerson)) })
            setNewPerson(initialState)
            setErrorMessage({
                message: newPerson.name + " Se agrego correctamente",
                type: "exito"
            }
            )
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    };

    ///control de eventos
    const handlePersonChange = (event) => {
        console.log("entre a handlePersonChange");
        const { name, value } = event.target;
        setNewPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFilterChange = (event) => {
        console.log("entre a handleFilterChange");
        const { value } = event.target;
        console.log("value: ", value);
        setNewFilter(value);
    }

    const buttonEliminarRegistro = (id) => {
        console.log("entre a buttonEliminarRegistro");
        const person = persons.find(person => person.id === id);
        if (window.confirm(`Delete ${person.name} ?`)) {
            personaService.eliminar(id)
                .then(response => {
                    console.log("response: ", response);
                    setPersons(persons.filter(person => person.id !== id));
                });
        }
    }
    return (
        <div>
            <h2>Phonebook</h2>
            {errorMessage && <Notification message={errorMessage.message} type={errorMessage.type} />}
            <p>filter shown with <input type="text" name='filter' onChange={handleFilterChange} /></p>
            <h2>Add new Persons</h2>
            <PersonForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange} />
            <h2>Numbers</h2>
            <Filter persons={persons} newFilter={newFilter} buttonDelete={buttonEliminarRegistro} />
        </div>
    );
};

export default App;