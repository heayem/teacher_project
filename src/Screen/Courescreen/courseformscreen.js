import './courseformscreen.css';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Courseformscreen = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [obj, setObj] = useState({
        course_id:params.id,
        name: "",
        full_price:0,
        status:1,
        create_at: "",
        category_id:1,
        category_name: ""
    });

    const handleGetData = (event) => {
        setObj({
            ...obj,
            [event.target.name]: event.target.value
        })

    };
    useEffect(() => {
        if (params.id != undefined) {
            axios({
                url: "https://demo-intern.cleverapps.io/api/course/" + params.id,
                data: {},
                method: "GET",
            }).then(res => {
                var data = res.data;
                setObj(data.list[0])
                console.log(obj);
            })
        }

    }, [params.id]);



    const Update = () => {
        const method = obj.category_id !== undefined ? "PUT" : "POST"
        axios({
            url: "https://demo-intern.cleverapps.io/api/course",
            data: obj,
            method: method
        }).then(res => {
            var respone = res.data;
            if (respone.error == true) {
                alert("PLease go to check catgory id")
            } else {

                console.log(respone);
                navigate("/course");
            }

        })
    }


    return (
        <div className='Container'>
            <Container fluid='xl'>
                <Row>
                    <Col>
                        <h1>
                            Brand name
                        </h1>
                        <hr />
                        
                        </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="form-category">
                            <h1>Category</h1>
                            <label>category_id</label>
                            <input
                                type='text'
                                name='category_id'
                                value={obj.category_id}
                                onChange={handleGetData}
                            />
                            <label>name</label>
                            <input
                                type="text"
                                name='name'
                                value={obj.name}
                                onChange={handleGetData}
                            />
                            <label>full_price </label>
                            <input
                                type="text"
                                name='full_price'
                                value={obj.full_price}
                                onChange={handleGetData}
                            />

                            {obj.category_id !== undefined ?
                                <><label>Status</label> <br />
                                    <input
                                        className='status'
                                        type="radio"
                                        name='status'
                                        value={1}
                                        onChange={handleGetData}
                                    /> <label>Active</label>
                                    <input
                                        className='status'
                                        type="radio"
                                        name='status'
                                        value={0}
                                        onChange={handleGetData}
                                    /> <label>Disable</label>
                                </>
                                : <></>} <br />
                            <button onClick={Update} style={{ backgroundColor: "green" }}>Save</button>


                        </div>


                    </Col>
                </Row>





            </Container>
        </div>


    )
}

export default Courseformscreen;