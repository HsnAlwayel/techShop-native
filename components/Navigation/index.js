import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import VendorList from '../VendorList';
import ProductList from '../ProductList';
import CartList from '../CartList';
import CartButton from '../Buttons/CartButton';
import Signin from '../authentication/Signin'
import Signup from '../authentication/Signup';

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
    return (
        <Navigator initialRouteName={"Signin"}
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#90d4ed",
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Screen name="Vendors" component={VendorList} options={{
                headerRight: () => <CartButton />
            }} />
            <Screen name="Products"
                component={ProductList}
                options={({ route }) => {
                    const { vendor } = route.params;
                    return {
                        title: vendor.name,
                        headerRight: () => <CartButton />
                    };
                }}
            />
            <Screen name="Cart" component={CartList} />
            <Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Navigator>
    )
};

export default RootNavigator;