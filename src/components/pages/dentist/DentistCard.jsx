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
    import GradeIcon from '@mui/icons-material/Grade';
    import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";

    export const DentistCard = (props) => {
        const { nameApi } = props;
    
        return (
        <div>
            <Typography variant="h5" color="initial" sx={{ margin: "20px", textAlign: "center", fontFamily: 'Raleway'  }}>
            Home
            </Typography>
    
<Grid container spacing={2}>
        {nameApi.map((item) => {
          return (
            <Grid item xs={12} sm={4} md={3} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt={item.title}
                  src="https://img.freepik.com/premium-vector/doctor-vector-illustration_488994-153.jpg"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.email}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <GradeIcon />
                  </IconButton>
               <Link to={`/dentist/${id}`}>
                {nameApi}
              </Link> 
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DentistCard;


