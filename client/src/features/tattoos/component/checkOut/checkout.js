import React from 'react'
import BasicFastPaypal from './fastpaypal'
import BasicStripePaypal from './stripe'

function Checkout() {
    return (
        <React.Fragment>
            <section className="search-page">
                <div className='container p-0'>
                    <div className='text-center'>
                        <strong className='m-auto'>
                            <h1 style={{
                                color: 'black',
                                fontWeight: '600',
                                paddingBottom: '10px',
                                textAlign:"left"
                              

                            }}>Checkout Payment</h1>

                        </strong>
                    </div>

                    <div className='row' style={{ paddingTop: '40px' }} id='margin-payment'>
                        <div className='col-md-6'>
                            <BasicFastPaypal />
                        </div>
                        <div className='col-md-6'>
                            <BasicStripePaypal />
                        </div>

                    </div>

                </div>
            </section>

        </React.Fragment>
    )
}

export default Checkout