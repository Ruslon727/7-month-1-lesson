import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CounterContext } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CounterContext>
      <App />
    </CounterContext>
  </BrowserRouter>
)
