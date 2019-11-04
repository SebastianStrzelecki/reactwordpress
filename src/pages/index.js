import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container, Row, Col } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import '../index.scss';
import MapLeaflet from '../components/map';
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <Layout section={true}>
    <Container>
      <div className="quotation-block">
      <Row>
        <Col>
        <div className="imageWrapper">
        <img width="300" height="200" src="http://www.piekarniagoszczynski.pl/wp-content/uploads/2018/12/Chleb__1544436680-300x200.jpg" atl="chleb"/>
        </div>
        </Col>
        <Col>
        <div className="text-block">
          <h2>Jesteśmy wierni tradycji od trzech pokoleń.</h2>
          <h3>Pieczenie to nasza pasja.</h3>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
    <Container fluid={true}>
      <Row noGutters>
        <Col></Col>
        <Col>
        <Fade right>
        <div className="about-us">
    
        <h2>O nas</h2>
        <div className="about-text">
        <p>
        Piekarnia została założona w 1954 roku przez Mieczysława Goszczyńskiego w Warszawie. Obecnie produkujemy przeszło 50 rodzajów pieczywa z wysokiej jakości surowców. Zatrudniamy 30 pracowników i szkolimy uczniów. Zaopatrujemy w nasze wyroby ponad 50 stałych odbiorców…
        </p>
        </div>
        <Link className="link" to="about">więcej</Link>
        </div>
        </Fade>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row >
        <Col xs={12} className="auto">
          <div className="head">
          <h1>Co nas wyróżnia</h1>
          </div>
        </Col>
        <Col>
          <div className="single">
          <img src="http://www.piekarniagoszczynski.pl/wp-content/uploads/2018/12/icons8-historical-50.png" alt="icon"/>
            <p>Jesteśmy wierni tradycyjnym przepisom od 3 pokoleń</p>
          </div>
        </Col>
        <Col>
        <div className="single">
          <img src="http://www.piekarniagoszczynski.pl/wp-content/uploads/2018/12/icons8-bread-50.png" alt="icon"/>
            <p>Produkujemy ponad 50 rodzajów pieczywa</p>
          </div>
        </Col>
        <Col>
        <div className="single">
        <img src="http://www.piekarniagoszczynski.pl/wp-content/uploads/2018/12/icons8-gingerbread-house-50.png" alt="icon"/>
            <p>Znamy sekret wielofazowej fermentacji kwasowej i drożdżowej</p>
          </div>
        </Col>
        <Col>
        <div className="single">
        <img src="http://www.piekarniagoszczynski.pl/wp-content/uploads/2018/12/icons8-user-groups-50.png" alt="icon"/>
            <p>Zaufało nam ponad 50 stałych odbiorców i tysiące klientów
</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid={true}>
      <Row>
    <Col xs={12} className="auto">
          <div className="head">
          <h1>Zapoznaj się z naszymi produktami</h1>
          </div>
        </Col>
        </Row>
    <Block 
    title="CHLEBY I BUŁKI" 
    text={`W naszej ofercie znajdują się chleby i 
    bułki wytwarzane na podstawie tradycyjnych receptur, jednak z nutą nowoczesności.
     Posiadamy produkty różnego rodzaju: pszenne, żytnie, mieszane, z dodatkiem
      przypraw, owoców, warzyw, a także zbóż i ziaren.`}
      link="offers"
      />
      <Block 
    title="WYROBY CUKIERNICZE" 
    text={`Nasz asortyment zawiera codziennie świeże, przepyszne wypieki: 
    słodkie bułki z dodatkami, domowe ciasta i ciasteczka. Zapraszamy również 
    do zakupu i zamawiania tortów na wyjątkowe okazje.`}
      link="offers"
      />
      <Block 
    title="PIECZYWO DLA GASTRONOMII" 
    text={`Dzięki naszemu elastycznemu podejściu do tradycyjnego wypieku,
     jesteśmy w stanie dopasować produkty do indywidualnych potrzeb Klienta.
      Dostarczamy najwyższej jakości pieczywo i wyroby cukiernicze dla
       supermarketów, hoteli i restauracji oraz odbiorców detalicznych`}
      link="offers"
      />
      </Container>
      <Container fluid={true}>
        <Row noGutters>
          <Col xs={12}>
            <div className="counter">     
              <CounterItem value="3" text="Pokolenia"/>
              <CounterItem value="30" text="Pracowników"/>
              <CounterItem value="7" text="Sklepów firmowych"/>
              <CounterItem value="50" text="Rodzajów pieczywa"/>
              </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
           <MapLeaflet/>
          </Col>
        </Row>
      </Container>
  </Layout>
)

export default IndexPage

const CounterItem = ({value, text}) => (
  <div className="counter-items">
                <div className="counter-value">
                  {value}
                </div>
               <h4>{text}</h4>
   </div>
)

const Block = ({title, text,link}) => (
  <Row noGutters className="mt-5">
    <Col xs={6}></Col>
    <Col xs={6}>
      <div className="products-wrapper">
    <h2>{title}</h2>
    <div className="product-text">
    <p>
   {text}
    </p>
    </div>
    <Link className="product-link" to={link}>więcej</Link>
    </div>
    </Col>
  </Row>
) 