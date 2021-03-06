// Styles
import './styles/webfonts/index.css'
import './styles/globals.less'


// Polyfills
import 'core-js/es6'


// Bootstrapping
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import Application from './components/Application'
import { createStore } from './store'


const store = createStore()

window['__store__'] = store  // tslint:disable-line


ReactDOM.render(
    <Provider {...{ store }}>
        <Application/>
    </Provider>,
    document.querySelector('#application-viewport'),
)
