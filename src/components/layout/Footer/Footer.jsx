import React from "react";
import { Outlet } from "react-router-dom";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <div>
      <Outlet />
    <footer style={{display:"flex",flexDirection:"column",margin:"20px", backgroundColor:"#2438AC"}}>
      <br />
      <div style={{background:"#B6BACD", width:"100%", textAlign:"center"}}>        
        <p className="back" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>
          Ir hacía arriba
        </p>
      </div>
      <div style={{display:"flex",justifyContent:"space-around", alignItems:"center" }} className="footer.container">
      <img style={{width:"50px", margin:"10px"}}src="..\src\img\DH.ico" alt="" />
              <div style={{width:"200px"}}>
                <FacebookTwoToneIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <WhatsAppIcon/>

              </div>
              </div>
    </footer>
    </div>
  );
};

export default Footer;
