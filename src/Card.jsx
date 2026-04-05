import React from 'react'

function Card({ title, liked, onToggleLike, bgColor }) {
  return (
    <div style={{ ...styles.card, backgroundColor: bgColor }}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.label}>{liked ? 'Liked' : 'Not Liked'}</p>
      <button style={styles.button} onClick={onToggleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '10px',
    width: '300px',
    flex: '1 1 300px',
    maxWidth: '350px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  title: {
    margin: '0 0 12px 0',
    fontSize: '1.25rem',
    color: '#333',
  },
  label: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '16px',
  },
  button: {
    padding: '10px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#6b9080',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}

export default Card
