import React, { useState } from 'react';
import PayFast from "../asserts/images.png";

function FormPaymentFast() {
    const [masterCardNumber, setMasterCardNumber] = useState('**** **** **** 3193');
    const [visaNumber, setVisaNumber] = useState('**** **** **** 4296');
    const [cardHolderName, setCardHolderName] = useState('enter user name');
    const [newCardNumber, setNewCardNumber] = useState('1234 5678 1234 5678');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    return (
        <div className="card rounded-3">
            <div className="card-body p-4">
                <form>

                    <div className="row mb-4 pb-1">
                        <div className='col-md-12'>
                            <div className="row mb-4 pb-1">
                                <div className="col-md-3">
                                    <img src={PayFast} alt="MasterCard" width="150px" />
                                </div>
                                <div className="col-md-9 mt-4">
                                    <div className="form-outline">

                                        <input type="text" id="PayFast" className="form-control form-control-lg"
                                            value={masterCardNumber} onChange={e => setMasterCardNumber(e.target.value)}  />
                                        <label className="form-label" htmlFor="PayFast">Card Number (PayFast)</label>
                                    </div>
                                </div>
                            </div>
                        </div>  


                    </div>


                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="form-outline">
                                <input type="text" id="cardholderName" className="form-control form-control-lg"
                                    value={cardHolderName} onChange={e => setCardHolderName(e.target.value)} />
                                <label className="form-label" htmlFor="cardholderName">Cardholder's Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-outline">
                                <input type="text" id="newCardNumber" className="form-control form-control-lg"
                                    value={newCardNumber}
                                    onChange={e => setNewCardNumber(e.target.value)}
                                    placeholder='Enter new card number' />
                                <label className="form-label" htmlFor="newCardNumber">Card Number</label>
                            </div>



                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">

                            <div className="form-outline">
                                <input type="password" id="cardExpiry" className="form-control form-control-lg"
                                    value={expiry} onChange={e => setExpiry(e.target.value)} placeholder="MM/YYYY" />
                                <label className="form-label" htmlFor="cardExpiry">Expire</label>
                            </div>


                        </div>
                        <div className="col-md-6">

                            <div className="form-outline">
                                <input type="password" id="cardCvv" className="form-control form-control-lg"
                                    value={cvv} onChange={e => setCvv(e.target.value)} placeholder="Cvv" />
                                <label className="form-label" htmlFor="cardCvv">Cvv</label>
                            </div>

                        </div>
                    </div>

                    <button type="button" className="btn btn-success btn-lg btn-block">Add card</button>
                </form>
            </div>
        </div>
    );
}

export default FormPaymentFast;
