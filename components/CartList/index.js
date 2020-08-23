import React from "react";
import { observer } from "mobx-react";

//Stores
import cartStore from "../../stores/CartStore"
import productStore from "../../stores/ProductStore"

//Components
import CartItem from "./CartItem";

//Styles
import { Content, List } from "native-base";
import { CheckoutButton, CheckoutButtonText } from "./styles";
import authStore from "../../stores/authStore";

const CartList = ({ navigation }) => {

    const handleCheckout = () => {
        if (authStore.user) cartStore.checkoutCart;
        else navigation.navigate("Signin")
    }

    const cartList = cartStore.items
        .map((item) => ({
            ...productStore.getProductById(item.productId),
            quantity: item.quantity,
        }))
        .map((item) => <CartItem item={item} key={item.name} />);

    return (
        <Content>
            {cartList}
            <CheckoutButton onPress={cartStore.checkoutCart}>
                <CheckoutButtonText>{authStore.user ? "Checkout" : "Signin to Checkout "}</CheckoutButtonText>
            </CheckoutButton >
        </Content>
    );
}
export default observer(CartList);