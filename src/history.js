
import axios from 'axios';

export function register(body){
    return(
        axios.post(`https://reqres.in/api/register`,{...body})
    )
}
