import React ,{ useEffect, useState }  from 'react'
import Pagina from '../../components/pagina'
import apiFilmes from '../../services/apiFilmes'
import {Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const index = ({filmes}) => {

  return (
    <Pagina titulo="Filmes">

      <Row md={4}>

      {filmes.map(item => (
        <Col>
        <Card className='mb-3'>
          <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}></Card.Img>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <p>Lançamento: {item.release_date}</p>
            <p>Nota: {item.vote_average}</p>
            <Link href={'/filmes/' + item.id} className='btn btn-danger'>Detalhes</Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>


    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/movie/popular')
  const filmes = resultado.data.results
  return {
    props: {filmes}, // will be passed to the page component as props
  }
}