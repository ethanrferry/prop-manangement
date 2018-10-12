import React, { Component } from "react";
import HeaderBar from "./headerBar";
import Header from "./header"

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HeaderBar/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
