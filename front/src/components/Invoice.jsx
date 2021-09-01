import React from "react";
import {
  Document,
  Text,
  View,
  Page,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import InvoiceProductSection from "./InvoiceProductSection";

const styles = StyleSheet.create({
  page: {
    width: "100%",
    display: "inline-block",
    padding: "16px",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 48,
  },
  store: {
    display: "flex",
    flexDirection: "column",
    flex: "0 1 50%",
  },
  logo: {
    flex: "0 1 50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  billInfo: {
    display: "flex",
    flexDirection: "row",
  },

  billTo: {
    display: "flex",
    flexDirection: "column",
    flex: "0 1 50%",
    marginBottom: 20,
  },

  billDetails: {
    flex: "0 1 50%",
  },
});

export default function Invoice({ data }) {
  const { client, invoiceId, products, date, total, paymentMethod, advance } =
    data;

  return (
    <>
      <Document>
        <Page style={styles.page} size="A4">
          <View style={styles.flex}>
            <View style={styles.store}>
              <Text
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: 12,
                }}
              >
                Jabri Store
              </Text>
              <Text>Youssef Jabri</Text>
              <Text>Bradia Centre, Fquih Ben Salah</Text>
              <Text>23302</Text>
            </View>

            <View style={styles.logo}>
              <Image
                src="https://res.cloudinary.com/datlc9ohl/image/upload/v1630519287/437794623_cmtwlm.png"
                style={{ height: 100, width: 100 }}
              />
            </View>
          </View>

          <View style={styles.billInfo}>
            <View style={styles.billTo}>
              <Text
                style={{
                  fontWeight: "bold",

                  marginBottom: "5px",
                }}
              >
                Bill To
              </Text>
              <Text style={{ color: "#292b2c" }}>
                {client.replace(/\b\w/g, (l) => l.toUpperCase())}
              </Text>
            </View>
            <View style={{ flex: "0 1 50%" }} styles={styles.billDetails}>
              <View
                style={{
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: "0 1 40%" }}>
                  <Text style={{ fontWeight: "bold" }}>Invoice</Text>
                </View>
                <View style={{ flex: "0 1 60%" }}>
                  <Text style={{ color: "#292b2c" }}>{invoiceId}</Text>
                </View>
              </View>
              <View
                style={{
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: "0 1 40%" }}>
                  <Text style={{ fontWeight: "bold" }}>Invoice Date</Text>
                </View>
                <View style={{ flex: "0 1 60%" }}>
                  <Text style={{ color: "#292b2c" }}>
                    {date.slice(0, date.indexOf("T"))}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: "30px",
              backgroundColor: "#292b2c",
              display: "flex",
              flexDirection: "row",
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
          <View style={{ display: "flex", flexDirection: "row" }}>
            {products.map((product) => (
              <InvoiceProductSection
                key={product._id}
                name={product.product}
                unitPrice={product.unitPrice}
                qty={Object.keys(product.sizes).reduce(
                  (acc, cur) => acc + product.sizes[cur],
                  0
                )}
              />
            ))}
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              textAlign: "right",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: "0 1 40%", marginTop: "8px" }}>
              <View
                style={{
                  backgroundColor: "#e3e3e3",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "row",
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
                    flexDirection: "row",
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
                    {total}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: "30px", display: "block" }}>
            <Text
              style={{ flex: "0 1 100%", fontWeight: "bold", fontSize: "20px" }}
            >
              Notes
            </Text>
            <Text
              style={{ flex: "0 1 100%", marginLeft: "16px", color: "#292b2c" }}
            >
              Payment Method: {paymentMethod}
            </Text>
            <Text
              style={{ flex: "0 1 100%", marginLeft: "16px", color: "#292b2c" }}
            >
              Advance: {advance}
            </Text>
          </View>
        </Page>
      </Document>
    </>
  );
}
