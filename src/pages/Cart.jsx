import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slice/cartSlice';
function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
  //console.log(cartArray);
const dispatch=useDispatch()

  return (
    <div style={{marginTop:'100px'}}>
    
      <div className='row w-100'>
      {cartArray?.length>0?
         <div className='col-lg-6 m-5'>
         <table className='table shadow border'>
           <thead>
             <tr>
               <th>#</th>
               <th>Product</th>
               <th>Image</th>
               <th>Price</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {cartArray?.map((item,index)=>(<tr>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img style={{width:'100px',height:'100px'}} src={item.image} alt='no image'></img></td>
              <td>₹{item.price}</td>
              <td><Button onClick={()=>dispatch(removeFromCart(item.id))}variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
             </tr>))
              
             }
           </tbody>
         </table>
       </div>:<div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" height={'300px'} alt='no image'/>
            <h3 className='text-danger fw-bolder'>Your cart is empty</h3>
            <button className='btn btn-success mt-2'><Link style={{textDecoration:'none',color:'white'}} to={'/'}><i style={{marginRight:'10px'}}class="fa-solid fa-arrow-left"></i>Back to home</Link></button>


          </div>
      }
       
        </div>
      </div>
  )
}

export default Cart