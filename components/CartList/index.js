import React from "react";
import { observer } from "mobx-react";

//Stores
import cartStore from "../../stores/CartStore"
import productStore from "../../stores/ProductStore"

//Components
import CartItem from "./CartItem";

//Styles
import { Content, List } from "native-base";

const CartList = () => {
    // if (productStore.loading) return <Spinner />;
    // const { vendor } = route.params;

    const cartList = cartStore.items
        .map((item) => ({
            ...productStore.getProductById(item.productId),
            quantity: item.quantity,
        }))
        .map((item) => <CartItem item={item} key={item.name} />);
    return (
        <Content>
            <List>{cartList}</List>
        </Content>
    );
}
export default observer(CartList);