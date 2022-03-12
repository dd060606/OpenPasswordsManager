import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { withTranslation, WithTranslation } from "react-i18next";
import NavMenu from "@app/components/NavMenu";
import { Text, SafeAreaView } from "@app/components/OPMComponents";
import Loading from "@app/components/Loading";

import type { HomeProps } from "@app/App";

type State = {};

class HomeScreen extends Component<HomeProps & WithTranslation, State> {
  render() {
    return (
      <SafeAreaView>
        <NavMenu navigation={this.props.navigation}></NavMenu>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

export default withTranslation()(HomeScreen);
