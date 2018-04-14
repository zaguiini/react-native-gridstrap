import { StyleSheet } from 'react-native'

const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const positions = ['Left', 'Right', 'Top', 'Bottom', 'Horizontal', 'Vertical']

function getVariations(attribute, gutterSize) {
  const attributes = {}

  sizes.forEach((size) => {
    positions.forEach((position) => {
      for(let i = 0.25; i <= 1; i += 0.25) {
        const variation = size === 0 ? i : size * i

        let attributeName = attribute.charAt(0)
        attributeName += position.charAt(0).toLowerCase()
        attributeName += variation.toString().replace('.', '')

        attributes[attributeName] = {
          [`${attribute}${position}`]: gutterSize * variation,
        }
      }
    })
  })

  return attributes
}

export default (gutterSize) => StyleSheet.create({
  container: {
    paddingHorizontal: gutterSize,
  },

  containerFluid: {
    paddingHorizontal: 0,
  },

  row: {
    marginHorizontal: gutterSize * -1,
    paddingHorizontal: gutterSize / 2,
    flexDirection: 'row',
  },

  col: {
    paddingHorizontal: gutterSize / 2,
  },

  ...getVariations('margin', gutterSize),
  ...getVariations('padding', gutterSize),
})
