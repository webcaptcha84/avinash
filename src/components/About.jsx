import React from 'react'
import { Helmet } from 'react-helmet-async'
export const About = () => {
  return (
    <>
    <Helmet>
      <title>About Us</title>
      <meta name="description" content="About our content best version og our website"/>
      <link rel='canonical' href='/about' />
    </Helmet>
    <div className='container' style={{minHeight:"84.8vh"}}> 
        <div className="row mt-5 pt-5">
              <div className="col-sm-8  " >
                <div
                  style={{
                    fontSize: "22pt",
                    color: "gray",
                    paddingLeft: "30px",
                    margin: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Now, it is time to discuss Credit.
                </div>
                <p
                  style={{
                    fontSize: "14pt",
                    lineHeight: "1.5em",
                    color: "gray",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    fontWeight: "normal !important",
                    textIndent: "30px",
                    textJustify: "inter-word",
                  }}
                >
                  Credit ssss is a fundamental concept in personal finance and plays
                  a crucial role in modern economies. It refers to the ability
                  of individuals or businesses to borrow money or obtain goods
                  and services with the understanding that repayment will occur
                  in the future. Credit enables individuals to make purchases
                  and investments that may otherwise be unattainable based on
                  their immediate financial resources. It also serves as a
                  measure of trustworthiness and financial responsibility.
                  Credit is typically extended by financial institutions, such
                  as banks, credit unions, and credit card companies, as well as
                  other lenders. When a person applies for credit, the lender
                  assesses their creditworthiness by evaluating various factors,
                  such as credit history, income, employment stability, and
                  existing debt obligations. The lender then determines the
                  terms of the credit, including the loan amount, interest rate,
                  repayment period, and any associated fees. Credit can take
                  various forms, including credit cards, mortgages, personal
                  loans, student loans, and lines of credit. Each type of credit
                  has its own features, benefits, and risks. For instance,
                  credit cards provide convenience and the ability to make
                  purchases on credit, but they also come with the potential for
                  high-interest rates and debt accumulation if not managed
                  responsibly. Mortgages allow individuals to purchase homes but
                  require long-term repayment commitments. Student loans assist
                  in financing education but may result in substantial debt
                  burdens for students.
                </p>
              </div>
              <div className="col-sm-4">
                <img
                  src="./Imgs/finance3.jpg"
                  style={{
                    margin: "20px auto 30px auto",
                    width: "100%",
                    objectFit: "cover",
                    height: "90%",
                    borderRadius: "10px",
                    objectPosition: "center let",
                  }}
                  alt="Finance"
                />
              </div>
              <div className="col-sm-12 justify-content-center d-flex">
                <div className="row">
                  <img
                    src="./Imgs/finance1.jpg"
                    className="fl col-md-3"
                    alt="Finance"
                  />
                  <img
                    src="./Imgs/finance2.jpg"
                    className=" fl col-md-3"
                    alt="Finance"
                  />
                  <img
                    src="./Imgs/finance4.jpg"
                    className="  fl col-md-3"
                    alt="Finance"
                  />
                  <img
                    src="./Imgs/finance6.jpg"
                    className="  fl col-md-3"
                    alt="Finance"
                  />
                </div>
              </div>
            </div>
    </div>
    </>
  )
}
