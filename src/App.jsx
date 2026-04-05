import { useState } from 'react'
import Card from './Card'

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: 'React is Awesome', liked: false, bgColor: '#f0e6d3' },
    { id: 2, title: 'JavaScript is Fun', liked: false, bgColor: '#d4e6f1' },
    { id: 3, title: 'CSS is Powerful', liked: false, bgColor: '#d5f5e3' },
    { id: 4, title: 'Node.js is Versatile', liked: false, bgColor: '#f5d5e0' },
    { id: 5, title: 'TypeScript is Safe', liked: false, bgColor: '#e8daef' },
    { id: 6, title: 'HTML is Essential', liked: false, bgColor: '#fdebd0' },
  ])

  const toggleLike = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, liked: !card.liked } : card
      )
    )
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Cards</h1>
      <div style={styles.cardContainer}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            liked={card.liked}
            bgColor={card.bgColor}
            onToggleLike={() => toggleLike(card.id)}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
}

export default App
