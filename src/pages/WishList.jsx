import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/slice/wishlistslice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

function WishList() {
  const dispatch=useDispatch()

  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);

  const handlewishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
 
  return (
    <div style={{marginTop:'150px',marginBottom:'50px'}}>
      <Row  className='ms-5 me-3'>
        { wishlistArray?.length>0?
         wishlistArray?.map((item)=>(<Col sm={12} md={6} lg={4} xl={3}  >
          <Card style={{ width: '18rem',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
       <Card.Img variant="top" src={item.image} style={{height:'200px'}} />
       <Card.Body>
         <Card.Title>{item.title.slice(0,20)}...</Card.Title>
         <Card.Text>
          <p>{item.description.slice(0,40)}...</p>
          <p className='fw-bolder'>Price: ₹{item.price}</p>
         </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
             <Button onClick={()=>dispatch(removeFromWishlist(item.id))}variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
             <Button onClick={()=>handlewishlist(item)}variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
        </div>
       </Card.Body>
     </Card>
          </Col>))
          :
          <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" height={'300px'} alt='no image'/>
            <h3 className='text-danger fw-bolder'>Your Wishlist is empty</h3>
            <button className='btn btn-success mt-2'><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i  style={{marginRight:'10px'}}class="fa-solid fa-arrow-left"></i>Back to home</Link></button>


          </div>
          }
        
      </Row>
    </div>
  )
}

export default WishList