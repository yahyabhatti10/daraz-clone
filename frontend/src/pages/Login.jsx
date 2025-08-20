import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/dashboard')
      return
    }
  }, [navigate])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please enter both email and password')
      return
    }

    try {
      const response = await fetch(
        'https://daraz-clone-s79b.onrender.com/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        }
      )
      const data = await response.json()
      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
        navigate('/dashboard')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (err) {
      setError('Server error')
      console.error('Login error:', err)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '50vh' }}
    >
      <Card style={{ width: '22rem', padding: '1rem' }}>
        <Card.Body>
          <Card.Title className="mb-3 text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            {error && (
              <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
            )}
            <Button
              style={{ backgroundColor: '#ff6803ff', border: 'none' }}
              variant="primary"
              type="submit"
              className="w-100"
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login
