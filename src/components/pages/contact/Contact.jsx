import { Box, Button, FormControl, Grid, Stack, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalContext';


const Contact = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const { state } = useContext(GlobalContext);

  const validarNombre = (value) => {
    return value ? value.length > 5 : false;
  };

  const onChangeName = (e) => {
    setNombre(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSumbmitForm = (e) => {
    e.preventDefault();
    if (validarNombre(nombre) && /\S+@\S+\.\S+/.test(email)) {
      document.querySelector("#mensaje").innerHTML = "Gracias " +
      nombre +
      ", te contactaremos cuanto antes vía mail"
    } else {
      document.querySelector("#mensaje_error").innerHTML = "Por favor verifique su información nuevamente"
    }
  };

  return (

    
    <div className="App"><br /> 
      <h2 style={ {fontFamily: 'Raleway', textAlign: "center" } }>Want to know more?</h2>
      <p style={ {fontFamily: 'Raleway', textAlign: "center" } } >Send us your email and we will contact you</p><br />
      <form className={state.isDark ? "container-dark":"container-light"} onSubmit={onSumbmitForm}>
        <Box 
          sx={{
            width: "100%",
            minHeight: "100vh",
            padding: "10px 30px"
          }}
        >
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField id="input1" label="Enter your name" variant="outlined" fullWidth value={nombre} onChange={onChangeName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="input2" label="Enter your email" variant="outlined" fullWidth value={email} onChange={onChangeEmail} />
            </Grid>
            
          </Grid>

          <Stack spacing={2} sx={{ m: 1 }} direction="row" >
            <Button type='submit' variant="contained">Send</Button>
            <Button
              variant="outlined"
              
            >
              Cancel
            </Button>
            <p id="mensaje_error"></p>
            <h3 id = "mensaje"> </h3>
          </Stack>
        </Box>
      </form>
    </div>
  );
}

export default Contact