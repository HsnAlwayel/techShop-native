import React from "react";
import { observer } from "mobx-react";

//Styles
import { ListItem, Body, Text, Right } from "native-base";
import { TotalPrice, TrashIcon } from "./styles";

//Stores
import cartStore from "../../stores/CartStore";

const CartItem = ({ item }) => {
    return (
        <ListItem>
            <Body>
                <Text>{item.name}</Text>
                <Text note>
                    {item.price} KD x {item.quantity}
                </Text>
                <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
            </Body>
            <Right>
                <TrashIcon
                    name="trash"
                    type="Ionicons"
                    onPress={() => cartStore.removeItemFromCart(item.id)}
                />
            </Right>
        </ListItem>
    );
};

export default observer(CartItem);