import React from 'react'
import FormPaymentFast from './fastForm'

function FastPayPalPayment() {
    return (
        <section className="search-page">
            <div className='container'>
                <div className='text-center'>
                    <strong className='m-auto'>
                        <h1 style={{
                            color: 'black',
                            fontWeight: '600',
                            paddingBottom: '10px',
                            textAlign: "left"


                        }}>Enter your PayFast Card Information</h1>

                    </strong>
                </div>

                <div className='row' style={{ paddingTop: '40px' }}>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-md-8'>
                        <FormPaymentFast />
                    </div>
                    <div className='col-md-2'>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default FastPayPalPayment