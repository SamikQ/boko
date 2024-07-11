import axios from "axios";

const baseURL = "http://localhost:5000";

const getProduct = async (id) => {
    const res = await axios.get(`${baseURL}/products/${id}`);
    return _transformProduct(res.data);
};

const getNewProducts = async () => {
    const res = await axios.get(`${baseURL}/products`);
    return res.data.map(_transformProduct);
};

const _transformProduct = (item) => {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        thumbnail: item.thumbnail_url,
        currency: item.currency_code,
        price: item.max_price,
        dimensions: item.dimensions,
    };
};

export default getProduct;
