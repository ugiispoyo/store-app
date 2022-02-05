declare let process: {
    env: {
        REACT_APP_ENDPOINT: string;
        REACT_APP_KEY: string;
    };
};

export const MyHeader = {
    "Content-Type": "application/xml",
    "Access-Control-Allow-Origin": "*",
    "Accept-Charset": "utf-8",
    'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "openapikey": process.env.REACT_APP_KEY
}

export const MyEndpoint: string = process.env.REACT_APP_ENDPOINT;