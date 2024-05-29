import axios from "axios";

const baseURL = "localhost:5000";

const getProduct = async (id) => {
    const res = await axios.get(`${this._apiBase}/products/${id}`);
    return _transformProduct(res.data.results[0]);
};

const _transformProduct = (item) => {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        thumbnail: item.thumbnail_url,
        currency: item.currency_code,
        price: item.max_price,
    };
};

export default getProduct;
