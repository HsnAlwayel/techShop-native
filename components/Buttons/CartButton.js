import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { CartButtonStyled, CartTextStyled } from "./styles";
import { Button } from "native-base";
import cartStore from "../../stores/CartStore";
import { observer } from "mobx-react";

const CartButton = () => {
    const navigation = useNavigation();

    return (
        <Button transparent light onPress={() => navigation.navigate("Cart")}>
            <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
            <CartButtonStyled
                type="MaterialCommunityIcons"
                name="cart"
                onPress={() => navigation.navigate("Cart")}
            />
        </Button>
    )
};

export default observer(CartButton);