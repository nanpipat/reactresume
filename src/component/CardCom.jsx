import React, { Component } from 'react';

import { Link, Element, scroller } from 'react-scroll';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';



class CardCom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Card>
                    <CardImg top width="100%" src={this.props.imgurl} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                        <CardText>{this.props.text}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

        )
    }

}

export default CardCom;