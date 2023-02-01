import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='footer-wrapper' style={{background: this.props.back}}>
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        )
    }
}

export default Footer;