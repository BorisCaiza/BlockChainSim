import axios from "axios";

const base_url = process.env.REACT_APP_BACKEND_URL;


const send_mail = (objeto) =>{

    const request = axios.post(base_url, objeto);

    return request.then(response => response.data)
}


const emailService = {send_mail};

export default emailService;
