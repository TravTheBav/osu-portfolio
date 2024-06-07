import React, { useState } from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';
import Total from '../components/Total';


function OrderPage() {

    const [total, setTotal] = useState(0);

    return (
        <>
        <h2>Order</h2>
        <article>
            <p>Browse our selection of awesome pet products. Delivery times may vary (3&ndash;5 days US, 10&ndash;15 days international).</p>
            <table>
                <caption>All Products</caption>
                <thead>
                    <tr>
                        <th>company</th>
                        <th>product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, idx) => (
                    <ProductRow product={product} key={idx}/>
                    )) }
                </tbody>
                <tfoot>
                    <th>Total</th>
                    <td colSpan={4}><Total total={total}/></td>
                </tfoot>
            </table>
        </article>
        </> 
    );
}

export default OrderPage;

