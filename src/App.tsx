import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
      fontFamily: 'Inter, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '3rem 2.5rem',
        borderRadius: '20px',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.5)'
      }}>
        <div style={{
          width: 64,
          height: 64,
          margin: '0 auto 1.5rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0077cc, #00c6ff)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 26,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(0, 119, 204, 0.4)'
        }}>
          AC
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#222', marginBottom: '1.25rem' }}>
          Arik Chowdhury
        </h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#444' }}>
          Software Engineer based in Toronto, Canada.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#444' }}>
          Specializing Back-end & React Native development.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#444' }}>
          Currently working in fintech, building scalable services, and modernizing legacy platforms.
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
          <a href="mailto:arikc6402@gmail.com" style={{
            color: '#0077cc',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => (e.currentTarget.style.borderBottom = '1px solid #0077cc')}
          onMouseOut={e => (e.currentTarget.style.borderBottom = '1px solid transparent')}
          >
            Contact: arikc6402@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
