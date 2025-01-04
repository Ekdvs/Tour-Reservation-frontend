import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function ForgotPassword() {
  return (
    <div>
    <Topbar/>
    <Navbar/>
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth:"900px"}}>
                <h3 class="text-white display-3 mb-4">Password Reset</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/Contact">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Password Reset</li>
                </ol>    
            </div>
        </div>


    <Footer/>
      
    </div>
  )
}
