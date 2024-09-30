import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import Button from '../ui/button';

export default function TopBar() {
    const { data: session } = useSession();
    const router = useRouter();
    let userName ="";
    try{
        console.log(session);
        if(session.userData){
          userName = session.userData.username;
        }
      }catch(error){
            //console.log(error)
        }

  function logoutHandler() {
    signOut({ callbackUrl: '/', redirect:true });
    //router.replace('/');
  }

  return (
    <div className="top-bar">
    <div className="container">
        <div className="top-bar-left">
        {!session && (
            <ul className="list-inline">
                <li className="icon-user"><Link href="/user/auth"><img src="assets/img/icon-1.png" alt=""/> <span>Login</span></Link></li>
                <li className="icon-form"><Link href="/user/signup"><img src="assets/img/icon-2.png" alt=""/> <span>Not a Member? <span className="colored">Sign Up</span></span></Link></li>
                <li><Link href="mailto:support@yourdomain.com"><i className="fa fa-envelope"></i> <span>support@yourdomain.com</span></Link></li>
            </ul>)}
            {session && (
                <ul className="list-inline">
                <li> {userName}</li>
                <li className="icon-user"><Button onClick={logoutHandler}><img src="assets/img/icon-1.png" alt=""/> <span>Logout</span></Button></li>
                
            </ul>
            )}
        </div>
        <div className="top-bar-right">
            <ul className="list-inline">
                <li className="hidden-xs"><Link href="/about">About</Link></li>
                <li className="hidden-xs"><Link href="/blog">Blog</Link></li> 
                {session && (  
                    <>                          
                <li className="hidden-xs"><Link href="/user/myaccount">My Account</Link></li>
                <li className="hidden-xs"><Link href="/user/wishlist">My Wishlist</Link></li>
                </>
                )}
                <li className="hidden-xs"><Link href="/contact">Contact</Link></li>
                <li className="hidden-xs"><Link href="/faq">FAQ</Link></li>
                
                <li className="dropdown currency">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown">€ EURO<i className="fa fa-angle-down"></i></Link>
                    <ul role="menu" className="dropdown-menu">
                        <li><Link href="#">€ EURO</Link></li>
                        <li><Link href="#">€ EURO</Link></li>
                        <li><Link href="#">€ EURO</Link></li>
                    </ul>
                </li>
                <li className="dropdown flags">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/flag.gif" alt=""/> Eng<i className="fa fa-angle-down"></i></Link>
                    <ul role="menu" className="dropdown-menu">
                        <li><Link href="#"><img src="assets/img/flag.gif" alt=""/> Eng</Link></li>
                        <li><Link href="#"><img src="assets/img/flag.gif" alt=""/> Eng</Link></li>
                        <li><Link href="#"><img src="assets/img/flag.gif" alt=""/> Eng</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}
