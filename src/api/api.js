import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getAllFoodItems = async () => {
    let url = `https://mr-delivery-wista.herokuapp.com/meal`
    const response = await axios.get(url, {});
    // console.log('foodItems', response.data)
    return response.data;
}
export const getAllRest = async () => {
    let url = `https://mr-delivery-wista.herokuapp.com/restaurant`
    const response = await axios.get(url, {});
    // console.log('restItems', response.data)
    return response.data;
}

export const updateUserInfo = async (data, token) => {
    let url = `https://mr-delivery-wista.herokuapp.com/edit-account`
    const result = await axios.put(url, data, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    // console.log(result);
    return result;
};

export const getOneRest = async (itemId) => {
    let url = `https://mr-delivery-wista.herokuapp.com/restaurant/${itemId}`
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${cookies.get('data').user.token}`
        }
    });
    // console.log('oneREST', response.data)
    return response.data;
}