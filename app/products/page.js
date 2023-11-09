"use client";
import React from "react";
import Padded from "../layout/padded";
import FlexCol from "../layout/flex-col";
import MainHeading from "../layout/main-heading";
import Products from "./products";
import AddProduct from "./add-product";
import { ItemsContextProvider } from "../context/items-context";

export default function Page() {
  return (
    <ItemsContextProvider>
      <Padded>
        <FlexCol>
          <MainHeading>Products</MainHeading>
          <FlexCol>
            <AddProduct />
            <Products />
          </FlexCol>
        </FlexCol>
      </Padded>
    </ItemsContextProvider>
  );
}
