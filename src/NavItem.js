import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({
  divider,
  children,
  href = '',
  onclick,
  ...props
}) => {
  if (divider) return <li className='divider' />;
  return (
    <li {...props}>
      <a href={href} onclick={onclick} >
        { children }
      </a>
    </li>
  );
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  divider: PropTypes.bool,
  href: PropTypes.string,
  onclick: PropTypes.func
};

export default NavItem;
