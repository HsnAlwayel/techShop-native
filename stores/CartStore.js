import { computed, decorate, observable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
    items = [];

    fetchCart = async () => {
        const items = await AsyncStorage.getItem("myCart");
        this.items = items ? JSON.parse(items) : [];
    };

    addItem = async (newItem) => {
        const foundItem = this.items.find(
            (item) => item.productId === newItem.productId
        );
        if (foundItem) {
            foundItem.quantity += newItem.quantity;
        } else {
            this.items.push(newItem);
        }
        await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    }

    removeItemFromCart = async (itemId) => {
        this.items = this.items.filter((item) => item.productId !== itemId);
        await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    };

    checkoutCart = () => {
        this.items = [];
        alert("Checkiiiing ouuuuuuuut");
    };

    get totalQuantity() {
        let total = 0;
        this.items.forEach((item) => (total += item.quantity));
        return total;
    }
}

decorate(CartStore, {
    items: observable,
    totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;