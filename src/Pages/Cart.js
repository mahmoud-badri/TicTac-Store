import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, clear } from '../Redux/Cart-Slice'
import { useEffect } from 'react'
const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);

    console.log(cart)

    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc
    }, 0)

    useEffect(() =>{
        localStorage.setItem("theCart", JSON.stringify(cart))
    }, [])

    return (
        <div className='contaoner mt-5'>
            <h1 style={{ textAlign: 'left', marginLeft: "10px" }}>Welcome to Cart</h1>

            <button style={{ position: 'relative', left: "-850px", width: "100px" }}
                className='btn btn-primary mb-3' onClick={() => (dispatch(clear()))}>Clear Cart</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><img style={{ width: "100px", height: "100px", borderRadius: "5px" }} src={product.images[0]} alt="product" /></td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                            <td><button onClick={() => dispatch(deleteFromCart(product))} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    ))}


                </tbody>
            </table>
                        <h4 style={{textAlign:"left", margin:"3px 3px 50px"}}>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
    )
}

export default Cart