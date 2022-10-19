import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Componente ({titulo,children}){
  return (
  <div>
  <h1>{titulo}</h1>
  <div>{children}</div>  
</div> 
); 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Componente titulo="Titulo 1"> Hola desde react</Componente> 
);


