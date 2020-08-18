import React from "react";
import { Text } from "react-native";
import { ListItem, Thumbnail } from "native-base";
import { VendorItemStyled } from "./styles"

const VendorItem = ({ vendor, navigation }) => {
    return (
        <ListItem onPress={() => navigation.navigate("Products", { vendor: vendor })}>
            <Thumbnail source={{ uri: vendor.image ? vendor.image : "https://www.kindpng.com/picc/m/73-730024_advanced-technology-icon-png-transparent-png.png" }} />
            <VendorItemStyled>{vendor.name}</VendorItemStyled>
        </ListItem>
    );
};

export default VendorItem;