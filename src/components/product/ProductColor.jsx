const ProductColor = (props) => {
    // const onRenderSize = (arr) => {
    //     return (
    //         <div className="colors">
    //             {arr.map((prop, index) => (
    //                 <span
    //                     className="color active"
    //                     primary="#FAE7CD"
    //                     color="beige"></span>
    //             ))}
    //         </div>
    //     );
    // };
    // const content = onRenderSize(props);

    return (
        <div className="color-container">
            <div className="colors">
                <span
                    className="color active"
                    primary="#FAE7CD"
                    color="beige"></span>

                <span className="color" color="red"></span>
                <span
                    className="color"
                    primary="#01337A"
                    color="blueBright"></span>
            </div>
        </div>
    );
};

export default ProductColor;
