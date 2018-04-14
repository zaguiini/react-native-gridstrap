# react-native-grid
The Bootstrap grid implementation for React Native

## Installation
`yarn add @zaguini/react-native-grid`
or
`npm install @zaguini/react-native-grid --save`

## Usage
Please take a look at the bro-tip below.

```js
import makeGrid from '@zaguini/react-native-grid'

const Grid = makeGrid(16) // gutter size
```

The result of the `makeGrid` function is an `Object` with the following properties:
- The `Container`, `Row` and `Col` components:
```js
class MyView extends React.PureComponent {
  ...
  render() {
    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <Text>Hey, it works.</Text>
          </Grid.Col>
          <Grid.Col>
            <Text>Yes! Sure it does.</Text>
          </Grid.Col>
        </Grid.row>
      </Grid.Container>
    )
  }
}
```
- A set of margin and padding styles, following the gutter size definition, defined in the `styles` object. Variation is from `1` to `10` and includes padding and margin left, top, bottom, right, horizontal and vertical.

Example of a margin left of 9.75 times the gutter size:
```js
styles.ml975
```
Each variation has the `0.25`, `0.5`, `0.75` and, of course, the `1` size. Without the decimal dot.

## Component props

All the components might include the `style` prop to better customization if necessary.

### Container
#### fluid
Include this prop in order to remove the gutter padding and make the container fill the width of the parent element, just like `.container-fluid` on the web.

### Row
No additional props.

### Col
#### offset
Include this prop, as a `number`, to make an offset column - just like the `.col-offset` on the web. The offset is defined as the `flex` attribute in the component style. Of course, if this prop is specified, no `child` component will be rendered.
### proportion
How much space from the row will this `col` take. Defaults to `1`.

## Bro tip
Generate the grid in another file, then just include it in your views.

Create a `grid.js` file:
```js
import makeGrid from '@zaguini/react-native-grid'

export const { Container, Row, Col, styles } = makeGrid(16)
```

And then, in `MyView.js`:
```js
import { Container, Row, Col, styles } from './grid'

class MyView extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <Row style={styles.mt5}>
          <Col>
            <Text>It works!</Text>
          </Col>
        </Row>
      </Container>
    )
  }
}
```

