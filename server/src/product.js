const axios = require('axios');
const xmlParser = require('xml2json');
const { MyHeader, endpoint } = require('./helpers/global');

async function getProduct(req, res) {
    const { page } = req.params;

    const {data} = await axios({
                        method: 'get',
                        url: `${endpoint}/prodservices/product/listing?page=${page}`,
                        headers: MyHeader,
                    });

    const xml = data;
    return xmlParser.toJson(xml)
}

async function getProductDetail(req, res) {
    const { productid } = req.params;

    const {data} = await axios({
                        method: 'get',
                        url: `${endpoint}/prodservices/product/details/${productid}`,
                        headers: MyHeader,
                    });

    const xml = data;
    return xmlParser.toJson(xml)
}

module.exports = {
    getProduct,
    getProductDetail,
};
