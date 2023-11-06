import Card from 'react-bootstrap/Card';
import { Footer } from './Footer';
export function AboutUs() {
    return (
        <>
            <div className="container" style={{ marginTop: '2rem' }}>
                <div className="justify-content-md-center row">
                    <div className="col-sm-12 col-md-9">
                        <h3>Sobre nosotros</h3>
                        <p>McLaren Racing Limited, conocida comúnmente como McLaren, ​ es una escudería británica de automovilismo con sede en Woking. Fue fundada en 1963 por el piloto neozelandés Bruce McLaren, en sociedad con los estadounidenses Teddy Mayer y Tyler Alexander.</p>
                    </div>
                    <Cards titulo="Mclaren P1"
                        cuerpo=" Velocidad maxima 350km/h, consumo medio 8,3l/ 100km, traccion trasera, frenos ventilados ceramicos, 916CV y 900Nm (Motor de combustion), 179 CV (Motor electrico), Aceleraccion 0-100 2,8s, Automatico de 7 velocidades doble embrague."
                        url='src/assets/mcp1.jpg'
                    />
                    <Cards titulo="Mclaren 765LT"
                        cuerpo=" Velocidad maxima 330km/h, consumo medio 12,3l/ 100km, traccion trasera, frenos ventilados ceramicos, 765CV y 800Nm (Motor de combustion), Aceleraccion 0-100 2,8s, Automatico de 7 velocidades doble embrague "
                        url='src/assets/mc765lt.jpg'
                    />
                    <Cards titulo="Mclaren F1"
                        cuerpo=" Vehiculo de 1993, V12 de 627CV y 652NM, Caja manual de 6 velocidades, consumo 12,6L/100, Aciento central "
                        url='src/assets/1994-mclaren-f1.jpg'
                    />


                </div>
            </div>
        </>
    )


}
function Cards(props: { titulo: String; cuerpo: String; url: string }) {
    const { titulo, cuerpo, url } = props;
    return (
        <div className="col-sm-12 col-md-auto d-flex justify-content-center align-items-center col-auto">
            <Card style={{ width: '18rem', height: '26rem', margin: '1rem' }}>
                <Card.Img variant="center" src={url} style={{ margin: '0.5rem', maxHeight: '160px' }} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {cuerpo}
                    </Card.Text>
                </Card.Body>
            </Card></div>

    )
}