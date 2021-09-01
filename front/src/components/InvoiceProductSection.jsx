import { Text, View } from "@react-pdf/renderer";
import React from "react";

export default function InvoiceProductSection({ name, qty, unitPrice }) {
  return (
    <>
      <View
        style={{
          flex: "0 1 15%",
          padding: "4px 8px 10px",
          textAlign: "center",
        }}
      >
        <Text style={{ color: "#292b2c" }}>{qty}</Text>
      </View>
      <View style={{ flex: "0 1 55% ", padding: "4px 8px 10px" }}>
        <Text style={{ color: "#292b2c" }}>{name}</Text>
      </View>
      <View
        style={{
          flex: "0 1 15%",
          padding: "4px 8px 10px",
          textAlign: "right",
        }}
      >
        <Text style={{ color: "#292b2c" }}>{unitPrice}</Text>
      </View>
      <View
        style={{
          flex: "0 1 15%",
          padding: "4px 8px 10px",
          textAlign: "right",
        }}
      >
        <Text style={{ color: "#292b2c" }}>{unitPrice * qty}</Text>
      </View>
    </>
  );
}
