import React from 'react'
import PropType from 'prop-types'

import { View, ViewPropTypes } from 'react-native'

export default (container, containerFluid) => (
  class Container extends React.PureComponent {
    static propTypes = {
      children: PropType.oneOfType([
        PropType.element,
        PropType.arrayOf(PropType.element),
      ]).isRequired,

      style: ViewPropTypes.style,
      fluid: PropType.bool,
    }

    static defaultProps = {
      style: {},
      fluid: false,
    }

    render() {
      return (
        <View
          style={[
            container,
            this.props.style,
            this.props.fluid && containerFluid,
          ]}
        >
          {this.props.children}
        </View>
      )
    }
  }
)
