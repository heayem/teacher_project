import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneEdit, AiFillDelete, AiFillFolderAdd } from 'react-icons/ai'
import './courescreen.css'
import Table from 'react-bootstrap/Table';

const Coursescreen = () => {

    const [course, setCouse] = useState([]);
    const [txt, setTxt] = useState({
        name: "",
        category_id: ""
    })
    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        axios({
            url: "https://demo-node.cleverapps.io/api/course",
            data: {},
            method: "GET"
        }).then(res => {
            var data = res.data
            setCouse(data.list)
            console.log(course)
        })
    }


    const remove = (course_id) => {
        var body = {
            "course_id": course_id
        }
        axios({
            url: "https://demo-intern.cleverapps.io/api/category",
            method: "DElETE",
            data: body,
        }).then(res => {
            if (!res.error) {
                alert("Succes!")
                getdata();
            } else {
                alert("false")
            }

        })
    }

    // const handlesearch=(event)=>{
    //     setTxt({
    //         ...txt,
    //         [event.target.name]:event.target.value
    //     })
    //     axios({
    //         url: "https://demo-node.cleverapps.io/api/course",
    //         data: txt,
    //         method: "POST"
    //     }).then(res => {
    //         if(!res.error){
    //             var data = res.data
    //             setCouse(data.list)
    //         }
    //     })
    // }
    return (
        <div>
            <Container fluid='xl'>
                <Row className='Top'>
                    <Col xl='3' sm='12'>
                        <h1> Brand name </h1>


                    </Col>
                    <Col xl='8' sm='8'>
                        {/* <input onChange={handlesearch} name='name'   type='text' placeholder='Search...name' />
                        <input onChange={handlesearch} name='category_id'   type='text' placeholder='Search...category' /> */}
                    </Col>
                    <Col xl='1' sm='4'>
                        <Link to='/courseformscreen/'>
                            <button style={{ fontSize: "x-large" }}><AiFillFolderAdd /></button>
                        </Link>

                    </Col>

                </Row>
                <hr />
                <Row>
                    <Col xl='12' sm='12' className='course'>
                        <Table responsive >
                            <thead >
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Full-Price</th>
                                    <th>Status</th>
                                    <th>create_at</th>
                                    <th>category_id</th>
                                    <th>category_name</th>
                                    <th>Action</th>

                                </tr>


                            </thead>
                            <tbody>
                                {course.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.course_id}</td>
                                            <td >{item.name}</td>
                                            <td>{item.full_price}</td>
                                            <td>{item.status == 1 ? "Active" : "Disable"}</td>
                                            <td>{item.create_at}</td>
                                            <td>{item.category_id}</td>
                                            <td>{item.category_name}</td>
                                            <td>
                                                <Link to={'/courseformscreen/' + item.course_id}><button style={{ color: "green" }}><AiTwotoneEdit /></button></Link>
                                                <button onClick={() => remove(item.course_id)} style={{ color: "red" }}><AiFillDelete /></button>
                                            </td>


                                        </tr>

                                    )
                                })}

                            </tbody>
                        </Table >
                        <div>

                        </div>
                    </Col>
                </Row>




            </Container>




        </div>
    )
}
export default Coursescreen;