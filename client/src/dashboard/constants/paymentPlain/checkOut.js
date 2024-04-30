import React from 'react'
import BasicPlain from '../../../features/tattoos/component/paymentPlain/basicPlain'
import BusinessPlain from '../../../features/tattoos/component/paymentPlain/businessPlain'
import PremiumPlain from '../../../features/tattoos/component/paymentPlain/premiumPlain'

function CheckOut() {
    return (
        <div className='container'>
            
            <div className='row' style={{ paddingTop: '40px' }}>
                <div className='col-md-4'>
                    <BasicPlain />
                </div>
                <div className='col-md-4'>

                    <BusinessPlain />
                </div>
                <div className='col-md-4'>

                    <PremiumPlain />
                </div>
            </div>

        </div>
    )
}

export default CheckOut