import { readFileSync } from 'fs';


export function getConfig() {
    const config = JSON.parse(readFileSync(new URL('../config/config.json', import.meta.url)));
    return config
}

