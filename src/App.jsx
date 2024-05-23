import { useState } from 'react';
import './App.css'

export default function App() {

  const [arregloTareas, setarregloTareas] = useState([])

  const agregarTarea = () => {
    const nuevaTarea = {id: crypto.randomUUID(), tarea: document.querySelector
    ('input').value, completada: false}
    setarregloTareas([nuevaTarea, ...arregloTareas])
  }

  const eliminarTarea = (id) => {
    const nuevoArreglo = arregloTareas.filter( item => item.id != id)
    setarregloTareas(nuevoArreglo)
  }


const actualizarTarea = (id) => {
  const tareaActualizada = arregloTareas.find( item => item.id === id)
  tareaActualizada.completada = !tareaActualizada.completada
  setarregloTareas([...arregloTareas])
  console.log(tareaActualizada)
}


  return(
  <div>
    <h1>Lista de contenidos CRUD</h1>
    <input type='text' />
    <button onClick={agregarTarea}>Agregar Tarea</button>
  <ul>
    {
        arregloTareas.map( item => {
         return <li key={item.id}>
          <p
          onClick={()=> actualizarTarea(item.id)}
          className={item.completada ? 'checada' : '' }
          >{item.tarea}</p>
          <button onClick={() => eliminarTarea(item.id)}>Borrar Tarea</button>
          </li>
        })
      }
    </ul>
  </div>
  )
}