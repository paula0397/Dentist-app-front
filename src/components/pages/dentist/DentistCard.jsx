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
        
            <Typography
                variant="h5"
                color="initial"
                sx={{ margin: "20px", textAlign: "center", fontFamily: "Raleway" }}
            >
            </Typography>
                    
                    <Card>
                        <Link to={url}>
                        <CardMedia
                        component="img"
                        height="194"
                        image={item.img}
                        alt={item.title}
                        src="https://res.cloudinary.com/djsppnyg1/image/upload/v1680893199/Female-Doctor-Vector-Illustration_gupswq.jpg"
                        />
                        <CardContent>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ fontFamily: "Raleway" }}
                        >
                            {item.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ fontFamily: "Raleway" }}
                        >
                            {item.email}
                        </Typography>
                        </CardContent>
                        </Link>
                        <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" onClick={()=>addFav()}>
                        <FavoriteIcon />
                        </IconButton>
                        </CardActions>
                    </Card>
        
        </div>
    );
};

export default DentistCard;