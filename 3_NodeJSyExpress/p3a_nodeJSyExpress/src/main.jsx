import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*Construiremos nuestro backend sobre NodeJS,
 que es un entorno de ejecución basado en JavaScript y en el motor Chrome V8 de Google.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
