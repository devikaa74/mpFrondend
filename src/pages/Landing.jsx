import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import feature1Img from '../assets/feature1.jpeg'
import feature2mg from '../assets/feature2.jpeg'
import feature3Img from '../assets/feature3.png'



const Landing = () => {
  return (
    <div style={{ paddingTop: '80px' }} className='container'>
      {/* Landing head */}
      <div className="row align-items-center">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, consequatur? Expedita beatae amet consequuntur optio id? Ipsam sapiente, quia provident harum nulla similique, excepturi magnam ut voluptatem doloribus aliquid ullam.</p>
            <Link to={'/home'} className='btn btn-info'>Get Started!!!</Link>

          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img className='img-fluid ms-5 mt-3' src={landingImg} alt="" />
          </div>
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={feature1Img} />
              <Card.Body>
                <Card.Text>
                  <h4>Managing Videos</h4>
                  <p>Users can upload, view and remove the vedios</p>
                </Card.Text>
              </Card.Body>

            </Card>

          </div>
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={feature2mg} />
              <Card.Body>
                <Card.Text>
                  <h4>Managing Videos</h4>
                  <p>Users can upload, view and remove the vedios</p>
                </Card.Text>
              </Card.Body>

            </Card>

          </div>
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={feature3Img} />
              <Card.Body>
                <Card.Text>
                  <h4>Managing History</h4>
                  <p>Users can upload, view and remove the vedios</p>
                </Card.Text>
              </Card.Body>

            </Card>

          </div>

        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur atque exercitationem minima quo omnis similique minus reprehenderit rem pariatur voluptatem provident incidunt sed, nemo laudantium ipsam culpa dolore consequuntur.</p>
          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur atque exercitationem minima quo omnis similique minus reprehenderit rem pariatur voluptatem provident incidunt sed, nemo laudantium ipsam culpa dolore consequuntur.</p>

          <p style={{ textAlign: 'justify' }}> <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur atque exercitationem minima quo omnis similique minus reprehenderit rem pariatur voluptatem provident incidunt sed, nemo laudantium ipsam culpa dolore consequuntur.</p>

        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          {/* <iframe width="497" height="360" src="https://youtu.be/-7LZpC0ReMc" referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe> */}
          <iframe
              width="560"
              height="360"
              src="https://www.youtube.com/embed/-7LZpC0ReMc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

        </div>

      </div>
    </div>
  )
}

export default Landing