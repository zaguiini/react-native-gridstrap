import { Dimensions } from 'react-native'
import generateStyles from './styles'
import generateContainer from './container'
import generateRow from './row'
import generateCol from './col'

const { width, height } = Dimensions.get('window')
const realWidth = height > width ? width : height

export default (gutterSize = 16, deviceBaseWidth = 375) => {
  const { container, containerFluid, row, col, ...styles } = generateStyles(
    Math.round((gutterSize * realWidth) / deviceBaseWidth)
  )

  return {
    Container: generateContainer(container, containerFluid),
    Row: generateRow(row),
    Col: generateCol(col),
    styles,
  }
}
