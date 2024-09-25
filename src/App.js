import React from 'react'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import appstore from './utils/store'

function App() {
  return (
    <Provider store={appstore}>
      <Body/>
    </Provider>
    
  )
}

export default App