import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'

export default function Category() {
    const {category} = useParams();
    const [images, setImages] = useState([]);
    const API_KEY = ""; // put your API key here, i removed mine.

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://api.pexels.com/v1/search?query=${category}&per_page=30`, {
                    headers: {
                        Authorization: API_KEY,
                    }
                });

                setImages(response.data.photos);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages().then(r => console.log(r));
    }, [category]);

    let element = <><>
        <h2>{category}</h2>
        <Row style={{display: 'flex', justifyContent: 'space-between', flexFlow: 'row wrap'}}>
            {images.map(image => {
                return (
                    <Col sm={8}><img height="250px" width="250px" key={image.id} src={image.src.medium}/></Col>
                );
            })}
        </Row>
    </>
    </>;
    return element;
}