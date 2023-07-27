import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    
         <div className="container-fluid bg-dark">
            <div className="mt-2 py-2  text-white text-center">
              <p></p>
              <div id="fmenu">
                <Link
                  to="/privacy-policy"
                  style={{ display: "inline-block" }}
                >
                  Privacy Policy
                </Link>
                <Link to="/terms-of-use" style={{ display: "inline-block" }}>
                  Terms of Use
                </Link>
                <Link to="/unsubscribe" style={{ display: "inline-block" }}>
                  Unsubscribe
                </Link>
                <Link to="/contact-us" style={{ display: "inline-block" }}>
                  Contact
                </Link>
              </div>
              <p />
              <p>© 2023 WebsiteName | all rights reserved.</p>
            </div>
          </div>
    
  )
}
