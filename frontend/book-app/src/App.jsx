import React from 'react'
import Book from './components/Book'

const App = () => {
  return (
    <div>
      <Book name='Maths' price='500'/>
      <br></br>
      <Book name='Physics' price='100'/>
      <br></br>
      <Book name='SST' price='300'/>
    </div>
  )
}

export default App