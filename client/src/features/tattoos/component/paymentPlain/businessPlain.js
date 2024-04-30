import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { API_END_POINTS } from '../../../../services';

function BusinessPlain({ price }) {
    const BasicBusinessPayment = useSelector((state) => state.priceReducer.business);

    const makePayment = async () => {
        const stripe = await loadStripe("pk_test_51P5lQV2MQoPtL97NbiPXvL5zwITvIpOEUAMjMUKdWNBWLMWaVA6DdHolnhzFWd41xo1GfWnDsZ6BG5BPVAFS8bCD00yP5qUO0B");

        // Convert the price from a string to a number in cents
        const priceCents = parseFloat(BasicBusinessPayment.replace('$', '').replace('/mo', '')) * 100;

        const body = {
            products: {
                price: priceCents
            }
        };
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch(API_END_POINTS.STRIPE_BUSINESS_CHECKOUT_PAYMENT, {
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
            // console.log(result.error);
        }
    }
    return (
        <React.Fragment>

            <div className='basic-container'>
                <span className='POPULAR'>MOST POPULAR</span>

                <h3 style={{ color: "#2f1c6a", position: "relative", bottom: "20px" }}>Business</h3>
                <p className='fs'>Level-up with more power and enhanced features</p>
                <div className='monthlyplainPrice'>
                    <span>$13.99</span><span className='first4'>SAVE 70%</span>
                </div>
                <div className='monthlyplain'>
                    <span className='first'><span className='first3'>{price}</span>/mo</span>
                </div>
                <div className='freePlain1'>
                    <h5>+2 months FREE</h5>
                </div>
                <div className='addToCart1'>
                    <button onClick={makePayment}>Checkout</button>
                </div>
                <span className='newplian'>$ 8.99 /mo when you renew</span>
            </div>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => ({
    price: state.priceReducer.business
});

export default connect(mapStateToProps)(BusinessPlain);
