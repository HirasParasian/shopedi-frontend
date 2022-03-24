import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import Image from 'next/image'
import { BsCheck } from 'react-icons/bs';
import styles from './wishlist.module.css';
import CButton from "../../components/CButton";

const Index = () => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dataProduct = [
    { pict: '/images/Mask.png', desc: 'Eugene Accent Table 18.9 inches Espresso', stock: 'in stock', price: 765 },
    { pict: '/images/Mask.png', desc: 'Eugene Accent Table 18.9 inches Espresso', stock: 'in stock', price: 765 },
    { pict: '/images/Mask.png', desc: 'Eugene Accent Table 18.9 inches Espresso', stock: 'in stock', price: 765 }
  ]
  return (
    <Layout>
      <Head>
        <title>Wishlist | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Profile', href: '/profile' }, { name: 'Wishlist', active: true }]} />
        </Container>
        <h1 className={'text-center pt-5'}>Wishlist</h1>
        <div className={'text-center pb-5'}>Pay and get your ordered items</div>
      </div>
      <Container className='mt-5'>
        <Row className="border-bottom border-top py-3 fw-bold d-none d-lg-flex">
          <Col lg={4}>
            Product
          </Col>
          <Col lg={4}>
            <span className="ms-0 ms-lg-5">Stock Status</span>
          </Col>
          <Col lg={4}>
            <span className="ms-0 ms-lg-5">Price</span>
          </Col>
        </Row>
        <Row className='pb-5 pt-2'>
          <Col xs={12} md={12}>
            {dataProduct.map((data, index) => {
              return (
                <Row key={index} className='my-5'>
                  <Col xs={12} sm={6} lg={4} className='d-flex flex-row align-items-center'>
                    <Image src={data.pict} alt='product' width={100} height={100} />
                    <span className="ps-4">{data.desc}</span>
                  </Col>
                  <Col xs={12} sm={6} lg={4} className='my-auto'>
                    <div className="my-3 my-lg-0 ms-0 ms-lg-5">
                      <span className={styles.pill}><BsCheck size={20} /></span> {data.stock} Stock
                    </div>
                  </Col>
                  <Col xs={12} sm={12} lg={4} className='my-auto'>
                    <span className="fw-bold ms-0 ms-lg-5">{formatter.format(data.price)}</span>
                    <CButton classStyle='px-5 py-2 ms-5' color='dark'>Add To Cart</CButton>
                  </Col>
                </Row>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Index
