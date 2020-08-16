import { decorate, observable } from "mobx";
import instance from "./instance";

class ProductStore {
    products = [];
    loading = [];
    fetchProducts = async () => {
        try {
            const response = await instance.get("/products");
            this.products = response.data;
            this.loading = false;
        } catch (error) {
            console.error("ProductStore -> fetchProducts -> error", error);
        }
    };


    getProductById = (productId) => {
        return this.products.find((product) => product.id === productId);
    }
}

decorate(ProductStore, {
    products: observable,
    loading: observable,
});

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;