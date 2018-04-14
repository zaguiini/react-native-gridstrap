import generateStyles from './styles'
import generateContainer from './container'
import generateRow from './row'
import generateCol from './col'

export default (gutterSize = 16) => {
  const {
    container,
    containerFluid,
    row,
    col,
    ...styles,
  } = generateStyles(gutterSize)

  return {
    Container: generateContainer(container, containerFluid),
    Row: generateRow(row),
    Col: generateCol(col),
    styles,
  }
}
