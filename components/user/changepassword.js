import React from 'react'
import UserSidebar from './usersidebar'

export default function ChangePasswordComponent() {
  return (
    <section className="page-section">
                    <div className="wrap container">
                        <div className="row">
                            
                            
                            <UserSidebar />
                            
                            <div className="col-lg-9 col-md-9 col-sm-8">
                                <div className="information-title">Your Password</div>
                                <div className="details-wrap">
                                    <div className="block-title alt"> <i className="fa fa-angle-down"></i> Change your password </div>
                                    <div className="details-box">
                                        <form className="form-delivery" action="#">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input required type="password" placeholder="Password" className="form-control" /></div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group"><input required type="password" placeholder="Password Confirm" className="form-control" /></div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <button className="btn btn-theme btn-theme-dark" type="submit"> Update </button>
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
