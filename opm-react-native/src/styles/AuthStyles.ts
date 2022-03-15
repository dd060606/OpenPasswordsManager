import { StyleSheet } from "react-native";

const authCommonStyles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 250,
    height: 100,
    position: "absolute",
    top: 100,
  },
  title: {
    fontSize: 35,
    fontFamily: "OpenSansBold",
  },
  link: {
    marginTop: 15,
    fontSize: 16,
  },
});

const loginStyles = StyleSheet.create({});

const registerStyles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    marginBottom: 25,
    width: "90%",
  },
});

const emailConfirmationStyles = StyleSheet.create({
  emailText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  confirmEmailText: {
    marginTop: 8,
    fontSize: 17,
    textAlign: "center",
  },
  sendEmailText: {
    marginTop: 8,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
});

export {
  loginStyles,
  registerStyles,
  authCommonStyles,
  emailConfirmationStyles,
};
