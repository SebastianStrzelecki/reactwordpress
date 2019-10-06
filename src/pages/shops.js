import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"

const Shops = () => (
    <Layout>
<Container>
    <Row>
        <Col>
        <h1>Nasze lokale</h1>
        Mapa
        </Col>
    </Row>
    <Row>
        <Shop 
            title="Sklep Firmowy - Ul. Obozwa 60"
            tel="799-219-569"
            sat="6:00-19:00"
            weekend="6:00-19:00"
            />
        <Shop
            title="TARGÓWEK - UL. WINCENTEGO 30"
            tel="692-403-235"
            sat="6:00-15:00"
            weekend="5:00-20:00"
            />
        <Shop
            title="SKLEP FIRMOWY UL. BARKOCIŃSKA 7"
            tel="793-822-900"
            sat="6:00-14:00"
            weekend="6:00-19:00"
            />
        <Shop
            title="CARREFOUR REDUTA- STOISKO FIRMOWE"
            sat="8:00-22:00"
            weekend="9:00-22:00"
            />
        <Shop
            title="CARREFOUR ARKADIA- STOISKO FIRMOWE"
            sat="8:00-22:00"
            sun="9:00-22:00"
            />
        <Shop
            title="CARREFOUR TARGÓWEK- STOISKO FIRMOWE"
            sat="8:30-22:30"
            sun="9:00-21:00"
            weekend="8:30-22:00"
            />
        <Shop
            title="PRAGA - PASAŻ HANDL.DWORZEC WILEŃSKI PAW.NR 19"
            tel="784-692-461"
            weekend="5:00-19:00"
            />                     
    </Row>
</Container>
</Layout>
)

export default Shops

const Shop = ({title,tel=false, weekend="8:30-22:00", sat="Nieczynne", sun="Nieczynne"}) => (
        <Col xs={4}>
        <div className="shop">
            <h2 className="shop-title">{title}</h2>
            <div class="shop-info">
               {tel ? <p><strong>Tel:</strong> {tel}</p> : null}
                <h3 className="shop-info__opening">Godziny Otwarcia</h3>
                <p>Pon-Pt: {weekend}</p>
                <p>Sobota: {sat}</p>
                <p>Niedziela: {sun}</p>
            </div>
        </div>
        </Col>
)