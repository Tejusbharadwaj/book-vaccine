import axios from "axios";

export async function getUrl(url, params) {
    try {
        const response = await axios.get(url, params);
        return response
    } catch (error) {
        console.error(error);
    }
}


export async function postUrl(url, body, headers) {
    try {
        const response = await axios.post(url, body, { headers: headers });
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }
}

// module.exports = { getUrl: getUrl, postUrl: postUrl }