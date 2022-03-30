import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
  item: Level
}

const GridItem = ({item}: Props) => {
  return (
    <div className={styles.main} style={{backgroundColor:item.color}}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up' ? upImage : downImage} alt={item.title} />
      </div>
      <div className={styles.gridTitle}>
        <h2>{item.title}</h2>
      </div>
      <div className={styles.gridInfo}>
        <p>
          IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
          </p>
      </div>      
    </div>
  )
}

export default GridItem

/**
 * se em vez de index eu quiser criar um arquivo com nome do component, na hora de importar no app.tsx terei que fazer:
 * import GridItem from './components/GridItem/GridItem'
 * Com o index posso importar direto: import {GridItem} from './components/GridItem'
 */