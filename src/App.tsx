import React from 'react'
import './App.css'
import { DiagramComponent } from './components/Diagram'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faExclamationTriangle)

function App() {
	return <DiagramComponent />
}

export default App
