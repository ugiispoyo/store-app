const endpoint = 'http://api.elevenia.co.id/rest/';
const key = '721407f393e84a28593374cc2b347a98';

const MyHeader = {
    'Content-Type': 'application/xml',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Accept-Charset': 'utf-8',
    "openapikey": key
}

module.exports = {
    endpoint,
    key,
    MyHeader
}