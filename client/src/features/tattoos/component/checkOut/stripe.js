import React from 'react';
import { Link } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import fastPaypal from "../asserts/sp.png";
import BACKEND_URL_APPLICATION from "../../../../utils/index";


function BasicStripePaypal() {
    const carts = useSelector((state) => state.priceReducer.basic);
    

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51P5lQV2MQoPtL97NbiPXvL5zwITvIpOEUAMjMUKdWNBWLMWaVA6DdHolnhzFWd41xo1GfWnDsZ6BG5BPVAFS8bCD00yP5qUO0B");

        // Convert the price from a string to a number in cents
        const priceCents = parseFloat(carts.replace('$', '').replace('/mo', '')) * 100;

        const body = {
            products: {
                price: priceCents
            }
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch(BACKEND_URL_APPLICATION.STRIPE_CREATE_PAYMENT, {
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
            console.log(result.error);
        }
    }


    return (
        <span className='fastPaypal' onClick={makePayment}>
            <div assName='fastPaypal'>
                <img src={fastPaypal} />
                <div className='payment'><h2 style={{ color: "#2f1c6a" }}>Pay with Stripe</h2>
                </div>
            </div>
        </span>
    );
}


export default BasicStripePaypal;
