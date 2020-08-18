import React from "react";
import { observer } from "mobx-react";

//Stores
import productStore from "../../stores/ProductStore"

//Styles
import { List, Content, Spinner, Title } from "native-base";

//Components
import ProductItem from "./ProductItem";

const ProductList = ({ navigation, route }) => {
    if (productStore.loading) return <Spinner />;
    const { vendor } = route.params;

    const productList = vendor.products.map((product) => productStore.getProductById(product.id))
        .map((product) => <ProductItem product={product} key={product.id} />)
    return (
        <Content>
            <Title style={{ color: "black" }}>{vendor.name}</Title>
            <List>{productList}</List>
        </Content>
    );
}
export default observer(ProductList);