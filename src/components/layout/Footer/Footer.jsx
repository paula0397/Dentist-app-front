import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { GlobalContext } from "../../../context/GlobalContext";


const Footer = () => {
    const { state } = useContext(GlobalContext);    
    return (
        <div className={state.isDarkMode ? "container-dark" : "container-light"}>
        <Outlet />
        <footer style={{display:"flex",flexDirection:"column", width:"100%",margin:"0px", backgroundColor:"white", position: "relative", bottom: "0" }}>
        <br />
        <div style={{background:"#a8dadc", width:"100%", textAlign:"center" , fontFamily: 'Raleway'}}> <br />        
            <p className="back" onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>
            ¡Go up!
            </p><br />
        </div>
        <div style={{display:"flex",justifyContent:"space-around", alignItems:"center" }} className="footer.container">
        <img style={{width:"50px", margin:"10px"}}src="..\src\img\logo DH.jpeg" alt="" />
                <div style={{width:"200px"}} className={state.isDarkMode ? "container-dark" : "container-light"}>
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

