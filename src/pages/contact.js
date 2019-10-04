import React from "react"

import Layout from "../components/layout"
import { Container, Row, Col } from 'reactstrap';

const Contact = () => (
  <Layout>
   <Container>
        <Row>
          <Col>
          <h1>Kontakt</h1>
<p>Jeśli masz pytania, komentarze lub sugestie dotyczące Piekarni i naszych produktów, wypełnij formularz kontaktowy. Dołożymy wszelkich starań, aby odpowiedzieć na Twoje zapytanie w ciągu jednego dnia roboczego.</p>

<p>Godziny przyjmowania zamówień.</p>
<p>pon – pt</p>
<p>8:00 – 16:00</p>
<p>(22) 679-33-89 / 606-127-877</p>

<p>Jeśli jesteś firmą lub małym przedsiębiorstwem i chciałbyś kupić u nas, skontaktuj się z nami:</p>
</Col>
          <Col>
          <h1>Dane kontaktowe</h1>
          <div>
              <h2>Telefon:</h2>
              <p>(22) 679-33-89 / 606-127-877</p>
          </div>
          <div>
              <h2>E-mail:</h2>
              <p>biuro@piekarniagoszczynski.pl</p>
          </div>
          <div>
              <h2>Adres:</h2>
              <p>Piekarnia M. Gosczyński, D. Gosczyński,
ul. Rogowska 8
03-521 Warszawa</p>
          </div>
</Col>
          </Row>
          </Container>
  </Layout>
)

export default Contact
