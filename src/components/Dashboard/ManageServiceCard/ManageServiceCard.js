import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import './ManageServiceCard.css';

const ManageServiceCard = ({serviceData}) => {

    const handleDeleteBtn=()=>{
        fetch(`http://localhost:3001/deletePackage/${serviceData._id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        }).then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Package Deleted SuccessFully.')
            }
        })
    }

    return (
        <Col className='m-auto pb-4 overflow-hidden' xs={11} sm={10} md={10}>
            <Row className='manageCardDesign'>
                <Col className='p-0 d-flex align-items-center overflow-hidden manageCardHeader' sm={12} md={7}>
                    <img src={serviceData.imgURL} alt=""/>
                    <h4>{serviceData.packageName}</h4>
                </Col>
                <Col className='p-0 p-sm-2 pr-3 d-flex align-items-center justify-content-between' sm={12} md={5}>
                    <h4 className='order-sm-1 order-md-0'>${serviceData.price}</h4>
                    <div className='overflow-hidden'>
                        <Button variant='dark' className='mr-3' style={{textAlign:'end'}}>
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button onClick={handleDeleteBtn} variant='danger' style={{textAlign:'end'}}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                    </div>
                </Col>
                <Col className='p-0 m-0 overflow-hidden' md={12}>
                    <Accordion style={{border:'0',background:'none'}} className='w-100'>
                        <Card className='w-100'>
                            <Accordion.Toggle style={{cursor:'pointer'}} as={Card.Header} eventKey="0">
                            See Package Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>{serviceData.packageDetail}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Col>
    );
};

export default ManageServiceCard;