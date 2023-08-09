import React from 'react'
import axios from 'axios';
import Layout from './Routes/Layout'

axios.defaults.baseURL = 'https://api.syrysapp.com';

function App() {
  return (
    <div>
     <Layout/>
    </div>
  )
}

export default App
