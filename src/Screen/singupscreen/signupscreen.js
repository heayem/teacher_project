import './signupscreen.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useState } from 'react';
import { fetchdata } from '../../Helper/Help';


const Singupscreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const [Message, setMessage] = useState("");

    const handlesingup = () => {
        var item = {
            "username": username,
            "password": password,
            "email": email,
            "tel": tel
        }
        fetchdata("api/auth/createUser", item, "POST").then(res => {
            if (res.error === true) {
                setMessage(res.message);
            } else {
                    setMessage(res.message);
                    alert(Message)
                    window.location = ("/")
            }
        })

    }


    return (
        <div>

            <Container fluid="xl">
                <Row>
                    <Col className='color'>
                        <h1>Brand name</h1>

                    </Col>
                    <hr />
                </Row>

                <Row>
                    <Col>
                        <div className='main-box'>
                            <h1>Sign In</h1>
                            <p>Username</p>
                            <input
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <br />

                            <p>Password</p>
                            <input
                                type='password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <br />
                            <p>Email</p>
                            <input
                                type='email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <br />
                            <p>Telephone </p>
                            <input
                                type='text'
                                value={tel}
                                onChange={(event) => setTel(event.target.value)}
                            />
                            <h4 className='color'>{Message}</h4>
                            <button onClick={handlesingup}> Sign Up </button>
                        </div>
                    </Col>
                </Row>

            </Container>



        </div>
    )
}
export default Singupscreen;