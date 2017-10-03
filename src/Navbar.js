import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Col from './Col';
import Icon from './Icon';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.renderSideNav = this.renderSideNav.bind(this);
  }

  componentDidMount () {
    if (typeof $ !== 'undefined') {
      $('.button-collapse').sideNav(this.props.options);
    }
  }

  renderSideNav () {
    return (
      <ul id='nav-mobile' className='side-nav'>
        {this.props.children}
      </ul>
    );
  }

  render () {
    const {
      brand,
      className,
      fixed,
      left,
      right,
      href,
      brandLogo,
      ...other
    } = this.props;

    delete other.options;

    let classes = {
      right: right,
      left: left,
      'hide-on-med-and-down': true
    };

    let brandClasses = {
      'brand-logo': true,
      left: right,
      right: left
    };
    if (brandLogo === undefined) {
      let content = (
        <nav {...other} className={className}>
          <div className={'nav-wrapper ' + className}>
            <Col s={12} className={className}>
              <a href={href} className={cx(brandClasses)}>{brand}</a>
              <ul className={cx(className, classes)}>
                {this.props.children}
              </ul>
              {this.renderSideNav()}
              <a className='button-collapse' href='#' data-activates='nav-mobile'>
                <Icon>view_headline</Icon>
              </a>
            </Col>
          </div>
        </nav>
      );
      if (fixed) {
        content = <div className='navbar-fixed'>{content}</div>;
      }
      return content;
    } else {
      var divLogoStyle = {
        backgroundImage: 'url(' + brandLogo + ')',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all', // 'ms' is the only lowercase vendor prefix
        minWidth: '120px',
        minHeight: '20px',
        top: '17px'
      };

      let content = (
        <nav {...other} className={className}>
          <div className='nav-wrapper '>
            <Col s={12}>
              <a href={href} className={cx(brandClasses)} style={divLogoStyle}>{brand}</a>
              <ul className={cx(className, classes)}>
                {this.props.children}
              </ul>
              {this.renderSideNav()}
              <a className='button-collapse' href='#' data-activates='nav-mobile'>
                <Icon>view_headline</Icon>
              </a>
            </Col>
          </div>
        </nav>
    );
      if (fixed) {
        content = <div className='navbar-fixed'>{content}</div>;
      }
      return content;
    }
  }
}

Navbar.propTypes = {
  brand: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  brandLogo: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  href: PropTypes.string,
  /**
   * Makes the navbar fixed
   */
  fixed: PropTypes.bool,
  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: PropTypes.shape({
    menuWidth: PropTypes.number,
    edge: PropTypes.oneOf(['left', 'right']),
    closeOnClick: PropTypes.bool,
    draggable: PropTypes.bool
  })
};

Navbar.defaultProps = {
  href: '/',
  options: {}
};

export default Navbar;
