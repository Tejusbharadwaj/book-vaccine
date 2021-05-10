import axios from "axios";
const headers = {
    "Accept": "application/json",
    "Accept-Language": "hi_IN",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
};

export async function getUrl(url, params) {
    try {
        const allHeaders = { ...headers, ...params.headers };
        const response = await axios.get(url, { headers: allHeaders });
        return response;
    } catch (error) {
        console.error(error);
    }
}


export async function postUrl(url, body, params) {
    try {
        const allHeaders = { ...headers, ...params };
        const response = await axios.post(url, body, { headers: allHeaders });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

// module.exports = { getUrl: getUrl, postUrl: postUrl }