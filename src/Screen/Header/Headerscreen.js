import './Headerscreen.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { AiFillHome,AiOutlineLogout } from 'react-icons/ai';

const Headerscreen = () => {
    const username= localStorage.getItem("username")
    const is_login= localStorage.getItem("is_login")
    console.log(is_login);
    const handlelogout=()=>{
        localStorage.clear();
        window.location=("/loginscreen");
    }
   
    
    return (
        <Container fluid style={{ backgroundColor: "black", padding: 10 }} >
            <Container fluid="xl" className='Header '  >
                {is_login =="1" ?
                    <>
                        <div className='Header-part1'>
                            <Link className='Header-item' to='/'> <AiFillHome /> Home </Link>
                            <Link className='Header-item' to='/course'>Courese</Link>
                            <Link className='Header-item' to='/categoryscreen'>category</Link>
                        </div>
                        <div className='Header-item' onClick={handlelogout} to='/loginscreen'><AiOutlineLogout/> </div>
                    </>
                    :
                    <>
                        <div className='Header-part1'>
                            <Link className='Header-item' to='/'> <AiFillHome /> Home</Link>
                            <Link className='Header-item' to='/loginscreen'>Login</Link>
                            <Link className='Header-item' to='/signupscreen'>singup</Link>
                        </div>
                   
                    </>

                }

            </Container>
        </Container>

    )
}
export default Headerscreen;