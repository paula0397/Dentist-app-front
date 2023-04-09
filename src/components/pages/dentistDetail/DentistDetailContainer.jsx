import { Table, TableRow } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";



const DentistDetailContainer = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    //llama a la api para obtener los datos
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        {
          setDentist(res.data);
        }
      })
      .catch((err) => console.log(Error));
  }, [id]);
  console.log(dentist);

  return (
    <>
      {dentist ? (
        

        <Table 

          style={{ border: "2px solid black",maringTop:"50px"}} className={state.isDarkMode ? "container-dark" : "container-light"}
        >
          <tr className={state.isDarkMode ? "container-dark" : "container-light"}>
            <td style={{ padding: "8px", border: "1px solid black" , background:"#a8dadc", fontFamily: "Raleway"  }}>
              {" "}
              <strong> Name & Last Name{" "} </strong>
            </td>
            <td style={{ padding: "8px", border: "1px solid black" , background:"#a8dadc", fontFamily: "Raleway"  }}>
              {" "}
              <strong> Phone Contact </strong>
            </td>
            <td style={{ padding: "8px", border: "1px solid black" , background:"#a8dadc", fontFamily: "Raleway"  }}>
              {" "}
              <strong> Email </strong>
            </td>
            <td style={{ padding: "8px", border: "1px solid black", background:"#a8dadc", fontFamily: "Raleway"   }}>
              {" "}
              <strong> WebSite </strong>
            </td>
          </tr>

          <tbody>
            <td style={{ padding: "8px", border: "1px solid black",fontFamily: "Raleway" }}>
              {" "}
              {dentist.name}
            </td>
            <td style={{ padding: "8px", border: "1px solid black", fontFamily: "Raleway" }}>
              {dentist.phone}
            </td>
            <td style={{ padding: "8px", border: "1px solid black", fontFamily: "Raleway" }}>
              {dentist.email}
            </td>
            <td style={{ padding: "8px", border: "1px solid black", fontFamily: "Raleway" }}>
              {dentist.website}
            </td>
          </tbody>
        </Table>
      ) : null}
    </>
  );
};
export default DentistDetailContainer;

