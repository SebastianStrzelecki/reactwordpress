import React, { useState } from 'react'
import Layout from '../components/layout'
import { Container, Row, Col, Collapse } from 'reactstrap'
import { graphql, StaticQuery  } from "gatsby"

const Offers = () => (
    <Layout>
        <div>
            <SectionOffer 
            header={"Chleby i bułki"}
            text={`W naszej ofercie znajdują się chleby i bułki wytwarzane na podstawie tradycyjnych receptur, jednak z nutą nowoczesności. Posiadamy produkty różnego rodzaju: pszenne, żytnie, mieszane, z dodatkiem przypraw, owoców, warzyw, a także zbóż i ziaren.

                Przekąska Beszamel
                Chleb Pradawny
                Chleb staropolski z dynią
                Bułka żytnia
                Bułka Szefa
                Chleb Burak
                Chleb Kresowy
                Pieczywo z mąki żytniej razowej, które swój niepowtarzalny smak zawdzięcza procesowi długiego rozrostu i pieczenia,oraz dodaniu miodu wielokwiatowego i słodu żytniego.
                
                Chleb Jaglany
                Chleb pszenno żytni na naturalnym zakwasie z dodatkiem kaszy jaglanej oraz nasion szałwii hiszpańskiej. Jagły to najstarsza znana kasza. Ma mało skrobi, za to dużo łatwo przyswajalnego białka. Wyróżnia się najwyższą zawartością witamin z grupy B: B1, (tiaminy), B2 (ryboflawiny) i B6 (pirydoksyny) oraz żelaza i miedzi.
                
                Chleb Gryczany`
                }
            />
            <SectionOffer 
            header={"Wyroby cukiernicze"}
            text={`Nasz asortyment zawiera codziennie świeże, przepyszne wypieki: słodkie bułki z dodatkami, domowe ciasta i ciasteczka. Zapraszamy również do zakupu i zamawiania tortów na wyjątkowe okazje.`
                }
            />
            <SectionOffer 
            header={"Pieczywo dla gastronomii"}
            text={`Dzięki naszemu elastycznemu podejściu do tradycyjnego wypieku, jesteśmy w stanie dopasować produkty do indywidualnych potrzeb Klienta. Dostarczamy najwyższej jakości pieczywo i wyroby cukiernicze dla supermarketów, hoteli i restauracji oraz odbiorców detalicznych.`
                }
            />
        </div>
    </Layout>
)

export default Offers

          const getPost = graphql`
          query Pieczywo {
            allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Pieczywo"}}}}) {
              edges {
                node {
                  id
                  content
                  title
                }
              }
            }
          }
      `
      const SectionOffer = ({header,text}) => {
        const [collapse, setCollapse] = useState(false);
        const toggle = () => setCollapse(!collapse);
          return(
              <>
              <Container fluid={true}>
    <Row noGutters className="mt-5">
      <Col xs={6}>

          </Col>
          <Col xs={6}>
            <div className="offer">
                <div className="offer-text">
                <h2>{header}</h2>
                <p>{text}</p>
                </div>
                <button className="offer-button" onClick={toggle} >Zobacz produkty</button>    
            </div>
          </Col>
    </Row>
    </Container>
              <StaticQuery
              query={getPost}
              render={data => {
                  return(
                    <Container>
                    <Row className="mt-5">
                        {data.allWordpressPost.edges.map(({node})=>
                        <Col xs={12} md={6} lg={4} key={node.id}>
                        <Collapse isOpen={collapse}>
                            <div>
                            <figure>
                           <img src="../html/pic_trulli.jpg"/>
                            <figcaption>{node.title}</figcaption>
                               </figure>
                            </div>
                            </Collapse>
                        </Col>)}
                    </Row>
                </Container>
                  )
              }}></StaticQuery></>
          )
      }

          

