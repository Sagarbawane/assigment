import React from "react";
import data from '../data/data.json'
import Swal from "sweetalert2";


export const ProductDescription = (props) => {
const addToCart=()=>{
     Swal.fire({
          title: "Added to cart succesfully",

          icon: "success",
        
        })
}

    const handleClick = () => {
        props.history.push(`/products`);
    }
    const id = props.match.params.id

    return (
        <div id='Products' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2 >Product Description</h2>
                </div>
                <div className='row'>
                    {data.Products
                        ? data.Products.map((ele, i) => {

                            if (ele.id == id) {
                                return (
                                    <>
                                        <div className='col-xs-12 col-md-6' >

                                            <img src={ele.image} alt='productDescription' />
                                        </div>
                                        <div key={`${ele.title}-${i}`} id='productDescription' className='col-xs-12 col-md-6' data-aos="fade-up" data-aos-duration="3000">


                                            <h3>Name:- {ele.name}</h3>
                                            <h4>Price:- {ele.price}</h4>
                                            <h4>Quantity:- {ele.quantity}</h4>
                                            <button onClick={()=>{
                                                addToCart()
                                            }}  class="btn btn-info">Add To Cart</button>  < button class="btn btn-warning" onClick={() => {
                                                handleClick()
                                            }}>Go To Product Section</button>
                                        </div>
                                    </>
                                )
                            }
                            
                        })

                        : 'Loading...'}
                </div>
            </div>
            </div>
       
    )
}
