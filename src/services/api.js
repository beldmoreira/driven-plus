import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v4/driven-plus';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

function login (body){
    const promise = axios.post(`${BASE_URL}/auth/login`,body)
    return promise;
}

function signUp (body){
    const promise = axios.post(`${BASE_URL}/auth/sign-up`,body)
    return promise;
}

function  listingPlans(token){
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships`,config)
    return promise;
}

function listingOnePlan(id,token){
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/subscriptions/memberships/${id}`,config)
    return promise;
}

function subscribingtoOnePlan(token){
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/subscriptions`,config)
    return promise;
}


function modifyingAPlan(token){
    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/subscriptions`,config)
    return promise;
}

function cancelingAPlan (token){
    const config = createConfig(token);
    const promise = axios.delete(`${BASE_URL}/subscriptions`,config)
    return promise;
}

function modifyingAUser(token){
    const config = createConfig(token);
    const promise = axios.put(`${BASE_URL}/users/`,config)
    return promise;
} 

const api = {
    login,
    signUp,
    listingPlans,
    listingOnePlan,
    subscribingtoOnePlan,
    modifyingAPlan,
    cancelingAPlan,
    modifyingAUser
}

export default api;