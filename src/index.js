import { Amplify } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import awsExports from './aws-exports'
import './index.css'

Amplify.configure(awsExports)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
