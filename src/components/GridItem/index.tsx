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
      {item.yourImc &&
          <p className={styles.yourImc}>Seu IMC é: {item.yourImc}</p>
          }
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
