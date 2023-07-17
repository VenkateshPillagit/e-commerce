import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  value, styleType, type, theme, ...props
}) {
  const css = {
    backgroundColor: theme.backgroundColor,
    borderColor: '#fff',
    color: theme?.fontColor,
  };
  return (
    <div className="button-container">
      <button type={type || 'button'} {...props} style={{ ...css }}>
        {value}
        {' '}
      </button>
    </div>
  );
}

Button.defaultProps = {
  theme: {},
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  styleType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  theme: PropTypes.objectOf(PropTypes.oneOf([
    PropTypes.string,
  ])),
};

export default Button;
