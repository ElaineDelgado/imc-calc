export type Level = {
  title: string,
  color: string,
  icon: 'down' | 'up',
  imc:number[],
  yourImc?: number
}

export const levels:Level[] = [
  { 
    title: 'Magreza', 
    color: '#96a3ab', 
    icon: 'down',
    imc: [0, 18.5],
  },
  { 
    title: 'Normal', 
    color: '#0ead69', 
    icon: 'up',
    imc: [18.6, 24.9],
  },
  { 
    title: 'Sobrepeso', 
    color: '#e2b036', 
    icon: 'down',
    imc: [25, 30],
  },
  { 
    title: 'Obesidade', 
    color: '#c42a3f', 
    icon: 'down',
    imc: [30.1, 99],
  },
]

export const calculateImc = (height:number, weight: number) => {
  const imc = weight / (height * height) 
  for (let i in levels) {
    let minHeight = levels[i].imc[0]
    let maxHeight = levels[i].imc[1]

    if (imc >= minHeight && imc < maxHeight) {
      levels[i].yourImc = parseFloat(imc.toFixed(1))
      return levels[i]
    }
  }  
  return null
}
