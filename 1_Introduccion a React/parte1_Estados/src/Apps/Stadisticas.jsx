import { useState } from 'react'

const Button = ({ clickValue, text }) => {
  return <button onClick={clickValue}>{text}</button>
}

//UN COMPONENTE BASICAMENTE RETORNA JSX HTML, CSS
//Su objetivo principal es renderizar una parte de la interfaz de usuario. COMO EL BTN DE ARRIBA


const Statistics = ({ clicks, prom, positive }) => {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={clicks.good} />
          <StatisticsLine text="neutral" value={clicks.neutral} />
          <StatisticsLine text="bad" value={clicks.bad} />
          <StatisticsLine text="total" value={clicks.total} />
          <StatisticsLine text="Promedio" value={prom} />
          <StatisticsLine text="Positivo" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const History = ({ clicks, prom, positive }) => {
  if (clicks.total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Statistics clicks={clicks} prom={prom} positive={positive}></Statistics>
    </div >
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  /*  Version con 3 estados

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  /*
    const clickGood = () => {
      setGood(good + 1)
    }
    const clickNeutral = () => {
      setNeutral(neutral + 1)
    }
    const clickBad = () => {
      setBad(bad + 1)
    }
*/
  //Lo podemos hacer con 1 solo estado
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0, total: 0
  })

  /* que los eventos se encarguen de cambiar el estado
  const clickGood = () => {
    const newClicks = {
      // En la práctica, { ...clicks } crea un nuevo objeto que tiene copias de todas las propiedades del objeto clicks
      ...clicks,
      good: clicks.good + 1,
    }
    setClicks(newClicks)
  }*/
  //SON EQUIVALENTES

  const clickGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1, total: clicks.total + 1 })
  }

  const clickNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
      total: clicks.total + 1,
    }
    setClicks(newClicks)
  }
  const clickBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
      total: clicks.total + 1,
    }
    setClicks(newClicks)
  }


  const calculatePromedio = () => {
    const promedio = clicks.good * 1 + clicks.neutral * 0 + clicks.bad * -1;
    return clicks.total > 0 ? (promedio / clicks.total).toFixed(9) : 0;
  }

  const calculatePositivePercentage = () => {
    return clicks.total > 0 ? ((clicks.good / clicks.total) * 100).toFixed(9) : 0;
  };


  return (
    <div>
      <h1>give feedback</h1>
      <Button clickValue={clickGood} text="good" />
      <Button clickValue={clickNeutral} text="neutral" />
      <Button clickValue={clickBad} text="bad" />
      <History clicks={clicks} prom={calculatePromedio()} positive={calculatePositivePercentage()} />
    </div>
  )
}

export default App