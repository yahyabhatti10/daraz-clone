import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Dashboard() {
  const [data, setData] = useState(null)
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  )
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDashboard = async () => {
      let refreshToken = localStorage.getItem('refreshToken')
      let res = await fetch('https://daraz-clone-s79b.onrender.com/dashboard', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      let result = await res.json()
      console.log(result)

      if (res.status === 401 || res.status === 403) {
        const refreshRes = await fetch(
          'https://daraz-clone-s79b.onrender.com/refresh-token',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }),
          }
        )
        console.log('refresh token api called')
        const refreshData = await refreshRes.json()
        console.log(refreshData)
        if (refreshRes.ok && refreshData.accessToken) {
          localStorage.setItem('accessToken', refreshData.accessToken)
          setAccessToken(refreshData.accessToken)
        } else {
          navigate('/login')
        }
      } else {
        setData(result)
        console.log(data)
      }
    }

    fetchDashboard()
  }, [accessToken])

  if (!data) return <div>Loading...</div>
  return (
    <Container className="mt-4 mb-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>
            Welcome to Dashboard!{' '}
            {data.user.firstName[0].toUpperCase() +
              data.user.firstName.slice(1)}
          </h1>
          <Card>
            <Card.Body>
              <Card.Title>User Info</Card.Title>
              <Card.Text>
                <strong>ID:</strong> {data.user._id}
                <br />
                <strong>Email:</strong> {data.user.email}
                <br />
                <strong>Name:</strong> {data.user.firstName}{' '}
                {data.user?.lastName}
              </Card.Text>
              <Button
                variant="danger"
                onClick={async () => {
                  const refreshToken = localStorage.getItem('refreshToken')
                  try {
                    await fetch(
                      'https://daraz-clone-s79b.onrender.com/logout',
                      {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ refreshToken }),
                      }
                    )
                  } catch (err) {
                    console.error('Logout error:', err.message)
                    console.error('Logout error:', err)
                  }
                  localStorage.removeItem('accessToken')
                  localStorage.removeItem('refreshToken')
                  navigate('/login')
                }}
                className="mt-3"
              >
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
