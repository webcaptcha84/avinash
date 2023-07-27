import React from 'react'
import Accor from './Accor'
import ContainerExample from './Layout'


export const Home = () => {
  return (
    

    <>
    <div className="col-12">
          <div
            className="container my-5"
            id="home"
            data-bs-spy="scroll"
            data-bs-target="#home"
          >
            <div className="row">
              <div className="col-md-6 fl mt-5 ">
                <img
                  src="./Imgs/shape2.png"
                  className="fl p10"
                  style={{
                    margin: "50px -80px -80px 0",
                    filter: "saturate(-350%)",
                    zIndex: "3",
                    position: "relative",
                  }}
                  alt="Shape"
                />
                <img
                  src="./Imgs/notify-business.jpg"
                  className="fl p10 left-img"
                  alt="Notify Business"
                />
                <div
                  style={{
                    clear: "both",
                    fontSize: "19pt",
                    color: "#b4b4b4",
                    textAlign: "center",
                    padding: "5px",
                  }}
                >
                  <b>Business opportunities are like buses, </b> there's always
                  another one coming
                </div>
              </div>
              <div className="col-md-3 fl ">
                <h1
                  style={{
                    color: "#128ccd",
                    fontSize: "35pt",
                    fontStretch: "condensed",
                    marginTop: "60px",
                  }}
                >
                  On the average, five times as many people read the headlines
                  as read the body copy
                </h1>
                <img
                  src="./Imgs/business.jpg"
                  width={100}
                  height={50}
                  style={{ marginTop: "50px", paddingLeft: "20px" }}
                  alt="Business"
                />
                <p
                  className="fl"
                  style={{ fontSize: "14pt", lineHeight: "1.4em" }}
                >
                  By and large, a business starts with a business idea (the
                  thought) and a name. Contingent upon the idea of the business,
                  broad statistical surveying might be important to decide if
                  transforming the thought into a business is possible and if
                  the business can convey worth to purchasers.
                </p>
              </div>
              <div className="col-md-3 fl ">
                <p
                  className="fl "
                  style={{
                    fontSize: "14pt",
                    lineHeight: "1.4em",
                    marginTop: "100px",
                  }}
                >
                  The business name can be perhaps the most important resources
                  of a firm; cautious thought should hence be given while
                  picking it. Organizations working under invented names should
                  be enrolled with the state. Organizations frequently structure
                  after the improvement of a strategy, which is a proper
                  archive.
                </p>
                <p
                  className="fl"
                  style={{
                    fontSize: "14pt",
                    fontWeight: "bold",
                    lineHeight: "1.2em",
                    color: "#128ccd",
                    fontStretch: "condensed",
                    padding: "30px",
                    marginLeft: "40px",
                    marginTop: "90px",
                    backgroundColor: "#e6f4fd",
                    paddingBottom: "150px",
                  }}
                >
                  The business name can be perhaps the most important resources
                  of a firm; cautious thought should hence be given while
                  picking it.
                </p>
              </div>
            </div>
          </div>

          
         
        </div>
<Accor />
<ContainerExample/>
        </>
        
  )
}
