import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { API_END_POINTS } from '../../../../services';



function PremiumPlain({ price }) {
    const BasicPremiumPayment = useSelector((state) => state.priceReducer.premium);

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51P5lQV2MQoPtL97NbiPXvL5zwITvIpOEUAMjMUKdWNBWLMWaVA6DdHolnhzFWd41xo1GfWnDsZ6BG5BPVAFS8bCD00yP5qUO0B");

        // Convert the price from a string to a number in cents
        const priceCents = parseFloat(BasicPremiumPayment.replace('$', '').replace('/mo', '')) * 100;

        const body = {
            products: {
                price: priceCents
            }
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch(API_END_POINTS.STRIPE_PREMIUM_CHECKOUT_PAYMENT, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();
        console.log(session)

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });


        if (result.error) {
            console.log(result.error);
        }
    }
    return (
        <div className='basic-container'>
            <h3 style={{ color: "#2f1c6a", paddingBottom: "20px" }}>Premium</h3>
            <p className='fs'>Enjoy optimized performance & powerful resources</p>
            <div className='monthlyplainPrice'>
                <span>$13.99</span><span className='first1'>SAVE 50%</span>
            </div>
            <div className='monthlyplain'>
                <span className='first'><span className='first3'>{price}</span>/mo</span>
            </div>
            <div className='freePlain'>
                <h5>+2 months FREE</h5>
            </div>
            <div className='addToCart'>
                <button onClick={makePayment}>Checkout</button>
            </div>
            <span className='newplian'>$ 8.99 /mo when you renew</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    price: state.priceReducer.premium
});

export default connect(mapStateToProps)(PremiumPlain);