import React from "react";
import {
  Document,
  Text,
  View,
  Page,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  doc: {
    display: "inline-block",
  },
  root: {
    display: "inline-block",
    padding: theme.spacing(2, 2),
  },
  title: {
    fontSize: "45px",
  },
  flex: {
    display: "flex",
  },

  flex1: {
    display: "flex",
    marginTop: "48px",
  },

  flex2: {
    display: "flex",
  },

  w50: {
    flex: "0 1 50%",
  },

  company: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  billTo: {
    fontWeight: "bold",
    color: "#292b2c",
    marginBottom: "5px",
  },
}));

export default function InvoiceScreen() {
  const classes = useStyles();
  return (
    <Document className={classes.doc}>
      <Page className={classes.root}>
        {/* <PDFDownloadLink /> */}

        <View className={classes.flex}>
          <View
            className={classes.w50}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* <Image
              placeholder="Your Logo"
              //   value={invoice.logo}
              //   width={invoice.logoWidth}
            /> */}
            <Text className={classes.company}>Jabri Store</Text>
            <Text>Youssef Jabri</Text>
            <Text>Bradia Centre, Fquih Ben Salah</Text>
            <Text>23302</Text>
          </View>
          <View className={classes.w50} style={{ textAlign: "right" }}>
            <Text className={classes.title}>Invoice</Text>
          </View>
        </View>

        <View className={classes.flex1}>
          <View
            className={classes.w50}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Text
              className={classes.billTo}
              //   value={invoice.billTo}
            >
              Bill To
            </Text>
            <Text>Younes Elbasiri</Text>

            <Text placeholder="City, State Zip">Bradia</Text>
          </View>
          <View className={classes.w50}>
            <View className={classes.flex} style={{ marginBottom: "5px" }}>
              <View style={{ flex: "0 1 40%" }}>
                <Text className="bold" style={{ fontWeight: "bold" }}>
                  Invoice
                </Text>
              </View>
              <View style={{ flex: "0 1 60%" }}>
                <Text placeholder="INV-12">INV-125468</Text>
              </View>
            </View>
            <View className={classes.flex} style={{ marginBottom: "5px" }}>
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
          className={classes.flex}
          style={{ marginTop: "30px", backgroundColor: "#292b2c" }}
        >
          <View
            className="w-17 p-4-8"
            style={{ flex: "0 1 15%", padding: "4px 8px", textAlign: "center" }}
          >
            <Text
              className="white bold right"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Qty
            </Text>
          </View>
          <View
            style={{ flex: "0 1 55%", padding: "4px 8px" }}
            className="w-48 p-4-8"
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Description
            </Text>
          </View>

          <View
            className="w-18 p-4-8"
            style={{ flex: "0 1 15%", padding: "4px 8px", textAlign: "right" }}
          >
            <Text
              className="white bold right"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Unit Price
            </Text>
          </View>

          <View
            className="w-18 p-4-8"
            style={{ flex: "0 1 15%", padding: "4px 8px", textAlign: "right" }}
          >
            <Text
              className="white bold right"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Amount
            </Text>
          </View>
        </View>

        {false ? (
          <Text></Text>
        ) : (
          <View className={classes.flex}>
            {/* className="row flex" */}

            <View
              className="w-17 p-4-8 pb-10"
              style={{
                flex: "0 1 15%",
                padding: "4px 8px 10px",
                textAlign: "center",
              }}
            >
              <Text style={{ color: "#292b2c" }}>2</Text>
            </View>
            <View
              className="w-48 p-4-8 pb-10"
              style={{ flex: "0 1 55% ", padding: "4px 8px 10px" }}
            >
              <Text className="dark" style={{ color: "#292b2c" }} rows={2}>
                Yeezy Adidas
              </Text>
            </View>

            <View
              className="w-17 p-4-8 pb-10"
              style={{
                flex: "0 1 15%",
                padding: "4px 8px 10px",
                textAlign: "right",
              }}
            >
              <Text className="dark right" style={{ color: "#292b2c" }}>
                100
              </Text>
            </View>

            <View
              className="w-18 p-4-8 pb-10"
              style={{
                flex: "0 1 15%",
                padding: "4px 8px 10px",
                textAlign: "right",
              }}
            >
              <Text className="dark right" style={{ color: "#292b2c" }}>
                200
              </Text>
            </View>
          </View>
        )}

        <View
          className={classes.flex}
          style={{ justifyContent: "flex-end", textAlign: "right" }}
        >
          <View
            className="w-50 mt-20"
            style={{ flex: "0 1 40%", marginTop: "8px" }}
          >
            <View
              className={classes.flex}
              style={{
                backgroundColor: "#e3e3e3",
                padding: "5px",
              }}
            >
              <View
                className="w-50 p-5"
                style={{ flex: "0 1 50%", padding: "5px", textAlign: "right" }}
              >
                <Text className="bold">TOTAL</Text>
              </View>
              <View
                className={classes.flex}
                style={{
                  flex: "0 1 50%",
                  justifyContent: "flex-end",
                  padding: "5px",
                }}
              >
                {/* className="w-50 p-5 flex" */}
                <Text
                  className="dark bold right ml-30"
                  style={{
                    color: "#292b2c",
                    fontWeight: "bold",
                    marginLeft: "30px",
                  }}
                >
                  $
                </Text>
                <Text
                  className="right bold dark w-auto"
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
          <Text
            className="w-100"
            style={{ flex: "0 1 100%", marginLeft: "16px" }}
          >
            it was great doing business with you
          </Text>
        </View>
      </Page>
    </Document>
  );
}
