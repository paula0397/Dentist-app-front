import { dentistInstance } from "./dentistInstance";

export const dentistGet=()=>{

    const dentist = dentistInstance.get()
    return dentist
}