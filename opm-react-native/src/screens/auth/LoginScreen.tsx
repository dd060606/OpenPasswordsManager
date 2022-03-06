import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
  View,
} from "react-native";
import { withTranslation, WithTranslation } from "react-i18next";
import { getIconFromName, getImageFromName } from "../../utils/ImageUtils";

import { Text, Button, StyledButton } from "../../components/OPMComponents";
import { Input } from "../../components/Input";

import type { LoginProps } from "../../App";

import { loginStyles as styles, commonStyles } from "../../styles/AuthStyles";

type State = {
  email: string;
  password: string;
  fieldsValid: {
    email: boolean;
    password: boolean;
  };
  errorModalVisible: boolean;
};

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&_]{8,}$/;

class LoginScreen extends Component<LoginProps & WithTranslation, State> {
  state = {
    email: "",
    password: "",
    fieldsValid: {
      email: true,
      password: true,
    },
    errorModalVisible: false,
  };

  handleChangeEmail(newEmail: string) {
    this.setState({
      email: newEmail,
      fieldsValid: {
        ...this.state.fieldsValid,
        email: !newEmail ? true : emailRegex.test(newEmail),
      },
    });
  }

  handleChangePassword(newPassword: string) {
    this.setState({
      password: newPassword,
      fieldsValid: {
        ...this.state.fieldsValid,
        password: !newPassword ? true : passwordRegex.test(newPassword),
      },
    });
  }
  handleLogin = () => {};

  render() {
    const { email, password, fieldsValid, errorModalVisible } = this.state;
    const { t } = this.props;
    return (
      <KeyboardAvoidingView
        style={commonStyles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
      >
        <Image style={commonStyles.logo} source={getImageFromName("logo")} />
        <Text style={commonStyles.title}>{t("auth.login")}</Text>
        <Input
          placeholder={t("auth.email")}
          isValid={fieldsValid.email}
          value={email}
          onChangeText={(text) => this.handleChangeEmail(text)}
          autoCorrect={false}
          autoCompleteType="email"
          keyboardType="email-address"
          icon={getIconFromName("email")}
        />
        <Input
          placeholder={t("auth.password")}
          isValid={fieldsValid.password}
          value={password}
          onChangeText={(text) => this.handleChangePassword(text)}
          autoCorrect={false}
          autoCompleteType="password"
          password={true}
          icon={getIconFromName("key")}
        />

        <Button title={t("auth.login")} onPress={this.handleLogin} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={errorModalVisible}
          onRequestClose={() => {
            this.setState({ errorModalVisible: false });
          }}
        >
          <View style={commonStyles.centeredView}>
            <View style={commonStyles.modalView}>
              <Image
                style={commonStyles.modalImg}
                source={getIconFromName("error")}
              />
              <Text style={commonStyles.title}>{t("error")}</Text>

              <Text style={commonStyles.modalText}>
                {t("auth.errors.complete-all-fields")}
              </Text>
              <Button
                onPress={() => this.setState({ errorModalVisible: false })}
                style={commonStyles.modalButton}
                textStyle={commonStyles.modalButtonText}
                title={t("ok")}
              />
            </View>
          </View>
        </Modal>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    );
  }
}

export default withTranslation()(LoginScreen);
