import React from "react";
import PropTypes from "prop-types";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    position: "relative",
    backgroundColor: "#d4ebf2",
    margin: "30px 50px",
    padding: "15px 25px 25px",
    flexGrow: 1,
    maxHeight: "250px",
    borderRadius: "7px",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: "100%",
    maxHeight: "250px",
    objectFit: "cover",
    opacity: 0.2,
  },
});

// eslint-disable-next-line no-unused-vars
function UserIdCard({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image
            src="/assets/images/residential-building.png"
            style={styles.backgroundImage}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/assets/images/sangham_logo.png"
              style={{ width: "80px", height: "70px" }}
            />
            <Image
              src="/assets/images/aptbks_Logo.png"
              style={{ width: "auto", height: "30px", marginLeft: 9 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <Image
              src="/assets/images/passport_pic.jpg"
              style={{ width: "100px", height: "110px" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "50px",
                marginTop: "-15px",
                color: "#1B7DA6",
              }}
            >
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                SURYA GOURAB MISHRA
              </Text>
              <Text style={{ fontSize: "16px", fontWeight: "medium" }}>
                Trustee Member
              </Text>
              <Text style={{ fontSize: "16px", fontWeight: "medium" }}>
                TM240001
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "12px",
              gap: "30",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "50px",
              }}
            >
              <Image
                src="/assets/images/Daco_5862611.png"
                style={{ width: "auto", height: "20px" }}
              />
              <Text
                style={{
                  fontSize: "8px",
                  fontWeight: "medium",
                  color: "#1B7DA6",
                }}
              >
                Authorized Signature
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontWeight: "semibold",
                  color: "#1B7DA6",
                }}
              >
                President
              </Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                src="/assets/images/Daco_5864567.png"
                style={{ width: "50px", height: "20px" }}
              />
              <Text
                style={{
                  fontSize: "8px",
                  fontWeight: "medium",
                  color: "#1B7DA6",
                }}
              >
                Authorized Signature
              </Text>
              <Text
                style={{
                  fontSize: "8px",
                  fontWeight: "semibold",
                  color: "#1B7DA6",
                }}
              >
                Secretary
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Image
            src="/assets/images/residential-building.png"
            style={styles.backgroundImage}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/assets/images/sangham_logo.png"
              style={{ width: "80px", height: "70px" }}
            />
            <Image
              src="/assets/images/aptbks_Logo.png"
              style={{ width: "auto", height: "30px", marginLeft: 9 }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1B7DA6",
              }}
            >
              Address:
            </Text>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1B7DA6",
              }}
            >
              Address Line 1| House No., Apartment, Society
            </Text>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1B7DA6",
              }}
            >
              Address Line 2| Locality, District, State, Pincode
            </Text>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1B7DA6",
              }}
            >
              +91 contact@allindiakapusangam.com
            </Text>
            <Text
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1B7DA6",
                marginTop: "20px",
              }}
            >
              040 2761 2388 | +91 9999998980
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default UserIdCard;

UserIdCard.propTypes = {
  data: PropTypes.func.isRequired,
};
