declare let process: {
    env: {
        REACT_APP_ENDPOINT: string;
    };
};

export const MyHeader = {
    "Content-Type": "application/json",
}

export const MyEndpoint: string = process.env.REACT_APP_ENDPOINT;