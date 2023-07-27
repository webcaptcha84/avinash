import React from 'react'

export const Unsubscribe = () => {
  return (
    <div className="container" style={{minHeight:"84.8vh"}}>
    <div className="row  p-2" id="unsubscribe">
      <div className="mt-5 py-5 text-white">.</div>
      <div className="bg-secondary col-sm-8  mx-auto p-5 text-center justify-content-center d-flex align-items-center">
        <img
          src="./Imgs/unsub.png"
          style={{ height: "150px", float: "left" }}
          className="unsubimg"
          alt="Unsubscribe"
        />
        <div
          style={{
            display: "block",
            float: "left",
            paddingLeft: "40px",
          }}
        >
          <form
            className="text-left text-white d-block"
            name="unsubFrm"
            action=""
            method="post"
            id="unsubFrm"
            onSubmit={() =>
              alert(
                "Now you have been unsubscribed. Do subscribe if you have clicked by mistake."
              )
            }
          >
            <h2>Email Unsubscribe</h2>
            Here's the continuation of the converted code: ```jsx
            <p>
              Please provide us with the email address you wish to
              unsubscribe from all subscriptions.
            </p>
            <div className="row">
              <input
                type="email"
                className="form-control "
                placeholder="Email"
                required
              />
              <input
                type="submit"
                className="bg-danger "
                defaultValue="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="row p-5 m-5 bg-success p-2 text-dark bg-opacity-50">
      <div className="col-lg-9 text-white h1">
        Now, it is time to talk about Credit.
      </div>
      <div className="col-lg-3 d-flex align-items-center">
        <button type="button" className="btn btn-lg btn-danger">
          Click here
        </button>
      </div>
    </div>
    

  </div>
  )
}
