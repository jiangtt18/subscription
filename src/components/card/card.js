import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './card.module.css';

const Card = ({ children, className, rounded, ...rest }) => {
    return (
        <div className={classNames(styles.card, className, { [styles.rounded]: rounded })} {...rest}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    rounded: PropTypes.bool,
};

Card.defaultProps = {
    className: '',
    rounded: false,
};

export default Card;
