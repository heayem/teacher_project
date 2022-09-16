import './categoryformscreen.css';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Categoryscreen = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [obj, setObj] = useState({
        category_id: params.id,
        create_at: "",
        image: "",
        name: "",
        parent: Math.floor(Math.random() * 101)+1,
        sort_order:Math.floor(Math.random() * 101),
        status: 0,
        update_at: null
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
                url: "https://demo-intern.cleverapps.io/api/category/" + params.id,
                data: {},
                method: "GET",
            }).then(res => {
                var data = res.data;
                setObj(data.list[0])
                // console.log(data)
                console.log(obj);
            })
        }

    }, [params.id]);

    const Update = () => {

        const method = obj.category_id !== undefined ? "PUT" : "POST"
        axios({
            url: "https://demo-intern.cleverapps.io/api/category",
            data:obj,
            method:method
        }).then(res => {
            var respone = res.data;
            console.log(respone);
            navigate("/categoryscreen");
        })
    }


    return (
        <div  className='Container'>
            <Container fluid='xl'>
                <Row>
                    <Col>
                    <h1>
                Brand name
                </h1>
            <hr /></Col>
                </Row>
            <Row>
                <Col>
                <div className="form-category">
                <h1>Category</h1>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={obj.name}
                    onChange={handleGetData}
                />
                <label>img url</label>
                <input
                    type="text"
                    name='image'
                    value={obj.image}
                    onChange={handleGetData}
                />
                <label>Short order </label>
                <input
                    type="text"
                    name='sort_oder'
                    value={obj.category_id!==undefined ? obj.sort_order : Math.floor(Math.random() * 10)+1}
                    onChange={handleGetData}
                />{ obj.category_id !== undefined ?
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
            : <></> } <br/>
                <button onClick={Update} style={{backgroundColor:"green"}}>{obj.category_id!==undefined ? "Update" : "Save"}</button>


            </div>

                
                </Col>
            </Row>
            




            </Container>
        </div>


    )
}

export default Categoryscreen;