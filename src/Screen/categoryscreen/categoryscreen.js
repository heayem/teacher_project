import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import './categoryscreen.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneEdit, AiFillDelete, AiFillFolderAdd } from 'react-icons/ai'
import Table from 'react-bootstrap/Table'

const Category = () => {
    const [List, setList] = useState([])
    useEffect(() => {
        getdata();
    }, []);
    const getdata = () => {
        axios({
            url: "https://demo-intern.cleverapps.io/api/category",
            method: "GET",
            data: {},
        }).then(res => {
            var data = res.data;
            console.log(data)
            setList(data.list)
        })
    }

    const remove = (category_id) => {
        var body = {
            "category_id": category_id
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

    return (
        <div>

            <Container fluid="xl">
                <Row className='Top'>
                    <Col xl='11' sm='6'><h1> Brand name</h1></Col>
                    <Col xl='1' sm='6' className="Top-left">
                        <Link to={"/categoryformscreen/"}><button style={{ fontSize: "x-large" }}><AiFillFolderAdd /></button></Link>
                    </Col>
                </Row>

                <hr />
        <Row>
            <Col xl='12' sm='12'>
                <Table responsive className="category">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name </th>
                            <th>parent</th>
                            <th>image</th>
                            <th>sort_order</th>
                            <th>status</th>
                            <th>create_at</th>
                            <th>update_at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {List.map((item, index) => {
                        return (
                            <tbody>
                                <tr key={index}>
                                    <td>{item.category_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.parent} </td>
                                    <td><img scr={item.image} alt="img" /></td>
                                    <td>{item.sort_order}</td>
                                    <td>{item.status == 1 ? "Active" : "Disable"}</td>
                                    <td>{item.create_at}</td>
                                    <td>{item.update_at == undefined ? "Not yet update" : item.update_at}</td>
                                    <td>
                                        <Link to={"/categoryformscreen/" + item.category_id}><button style={{ color: "green" }}><AiTwotoneEdit /></button></Link>
                                        <button onClick={() => remove(item.category_id)} style={{ color: "red" }}><AiFillDelete /></button>
                                    </td>

                                </tr>
                            </tbody>
                        )
                    })}
                </Table >
            </Col>
        </Row>

            </Container>





        </div>

    )
}
export default Category;