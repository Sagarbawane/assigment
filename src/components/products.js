import React from "react";
import data from '../data/data.json'


export const Product = (props) => {
    const handleClick = (id) => {
        props.history.push(`/productDescription/${id}`);
    }

    return (
        <div className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                    <h2 >Products</h2>
                </div>
                <div className='row'>
                    {data.Products
                        ? data.Products.map((ele, i) => (
                            <div key={`${ele.title}-${i}`} className='col-xs-12 col-md-4' >
                                {' '}
                                <img src={ele.image} alt='product' />
                                <h3>{ele.name}</h3>
                                <h4>{ele.price}</h4>
                                <button  class="btn btn-danger" onClick={() => {
                                    handleClick(ele.id)
                                }} >view details</button>
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    )
}
