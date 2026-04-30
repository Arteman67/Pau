import { useState } from 'react'
import './Register.css'

function Register({ navigate, login }) {
  const [role, setRole] = useState('tipster')
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleRegister = () => {
    if (!name || !email || !pass) { alert('Rellena todos los campos'); return }
    login({ name, user, email, role })
  }

  return (
    <div className="register-page">

      <nav className="register-nav">
        <div className="register-logo" onClick={() => navigate('landing')}>
          FindYour<span>Bet</span>
        </div>
      </nav>

      <div className="register-wrapper">
        <div className="register-box">

          <div className="register-box-logo">FindYour<span>Bet</span></div>
          <div className="register-subtitle">Crea tu cuenta — es gratis</div>

          <div className="role-selector">
            {[
              { id: 'tipster', icon: '📊', name: 'Tipster', desc: 'Publico apuestas' },
              { id: 'bettor', icon: '🔍', name: 'Apostador', desc: 'Busco tipsters' },
            ].map(r => (
              <div
                key={r.id}
                className={`role-card ${role === r.id ? 'selected' : ''}`}
                onClick={() => setRole(r.id)}
              >
                <div className="role-icon">{r.icon}</div>
                <div className="role-name">{r.name}</div>
                <div className="role-desc">{r.desc}</div>
              </div>
            ))}
          </div>

          <div className="form-row">
            <div>
              <label className="form-label">Nombre</label>
              <input type="text" className="form-input" placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label className="form-label">Usuario</label>
              <input type="text" className="form-input" placeholder="@usuario" value={user} onChange={e => setUser(e.target.value)} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-input" placeholder="Mínimo 8 caracteres" value={pass} onChange={e => setPass(e.target.value)} />
          </div>

          <button className="btn-submit" onClick={handleRegister}>
            Crear cuenta
          </button>

          <div className="auth-switch">
            ¿Ya tienes cuenta?{' '}
            <a onClick={() => navigate('login')}>Inicia sesión</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register