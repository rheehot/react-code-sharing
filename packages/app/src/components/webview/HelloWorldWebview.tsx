import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { WebViewMessageEvent } from "react-native-webview/lib/WebViewTypes";
import styled from "styled-components/native";

import RNWebview from "src/components/webview/RNWebview";
import { routes } from "src/configs/webview";

const Content = styled(RNWebview)`
  width: 300px;
  height: 300px;
`;

class HelloWorldWebview extends Component {
  public webview = React.createRef<RNWebview>();

  public componentDidMount() {
    this.webview.current?.sendPostMessage({ message: "helloworld" });
  }

  public render() {
    return (
      <Content
        ref={this.webview}
        source={{ uri: routes.helloworld }}
        onMessage={this.onMessage}
      />
    );
  }

  private onMessage = (event: WebViewMessageEvent) => {
    // TODO
  };
}

export default HelloWorldWebview;