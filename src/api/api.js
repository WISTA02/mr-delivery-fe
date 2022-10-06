import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getAllFoodItems = async () => {
    let url = `https://mr-delivery-wista.herokuapp.com/meal`
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${cookies.get('data').user.token}`
        }
    });
    console.log('foodItems', response.data)
    return response.data;
}
export const getAllRest = async () => {
    let url = `https://mr-delivery-wista.herokuapp.com/restaurant`
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${cookies.get('data').user.token}`
        }
    });
    console.log('restItems', response.data)
    return response.data;
}
