import axios from "axios";
import { Component } from "react";
import { Form, Row, Col, Button, ModalHeader, Modal, ModalBody } from "reactstrap";


type MyProps = {
    isOpen: boolean
    toggle
}

export class CreationModel extends Component<MyProps>{

    handleSubmit = (event) => {

        event.preventDefault()

        const data = new FormData(event.target)

        const student = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            age: data.get("age"),
            teacher: data.get("teacher")
        }

        axios.post("http://localhost:7070/create", student)

        this.props.toggle();

    }

    render() {

        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    Adding New Student
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <label>First Name</label>
                            </Col>
                            <Col>
                                <input id="firstName" name="firstName" type="text" />
                            </Col>
                        </Row>
                        <Row />
                        <Row>
                            <Col>
                                <label>Last Name</label>
                            </Col>
                            <Col>
                                <input id="lastName" name="lastName" type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Age</label>
                            </Col>
                            <Col>
                                <input id="age" name="age" type="number" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>Associated Teacher</label>
                            </Col>
                            <Col>
                                <input id="teacher" name="teacher" type="text" />
                            </Col>
                        </Row>
                        <Button color="primary">
                            Create New Student
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        );

    }

}