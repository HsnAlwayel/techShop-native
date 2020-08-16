import React from "react";
import { Text } from "react-native";
import { ListItem } from "native-base";
import { VendorItemStyled } from "../VendorList/styles";

const ProductItem = ({ product }) => {
    return (
        <ListItem>
            <VendorItemStyled>{product.name}</VendorItemStyled>
        </ListItem>
    );
};

export default ProductItem;