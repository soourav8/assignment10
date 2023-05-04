import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const QNA = () => {
    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
                    <Accordion.Body>
                        The  differences between controlled and uncontrolled components are
                        That controlled components have their state managed by a parent or another component.
                        while uncontrolled components manage their own state internally.
                        Controlled components cannot change their own state directly but rely on events to update their state, whereas uncontrolled components can change their own state directly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                    <Accordion.Body>
                        React JS has an inbuilt feature for validating props data type to make sure that values passed through props are valid. React components have a property called propTypes which is used to setup data type validation.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Tell us the difference between nodejs and express js.</Accordion.Header>
                    <Accordion.Body>
                        The difference between nodeJs and expressJs, nodeJs is a run-time environment for building server-side event-driven i/o application using javascript and expressJs is a framework based on node.js for building web-application using principles and approaches of node.js
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                    Custom hook is a function that allows you to reuse stateful logic across different components. Custom hooks are a way to extract logic from components so that it can be reused in other components, resulting in more maintainable and reusable code. By adding use like react hooks we can create custom hooks.
                    </Accordion.Body>
                </Accordion.Item>
               
            </Accordion>
        </Container>
    );
};

export default QNA;