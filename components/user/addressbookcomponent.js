import React from 'react'
import UserSidebar from './usersidebar'

export default function AddressBookComponent() {
  return (
    <section className="page-section">
                    <div className="wrap container">
                        <div className="row">
                            
                            
                            <UserSidebar />

            <div className="col-lg-9 col-md-9 col-sm-8">
                                <div className="information-title">Your Account Information</div>
                                <div className="details-wrap">
                                    <div className="block-title alt"> <i className="fa fa-angle-down"></i> Change Your Personal Details</div>
                                    <div className="details-box">
                                        <form action="#" className="form-delivery">
                                            <div className="row">                                                
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group"><input required className="form-control" type="text" placeholder="Address 1" /></div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group"><input className="form-control" type="text" placeholder="Address 2" /></div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group selectpicker-wrapper">
                                                        <select
                                                            className="selectpicker input-price" data-live-search="true" data-width="100%"
                                                            data-toggle="tooltip" title="Select">
                                                            <option>Country</option>
                                                            <option>Country</option>
                                                            <option>Country</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group selectpicker-wrapper">
                                                        <select
                                                            className="selectpicker input-price" data-live-search="true" data-width="100%"
                                                            data-toggle="tooltip" title="Select">
                                                            <option>City</option>
                                                            <option>City</option>
                                                            <option>City</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group"><input className="form-control" type="text" placeholder="Postcode/ZIP" /></div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group"><input className="form-control" type="text" placeholder="Email" /></div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="form-group"><input className="form-control" type="text" placeholder="Phone Number" /></div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group"><textarea className="form-control" placeholder="Addıtıonal Informatıon" name="name" id="id" cols="30" rows="10"></textarea></div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <button type="submit" className="btn btn-theme btn-theme-dark"> Update </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>                                
            </div>

            </div>

                    </div>
    </section>
    
  )
}
