// import React from 'react';
import React, { FunctionComponent, useState } from 'react';
  
// const App: React.FC = () => {
const App: FunctionComponent = () => {
  const [ name, setName ] = useState<String>('React')
    
  return (
    <h1>Bonjour, {name} !</h1>
  )
}
  
export default App;