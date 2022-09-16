
import './login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fetchdata } from '../../Helper/Help';
import { useState } from 'react';
const Loginscreen = () => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");
    const handlelogin = () => {
        var datas = {
            "username": Username,
            "password": Password
        }
        fetchdata("api/auth/Login", datas, "POST").then(res => {
            if (res.error==true) {
                setMessage(res.message);
                
            }else{
                localStorage.setItem("is_login",1)
                localStorage.setItem("accessToken", res.accessToken)
                localStorage.setItem("refreshToken", res.refreshToken)
                localStorage.setItem("username", res.username);
                localStorage.setItem("permiision", res.permiision)
                window.location =("/")
            }

            

        })

    }
    return (
        <div>
            <Container fluid="xl">
                <Row>
                    <Col>

                        <h1> Brand name </h1>
                        <p className='color'>{Message}</p>
                    </Col>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        <div className='main-box-1'>
                            <h1>Sign In</h1>
                            <label>Username</label>
                            <input
                                value={Username}
                                onChange={(event) => setUsername(event.target.value)}
                                type="text"
                            />
                            <br />
                            <label>Password</label>
                            <input
                                value={Password}
                                onChange={(event) => setPassword(event.target.value)}
                                type='password'
                            />
                            <p><a>forget password</a> | <a>Sign Up </a> </p>
                            <br />

                            <button onClick={handlelogin} to='/'> Log in </button>
                        </div>
                    </Col>
                </Row>


            </Container>



        </div>
    )
}
export default Loginscreen;