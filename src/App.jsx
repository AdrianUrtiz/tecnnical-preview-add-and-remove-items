import { useState } from 'react'

const INITIAL_ITEMS = [
  { id: crypto.randomUUID(), text: 'Ir al mercado' },
  { id: crypto.randomUUID(), text: 'Ir al hospital' },
  { id: crypto.randomUUID(), text: 'Ir a la tienda' },
]

function App() {
  const [item, setItem] = useState(INITIAL_ITEMS)

  function onSave(e) {
    e.preventDefault()
    const newItem = { id: crypto.randomUUID(), text: e.target.item.value }
    setItem([...item, newItem])
    e.target.item.value = ''
  }

  function handleDelete(id) {
    setItem(item.filter((item) => item.id !== id))
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        placeItems: 'center',
        width: '100%',
        maxWidth: 800,
      }}>
      <h1>Añadir y eliminar elementos</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        onSubmit={onSave}>
        <input name='item' type='text' placeholder='Elemento a añadir' />
        <button type='submit'>Añadir a la lista</button>
      </form>
      {item && (
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 10,
            width: '100%',
          }}>
          {item.map((item) => (
            <li
              key={item.id}
              style={{
                backgroundColor: '#ccc',
                padding: 10,
                textDecoration: 'none',
                borderRadius: 6,
                marginBottom: 10,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '70%',
                color: '#222',
                textAlign: 'center',
                cursor: 'pointer',
              }}>
              <span>{item.text}</span>
              <button onClick={() => handleDelete(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
