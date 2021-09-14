import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import tableImg from "../assets/table.jpg"
import flowersImg from "../assets/flowers.jpg"


export default class CarouselBox extends Component{
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ tableImg}
                    alt="Table"
                    />
                    <Carousel.Caption>
                        <h3>Table image</h3>
                        <p>lorem ipsum as asva ibajn askbm asi sbaw ass</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ flowersImg}
                    alt="Table"
                    />
                    <Carousel.Caption>
                        <h3>Flowers image</h3>
                        <p>lorem ipsum as asva ibajn askbm asi sbaw ass</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ tableImg}
                    alt="Table"
                    />
                    <Carousel.Caption>
                        <h3>Table image</h3>
                        <p>lorem ipsum as asva ibajn askbm asi sbaw ass</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}