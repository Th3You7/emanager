import React from "react";
import {
  Document,
  Text,
  View,
  Page,
  Image,
  PDFDownloadLink,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";

export default function InvoiceScreen() {
  return (
    <>
      <Document style={{ display: "inline-block", width: "100%" }}>
        <Page
          style={{ width: "100%", display: "inline-block", padding: "16px" }}
        >
          <View style={{ display: "flex" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "0 1 50%",
              }}
            >
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                Jabri Store
              </Text>
              <Text>Youssef Jabri</Text>
              <Text>Bradia Centre, Fquih Ben Salah</Text>
              <Text>23302</Text>
            </View>

            <View style={{ textAlign: "right", flex: "0 1 50%" }}>
              <Text style={{ fontSize: "45px" }}>Invoice</Text>
            </View>
          </View>
          <View style={{ display: "flex", marginTop: "48px" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "0 1 50%",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#292b2c",
                  marginBottom: "5px",
                }}
              >
                Bill To
              </Text>
              <Text>Younes Elbasiri</Text>
              <Text>Bradia</Text>
            </View>
            <View style={{ flex: "0 1 50%" }}>
              <View style={{ marginBottom: "5px", display: "flex" }}>
                <View style={{ flex: "0 1 40%" }}>
                  <Text style={{ fontWeight: "bold" }}>Invoice</Text>
                </View>
                <View style={{ flex: "0 1 60%" }}>
                  <Text>INV-125468</Text>
                </View>
              </View>
              <View style={{ marginBottom: "5px", display: "flex" }}>
                <View style={{ flex: "0 1 40%" }}>
                  <Text style={{ fontWeight: "bold" }}> Invoice Date</Text>
                </View>
                <View style={{ flex: "0 1 60%" }}>
                  <Text>Apr, 21 2021</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: "30px",
              backgroundColor: "#292b2c",
              display: "flex",
            }}
          >
            <View
              style={{
                flex: "0 1 15%",
                padding: "4px 8px",
                textAlign: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Qty</Text>
            </View>
            <View style={{ flex: "0 1 55%", padding: "4px 8px" }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Description
              </Text>
            </View>

            <View
              style={{
                flex: "0 1 15%",
                padding: "4px 8px",
                textAlign: "right",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Unit Price
              </Text>
            </View>

            <View
              style={{
                flex: "0 1 15%",
                padding: "4px 8px",
                textAlign: "right",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Amount</Text>
            </View>
          </View>
          <View style={{ display: "flex" }}>
            <View
              style={{
                flex: "0 1 15%",
                padding: "4px 8px 10px",
                textAlign: "center",
              }}
            >
              <Text style={{ color: "#292b2c" }}>2</Text>
            </View>
            <View style={{ flex: "0 1 55% ", padding: "4px 8px 10px" }}>
              <Text style={{ color: "#292b2c" }}>Yeezy Adidas</Text>
            </View>
            <View
              style={{
                flex: "0 1 15%",
                padding: "4px 8px 10px",
                textAlign: "right",
              }}
            >
              <Text style={{ color: "#292b2c" }}>100</Text>
            </View>
            <View
              style={{
                flex: "0 1 15%",
                padding: "4px 8px 10px",
                textAlign: "right",
              }}
            >
              <Text style={{ color: "#292b2c" }}>200</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              textAlign: "right",
              display: "flex",
            }}
          >
            <View style={{ flex: "0 1 40%", marginTop: "8px" }}>
              <View
                style={{
                  backgroundColor: "#e3e3e3",
                  padding: "5px",
                  display: "flex",
                }}
              >
                <View
                  style={{
                    flex: "0 1 50%",
                    padding: "5px",
                    textAlign: "right",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>TOTAL</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flex: "0 1 50%",
                    justifyContent: "flex-end",
                    padding: "5px",
                  }}
                >
                  <Text
                    style={{
                      color: "#292b2c",
                      fontWeight: "bold",
                      marginLeft: "30px",
                    }}
                  >
                    $
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#292b2c",
                    }}
                  >
                    100
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: "30px", display: "block" }}>
            <Text style={{ flex: "0 1 100%", fontWeight: "bold" }}>Notes</Text>
            <Text style={{ flex: "0 1 100%", marginLeft: "16px" }}>
              it was great doing business with you
            </Text>
          </View>
        </Page>
      </Document>
    </>
  );
}
