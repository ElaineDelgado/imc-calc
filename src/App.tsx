import React from 'react'
import styles from './App.module.css'
import poweredBy from './assets/logo.png'
import leftArrowImage from './assets/leftarrow.png'
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

  const handleCalculateButton = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(heightField && weightField) {
      setItemShown(calculateImc(heightField, weightField))         
    } else {
      alert('Preencha todos os campos')
    }
  }

  const handleBackButton = () => {
    setItemShown(null)
    setWeightField(0) 
    setHeightField(0)
    executeScroll()
  }  

  const myRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if(itemShown) {
      executeScroll()
    }
  })
  const executeScroll = () => {
    if(myRef.current) {
      myRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <main className={styles.mainContainer}>
      <header>
        <div className={styles.imgHeaderContainer}>
          <img src={poweredBy} alt="Logo retangulo verde contendo texto branco dizendo IMC CALC e um ícone de coração" />
          <h1>Calculadora de IMC</h1>
        </div>
      </header>
      <section className={styles.calcContainer}>
        <div className={styles.leftContainer}>
          <h2>Calcule seu IMC</h2>
          <p>O IMC é a sigla para Indice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>
          <form>  
            <input 
            type="number" 
            value={heightField > 0 ? heightField : ''} 
            onChange={handleHeightChange} 
            placeholder="Digite sua altura"
            disabled={itemShown !== null}
            />
            <input 
            type="number" 
            value={weightField > 0 ? weightField : ''} 
            onChange={handleWeightChange} 
            placeholder="Digite seu peso"
            disabled={itemShown !== null}
            />
            <button onClick={handleCalculateButton} disabled={itemShown !== null}>
              Calcular
            </button>
          </form>
        </div>
        <div className={styles.rightContainer} ref={myRef}>
          {!itemShown &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {itemShown && 
            <div className={styles.divResult}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="Mão com dedo apontando para esquerda"/>
                <p>Nova consulta</p>
              </div>
              < GridItem item={itemShown} />
            </div>
          }
        </div>
      </section>
    </main>
  )
}

export default App
