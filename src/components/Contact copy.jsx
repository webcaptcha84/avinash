import React from 'react'

const Contact = () => {
  return (
    <div className='container'> 
        <div className="row mt-5 pt-5">
              <div className="col-sm-12 p-4">
                <h2>Contact Us</h2>
                <h5>
                  Please use the provided form to contact us, and we will
                  respond to your inquiry promptly.
                </h5>
              </div>
              <div className="col-sm-6 pt-4">
                <img
                  src=".\Imgs\finance5.jpg"
                  style={{ objectFit: "cover", height: "90%", width: "100%" }}
                  alt="Finance"
                />
              </div>
              <div className="col-sm-6" style={{ padding: "40px" }}>
                <p>
                  Thank you for contacting us. Your message has been received,
                  and we will get back to you shortly.
                </p>
                <form
                  action=""
                  method="post"
                  onSubmit={() => alert("Thanks for connecting with us!")}
                  id="contactFrm"
                >
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Enter your name.."
                    required
                  />
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Enter your last name.."
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email.."
                    required
                  />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter the phone number"
                  />
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "200px" }}
                    defaultValue={""}
                  />
                  <input
                    type="submit"
                    className="bg-danger"
                    defaultValue="Submit"
                  />
                </form>
              </div>
            </div>
    </div>
  )
}

export default Contact