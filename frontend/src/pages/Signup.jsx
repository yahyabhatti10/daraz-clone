import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (
      !form.firstName ||
      form.firstName.trim().length < 2 ||
      form.firstName.trim().length > 10
    ) {
      setError(
        'First name must be at least 3 characters long or under 10 characters'
      )
      return
    }
    if (
      !form.lastName ||
      form.lastName.trim().length < 2 ||
      form.lastName.trim().length > 10
    ) {
      setError(
        'Last name must be at least 3 characters long or under 10 characters'
      )
      return
    }
    if (
      !form.password ||
      form.password.length < 6 ||
      form.password.length > 15
    ) {
      setError(
        'Password must be at least 6 characters long or under 15 characters'
      )
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await fetch(
        'https://daraz-clone-s79b.onrender.com/signup',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
          }),
        }
      )
      const data = await response.json()
      if (response.ok) {
        alert('Signup successful! Please log in.')
        navigate('/login')
        // console.log('Signup successful:')
      } else {
        setError(data.message || 'Signup failed')
      }
    } catch (err) {
      setError('Server error')
      console.error('Signup error:', err)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '70vh' }}
    >
      <Card style={{ width: '22rem', padding: '1rem' }}>
        <Card.Body>
          <Card.Title className="mb-3 text-center">Signup</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
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
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Signup
