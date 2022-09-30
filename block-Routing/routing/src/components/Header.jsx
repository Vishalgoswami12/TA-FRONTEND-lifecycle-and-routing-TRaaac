import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        {this.props.state ? <h3>Dashboard</h3> : ''}
        <h5>
          <i onClick={this.props.handleClick} className="fas fa-stream"></i>
        </h5>
      </div>
    );
  }
}
export default Header;