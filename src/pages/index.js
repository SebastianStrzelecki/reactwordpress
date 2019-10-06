import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container, Row, Col } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import '../index.scss';

const IndexPage = () => (
  <Layout section={true}>
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h2>Jesteśmy wierni tradycji od trzech pokoleń.</h2>
          <h3>Pieczenie to nasza pasja.</h3>
        </Col>
      </Row>
    </Container>
    <Container fluid={true}>
      <Row noGutters>
        <Col></Col>
        <Col>
        <h2>O nas</h2>
        <p>
        Piekarnia została założona w 1954 roku przez Mieczysława Goszczyńskiego w Warszawie. Obecnie produkujemy przeszło 50 rodzajów pieczywa z wysokiej jakości surowców. Zatrudniamy 30 pracowników i szkolimy uczniów. Zaopatrujemy w nasze wyroby ponad 50 stałych odbiorców…
        </p>
        <Link to="about">więcej</Link>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12}></Col>
        <Col>
          <div>
            <p>Jesteśmy wierni tradycyjnym przepisom od 3 pokoleń</p>
          </div>
        </Col>
        <Col>
          <div>
            <p>Produkujemy ponad 50 rodzajów pieczywa</p>
          </div>
        </Col>
        <Col>
        <div>
            <p>Znamy sekret wielofazowej fermentacji kwasowej i drożdżowej</p>
          </div>
        </Col>
        <Col>
        <div>
            <p>Zaufało nam ponad 50 stałych odbiorców i tysiące klientów
</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Block t/>
  </Layout>
)

export default IndexPage

const Block = ({title, text,link}) => (
  <>
    <Col></Col>
    <Col>
    <h2>{title}</h2>
    <p>
   {text}
    </p>
    <Link to={link}>więcej</Link>
    </Col>
  </>
) 