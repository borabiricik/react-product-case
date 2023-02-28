import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { instance } from "../../core/utils/axios";

export interface Rating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface IInitialState {
  products: IProduct[] | null;
  currentProduct: null | IProduct;
  isLoading: boolean;
}

const initialState: IInitialState = {
  products: null,
  currentProduct: null,
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await instance.get("/products");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id: string) => {
    try {
      const { data } = await instance.get(`/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers({ addCase }) {
    addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
        state.isLoading = false;
      }
    );
    addCase(getSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    addCase(getSingleProduct.fulfilled, (state, action) => {
      state.currentProduct = action.payload;
      state.isLoading = false;
    });
  },
});

export default productsReducer.reducer;
