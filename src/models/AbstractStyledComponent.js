// @flow
import { Component, PropTypes } from 'react'

import { CHANNEL } from './ThemeProvider'

export default class AbstractStyledComponent extends Component {
  static isPrototypeOf: Function
  state: {
    theme: any,
    generatedClassName?: string
  }
  unsubscribe: () => void
}

AbstractStyledComponent.contextTypes = {
  [CHANNEL]: PropTypes.func,
}
