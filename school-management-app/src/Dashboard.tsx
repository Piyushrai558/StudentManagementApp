import axios from "axios";
import React , { Component} from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { render } from "react-dom";
import {
    IoMan, IoSchoolOutline, IoSettings
} from "react-icons/io5";
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle, Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { CreationModel } from "./CreationModel";
import { UpdatioanModal } from "./UpdationModal";

interface MyState {
    isOpen : boolean,
    students : [];
}




export class Dashboard extends Component<{}, MyState>{
    state: MyState = {
        isOpen : false,
        students : [],
    };

    componentDidMount(){
        axios.get('http://localhost:7070/list')
        .then(res => {
            const students = res.data
            
            this.setState({students})
        })
    }

    toggle = () => {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }



    render(){
        return(
            <div>
                <Navbar className="navbar navbar-dark bg-dark">
                    <NavbarBrand className = "text-white">
                        <IoSchoolOutline className="font-size-xxl"/>
                            <span className="font-size-l ml-auto">School Management Application</span>
                    </NavbarBrand>
                </Navbar>
                <Container className="mt-3"> 
                    <Row>
                        <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardTitle tag ="h5">
                                    <IoMan className="font-size-x1"></IoMan>
                                    86 students
                                </CardTitle>
                                <CardSubtitle>this is subtitle </CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    <IoSchoolOutline className="font-size-x1"></IoSchoolOutline>
                                    20 teachers
                                </CardTitle>
                                <CardSubtitle>this is subtitle </CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        </Col>
                        <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    <IoSettings className="font-size-x1"></IoSettings>
                                    11 employee
                                </CardTitle>
                                <CardSubtitle>this is subtitle </CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>    
                        </Col>
                    </Row>
                </Container>

<CreationModel isOpen = {this.state.isOpen} toggle = {this.toggle}></CreationModel>
                
                <Container className="mt-4">
                    <Row>
                        <Col sm ='12'>
                            <Button block color="success" onClick={this.toggle}>
                                <span className="font-size-l">Create new Student</span></Button>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-4">
                    {this.state.students.map(student => renderStudent(student))}                   
                    </Container>

            </div>
        );
    }

}

function renderStudent(st): JSX.Element{
    return (
        <Row>
            <Col sm = '12'>
                <Card body>
                    <CardTitle>
                        <IoMan className="font-size-x1"/>{" "}
                            {st.firstName + " " +st.lastName}
                    </CardTitle>
                <CardBody>
                <Row>
                <Col sm='4' className="text-center">
                    <span className="font-weight-bold">Class</span>
                    <span>Second Year</span>
                </Col>
                <Col sm='4' className="text-center">
                    <span className="font-weight-bold">Age</span>
                    <span>{" :"}{st.age}</span>
                </Col>
                <Col sm='4' className="text-center">
                    <span className="font-weight-bold">Teacher</span>
                    <span>{" :"}{st.teacher}</span>
                </Col>
                </Row>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col sm='6'>
                            <Button block outline color="primary">
                                Edit
                                </Button>
                        </Col>
                        <Col sm='6'>
                        <Button block outline color="danger" onClick={() => deleteStudent(st.id)}>
                                delete 
                        </Button>    
                            </Col>
                    </Row>
                </CardFooter>
                </Card>
            </Col>
        </Row>
    );
    
}
function deleteStudent(id : any): void{
    axios.post(`http://localhost:7070/delete/${id}`)
}



