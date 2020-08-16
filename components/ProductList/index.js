import React from "react";
import { observer } from "mobx-react";

//Stores
import productStore from "../../stores/ProductStore"

//Styles
import { List, Content, Spinner } from "native-base";

//Components
import ProductItem from "./ProductItem";

const ProductList = () => {
    if (productStore.loading) return <Spinner />;

    const productList = productStore.products.map((product) => (
        <ProductItem product={product} key={product.id} />
    ));
    return (
        <Content>
            <List>{productList}</List>
        </Content>
    );
}
export default observer(ProductList);