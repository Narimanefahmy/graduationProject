import React, {Component} from 'react';
import Header from "./common/header";
import Footers from "./common/footers";

//For Others route calling this layout
class Layout extends Component {
    render() {
        return (
            <>
                <Header/>
                {this.props.children}
                <Footers/>
            </>
        );
    }
}

export default Layout;
