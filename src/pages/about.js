import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../components/layout'

const About = () => (
    <Layout section={true}>
    <Container fluid={true}>
        <Row>
            <Col xs={12}>
            <section className="about">
                <div className="about-wrapper">
                <h1 className="about-wrapper__title">O nas</h1>
                <p className="about-wrapper__text">
                Piekarnia została założona w 1954 roku przez Mieczysława Goszczyńskiego w Warszawie przy ul. Motyckiej. Otrzymała nazwę „Goszczyński i Nałęcz”. W prowadzeniu zakładu pomagali synowie: Włodzimierz i Wiesław. Rodzinną tradycję podtrzymał wnuk Mariusz, który do dziś prowadzi firmę rodzinną z bratem Dariuszem. Piastuje jednocześnie funkcje społeczne; jest wiceprezesem Cechu Piekarzy w Warszawie, a także członkiem Komisji Egzaminacyjnej przy Izbie Rzemieślniczej w Warszawie.
                </p>
                <p className="about-wrapper__text">
                Wejście Polski do Unii Europejskiej postawiło przed nami nowe wyzwania. Połączyliśmy tradycję z nowoczesnym podejściem do norm unijnych; rozbudowaliśmy i zmodernizowaliśmy nasz zakład, na bieżąco wprowadzamy nowe technologie i asortyment. Obecnie produkujemy przeszło 50 rodzajów pieczywa z wysokiej jakości surowców. Zatrudniamy 30 pracowników i szkolimy uczniów. Zaopatrujemy w nasze wyroby przeszło 50 stałych odbiorców, a także 5 własnych sklepów firmowych.    
                </p>
                <p className="about-wrapper__text">
                Naszym najwyższym celem jest zadowolenie Klientów.
                </p>
                </div>
            </section>
            <div className="separator"></div>
            </Col>
        </Row>
        </Container>
        <Container>
        <Row>
            <Counter
            title="50"
            text="Tyle rodzajów pieczywa produkujemy"
            />
            <Counter
            title="3"
            text="Pokolenia – tak długo kultywujemy tradycję"
            />
            <Counter
            title="1"
            text="Jakość produktów stawiamy na pierwszym miejscu"
            />
        </Row>
    </Container>
    </Layout>
)

export default About

const Counter = ({title, text}) => (
    <Col>
        <div className="counter-about">
            <h2 className="counter-title">{title}</h2>
            <p>{text}</p>
        </div>
    </Col>
)