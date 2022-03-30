import React from 'react'
import styles from './App.module.css'
import poweredBy from './assets/powered.png'
import {levels, calculateImc, Level} from './helpers/imc'
import GridItem from './components/GridItem'

const App = () => {
  const [heightField, setHeightField] = React.useState<number>(0)
  const [weightField, setWeightField] = React.useState<number>(0)
  const [itemShown, setItemShown] = React.useState<Level | null>(null)

  const handleHeightChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setHeightField(parseFloat(e.target.value))
  }
  
  const handleWeightChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setWeightField(parseFloat(e.target.value))
  }

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      alert(heightField +' ' + weightField) //ok: 1,6 40
      setItemShown(calculateImc(heightField, weightField)) 
      alert(itemShown)          
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <main className={styles.mainContainer}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredBy} alt="Logo retangulo azul com texto branco IMC no centro" width={150} />
        </div>
      </header>
      <section className={styles.calcContainer}>
        <div className={styles.leftContainer}>
          <h1>Calcule seu IMC</h1>
          <p>O IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>
          <form>  
            <input 
            type="number" 
            value={heightField > 0 ? heightField : ''} 
            onChange={handleHeightChange} 
            placeholder="Digite sua altura"
            />
            <input 
            type="number" 
            value={weightField > 0 ? weightField : ''} 
            onChange={handleWeightChange} 
            placeholder="Digite seu peso"
            />
            <button onClick={handleCalculateButton}>Calcular</button>
          </form>
        </div>
        <div className={styles.rightContainer}>
          {!itemShown &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {itemShown && 
            <div className={styles.divResult}>
              <div className={styles.rightArrow}></div>
              < GridItem item={itemShown}/>
            </div>
          }
        </div>
      </section>
    </main>
  )
}

export default App
