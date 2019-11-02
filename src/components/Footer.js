import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';




// const Quoteswitcher = () => {
//   const rand = Math.floor(Math.random() * 4) + 1;
//   if (rand === 1) {
//     return <p> “If you insist on measuring yourself, place the tape around your heart rather than your head." – Carol Trabelle”</p>;
//   }
//   if (rand === 2) {
//     return <p> You may not have saved a lot of money in your life, but if you have saved a lot of heartaches for other folks, you are a pretty rich man."  – Seth Parker</p>;
//   }
//   return <p> I am only one, but still I am one. I cannot do everything, but still I can do something; and because I cannot do everything, I will not refuse to do something that I can do." – Helen Keller </p>;
// };



class Footer extends Component {
    render (){
        return(
<MDBFooter color="blue" className="font-small pt-3 mt-1" style={{ alignItems: 'center' }}>
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">
              <a href="https://cryptocurrensea.io">
               A.S.S.
              </a>
            </h5>
              <p>
                Smoke for your health and mind, not for the flex.
              </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://jongan.com"> Jon Gan </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        )
    }
}

export default Footer;