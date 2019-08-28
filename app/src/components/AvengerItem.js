import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Container, Icon, Label, Card, Image, Grid, Menu} from 'semantic-ui-react';
import {PushSpinner, SwishSpinner, GuardSpinner} from 'react-spinners-kit';

import avengers from '../data/avengerInfo';



// mini tiny small medium large big huge massive
const AvengerItem = (props) => {
    console.log('>>>>>>>> ', props);
    const totalAvengers = avengers.length;
    const currentAvenger = props.match.params.id;

    const avenger = avengers.find(e => e.id === currentAvenger);

    return (
        <Container> 

        <Menu>
            <Menu.Item>
            <Button> 
                <Icon name = 'hand point left' />  
                <NavLink to={`/avengers/${parseInt(avenger.id, 10) - 1}`}> Previous Avenger </NavLink>
            </Button>
            </Menu.Item>  

            <Menu.Item>
                <Button> 
                    <NavLink to={`/avengers/${parseInt(avenger.id, 10) + 1}`}> Next Avenger </NavLink>
                    <Icon name = 'hand point right' />  
                </Button>
            </Menu.Item> 
        </Menu>




        <Image src = {avenger.img} size = 'huge' alt = {avenger.name}/>
            <Container style = {{ border: '1px solid deeppink', display: 'flex', margin: '20px', justifyContent: 'space-around'}}>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} >
                    <Label>{avenger.name} </Label>
                    <Image src = {avenger.img} size = 'huge' alt = {avenger.name}/>
                    <Container>{avenger.nickname}</Container>
                </Card>
                <Card style = {{ border: '1px solid blue', display: 'flex', justifyContent: 'space-around', margin: '10px'}} > 
                    <Label> {avenger.description} </Label>
                </Card>
            
            </Container>   
            
        </Container>
    )
}

export default AvengerItem;