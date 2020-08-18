import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";

//Styles
import { ListItem, Thumbnail, Left, Right, Button, Text } from "native-base";
import { VendorItemStyled } from "../VendorList/styles";

//Stores
import cartStore from "../../stores/CartStore";

const ProductItem = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        const newItem = { quantity, productId: product.id };
        cartStore.addItem(newItem);
    };

    return (
        <ListItem>
            <Left>
                <Thumbnail source={{ uri: product.image ? product.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHeH4SsMYjLj7KP7Otjl_7JJXO8lAaUF0E6Q&usqp=CAU" }} />
                <VendorItemStyled>{product.name}</VendorItemStyled>
            </Left>
            <Right>
                <NumericInput
                    rounded
                    value={quantity}
                    onChange={setQuantity}
                    totalHeight={30}
                    totalWidth={60}
                    initValue={1}
                />
                <Button onPress={handleAdd}>
                    <Text>Add</Text>
                </Button>
            </Right>
        </ListItem>
    );
};

export default ProductItem;