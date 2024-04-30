import React from 'react'
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { API_END_POINTS } from '../../../../services';


function BasicPlain({ price }) {
    const BasicPlainPayment = useSelector((state) => state.priceReducer.basic);
    console.log(process.env)
    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51P5lQV2MQoPtL97NbiPXvL5zwITvIpOEUAMjMUKdWNBWLMWaVA6DdHolnhzFWd41xo1GfWnDsZ6BG5BPVAFS8bCD00yP5qUO0B");
        // Convert the price from a string to a number in cents
        const priceCents = parseFloat(BasicPlainPayment.replace('$', '').replace('/mo', '')) * 100;

        const body = {
            products: {
                price: priceCents
            }
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch(API_END_POINTS.STRIPE_BASIC_CHECKOUT_PAYMENT, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();
        console.log(session)

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });
        console.log("seeeid", result)

        if (result.error) {
            // console.log(result.error);
        }
    }

    return (
        <div className='basic-container'>
            <h3 style={{color:"#2f1c6a",paddingBottom: "20px"}}>Basic</h3>
            <p className='fs'>Everything you need to create in your Tattoos body</p>
            <div className='monthlyplainPrice'>
                <span>$11.99</span><span className='first1'>SAVE 90%</span>
            </div>
            <div className='monthlyplain'>
                <span className='first'><span className='first3'>{price}</span>/mo</span>
            </div>
            <div className='freePlain'>
                <h5>+2 months FREE</h5>
            </div>
            <div className='addToCart' onClick={makePayment}>
                <button>Checkout</button>
            </div>
            <span className='newplian'>$ 7.99 /mo when you renew</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    price: state.priceReducer.basic
});

export default connect(mapStateToProps)(BasicPlain);