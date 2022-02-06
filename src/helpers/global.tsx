declare let process: {
    env: {
        REACT_APP_ENDPOINT: string;
        REACT_APP_KEY: string;
    };
};

export const MyHeader = {
    "Content-Type": "application/xml",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Accept-Charset": "utf-8",
    "openapikey": process.env.REACT_APP_KEY
}

export const MyEndpoint: string = process.env.REACT_APP_ENDPOINT;