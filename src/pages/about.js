import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../components/layout'

const About = () => (
    <Layout>
    <Container>
        <Row>
            <Col>
            <section>
                <h1>O nas</h1>
                <p>
                Piekarnia została założona w 1954 roku przez Mieczysława Goszczyńskiego w Warszawie przy ul. Motyckiej. Otrzymała nazwę „Goszczyński i Nałęcz”. W prowadzeniu zakładu pomagali synowie: Włodzimierz i Wiesław. Rodzinną tradycję podtrzymał wnuk Mariusz, który do dziś prowadzi firmę rodzinną z bratem Dariuszem. Piastuje jednocześnie funkcje społeczne; jest wiceprezesem Cechu Piekarzy w Warszawie, a także członkiem Komisji Egzaminacyjnej przy Izbie Rzemieślniczej w Warszawie.
                </p>
                <p>
                Wejście Polski do Unii Europejskiej postawiło przed nami nowe wyzwania. Połączyliśmy tradycję z nowoczesnym podejściem do norm unijnych; rozbudowaliśmy i zmodernizowaliśmy nasz zakład, na bieżąco wprowadzamy nowe technologie i asortyment. Obecnie produkujemy przeszło 50 rodzajów pieczywa z wysokiej jakości surowców. Zatrudniamy 30 pracowników i szkolimy uczniów. Zaopatrujemy w nasze wyroby przeszło 50 stałych odbiorców, a także 5 własnych sklepów firmowych.    
                </p>
                <p>
                Naszym najwyższym celem jest zadowolenie Klientów.
                </p>
            </section>
            </Col>
        </Row>
        <Row>
            <Col>
            <h2>50</h2>
            <p>Tyle rodzajów pieczywa produkujemy</p>
            </Col>
            <Col>
            <h2>3</h2>
            <p>Pokolenia – tak długo kultywujemy tradycję</p>
            </Col>
            <Col>
            <h2>1</h2>
            <p>Jakość produktów stawiamy na pierwszym miejscu</p>
            </Col>
        </Row>
    </Container>
    </Layout>
)

export default About