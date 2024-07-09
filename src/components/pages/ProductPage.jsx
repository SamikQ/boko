import { useParams } from "react-router-dom";
import ProductInfo from "../product-info/ProductInfo";

const ProductPage = () => {
    const { id } = useParams();
    return (
        <>
            <ProductInfo productId={id} />
        </>
    );
};

export default ProductPage;
