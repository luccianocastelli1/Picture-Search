import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID SRMf_CY3hdzCfqQuJDFEKd-_KEt6ODeB0w6EWO0hmKc'
    }
});