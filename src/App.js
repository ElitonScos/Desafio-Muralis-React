import React from 'react'

import './App.css';

function App() {
  
  return (
    
<div>
  <h1>Cadastro de Ingressantes</h1>
    <form>

       <label>
        Nome
       <input />
       </label>

       <label>
        Curso
        <select name='Curso'>
        <option value="">Selecione</option>
        <option value="1">Matematica</option>
        <option value="1"> Letras</option>
        <option value="1">Geografia</option>
        </select>
       
       </label>

       <label>
        Estado
        <select name='Estado'>
        <option value="">Selecione</option>
        <option value="1">São Paulo</option>
        <option value="1">Rio de Janeiro</option>
        <option value="1">Minas Gerais</option>
        </select>
       
       </label>

       <label>
        Cidade
        <select name='Estado'>
        <option value="">Selecione</option>
        <option value="1">Mogi das Cruzes</option>
        <option value="1">Suzano</option>
        <option value="1">Poá</option>
        <option value="1">Angra dos Reis</option>
        <option value="1">Niterói</option>
        <option value="1">Itaboraí</option>
        <option value="1">Belo Horizonte</option>
        <option value="1">Monte Azul</option>
        <option value="1">Muzambinho</option>
        </select>
       
       </label>
       <button1 type='submit'>Voltar</button1>
       <button2 type='submit'>Gravar</button2>
    </form>
  </div>
  );
}

export default App;
