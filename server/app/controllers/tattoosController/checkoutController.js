// controllers/checkoutController.js
const asyncHandler = require('express-async-handler');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// basic plain checkout
exports.addbasicPayment = asyncHandler(async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Business Tattoos Booking Plan',
                    },
                    unit_amount: req.body.products.price, // Use the price in cents directly
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: process.env.SUCCESS_URL,
            cancel_url: process.env.CANCEL_URL,
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// business plain checkout
exports.addbusinessPayment = asyncHandler(async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Business Tattoos Booking Plan',
                    },
                    unit_amount: req.body.products.price, // Use the price in cents directly
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: process.env.SUCCESS_URL,
            cancel_url: process.env.CANCEL_URL,
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


// premium plain checkout

exports.addpremiumPayment = asyncHandler(async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Premium Tattoos Booking Plan',
                    },
                    unit_amount: req.body.products.price, // Use the price in cents directly
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: process.env.SUCCESS_URL,
            cancel_url: process.env.CANCEL_URL,
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
