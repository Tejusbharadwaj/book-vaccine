import crypto from "crypto";
import { getConfig } from "../utils.js";
import { getUrl, postUrl } from "./ApiBase.js";

const config = getConfig()

export async function login() {
    const phone = config.phone;
    try {
        const resp = await postUrl(config.api.login, { "mobile": phone });
        return resp.data.txnId;
    } catch (error) {
        console.error("Erroor while logging in");
        process.exit(1);
    }
}

export async function getToken(otp, txnId) {
    const body = {
        "otp": hashOtp(otp),
        "txnId": txnId
    }
    try {
        const resp = await postUrl(config.api.getToken, body);
        return resp.data.token;
    } catch (error) {
        process.exit(1);
    }
}


function hashOtp(pass) {
    let otp = crypto.createHash("sha256").update(pass).digest("hex");
    return otp;
};