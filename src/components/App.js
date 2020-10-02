import React from 'react'
import Header from './ui/Header'

const App = () => (
  <>
    <div className='App'>
      <Header>
        <h1>This is my header</h1>
      </Header>
      {[...new Array(300)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')}
    </div>
  </>
)

export default App
