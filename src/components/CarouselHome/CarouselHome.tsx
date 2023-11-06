import { Carousel } from "react-bootstrap";
export function CarrouselHome() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="container mt-4">
                <Carousel fade data-bs-theme="dark">
                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '60rem', objectFit: 'cover' }}
                            src="src/assets/mcf1.jpg" alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Mclaren f1</h1>

                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '950px', objectFit: 'cover' }}
                            src="src/assets/mc765lt.jpg" alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Mclaren 765LT</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="d-flex justify-content-center align-items-center">
                        <img
                            style={{ display: 'flex', height: '500px', width: '950px', objectFit: 'cover' }}
                            src="src/assets/mcp1.jpg" alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'white' }}>Mclaren p1</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>);

}