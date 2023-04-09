import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
    } from "@mui/material";
    import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

    export const DentistCard = (props) => {

    const {state, dispatch} = useContext(GlobalContext)
    const item = props.nameApi;

    const addFav = () =>{
    let validadorDentistaFavRepetido = false;

    state.favs.forEach(dentistFav => {
        if(dentistFav.id == item.id){
            validadorDentistaFavRepetido = true;
        }});

    if(!validadorDentistaFavRepetido){
        dispatch({type: "ADD_FAV", payload: item})
    }
    }
    const url = "/dentist/" + item.id;

    return (
        <div>
        
            <Typography className={state.isDark ? "container-dark":"container-light"}
                variant="h5"
                color="initial"
                sx={{ margin: "20px", textAlign: "center", fontFamily: "Raleway" }}
            >
            </Typography>
                    
                    <Card  >
                        <Link to={url}>
                        <CardMedia className={state.isDarkMode ? "container-dark" : "container-light"} 
                        component="img"
                        height="194"
                        image={item.img}
                        alt={item.title}
                        src="https://res.cloudinary.com/djsppnyg1/image/upload/v1681077066/IMAGEN_ODONTOLOGA_Mesa_de_trabajo_1_hjai3i.png"
                        />
                        <CardContent className={state.isDarkMode ? "container-dark" : "container-light"} >
                        <Typography className={state.isDarkMode ? "container-dark" : "container-light"}
                            variant="body2"
                            style={{ fontFamily: "Raleway" }}
                        >
                            {item.name}
                        </Typography>

                        <Typography className={state.isDarkMode ? "container-dark" : "container-light"}
                            variant="body2"
                            style={{ fontFamily: "Raleway" }}
                        >
                            {item.email}
                        </Typography>
                        </CardContent>
                        </Link>
                        <CardActions disableSpacing className={state.isDarkMode ? "container-dark" : "container-light"}>
                        <IconButton style={{color:"gray"}} className={state.isDarkMode ? "container-dark" : "container-light"} aria-label="add to favorites" onClick={()=>addFav()}>
                        <FavoriteIcon />
                        </IconButton>
                        </CardActions>
                    </Card>
        
        </div>
    );
};

export default DentistCard;