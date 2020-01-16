import React from 'react';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import styles from './button.module.css'

const ButtonTemplate = (props) => {
    const {variant, onClick, disabled} = props;
        return(
            <Button
                disabled={disabled}
                className={classNames(styles.button)}
                variant={variant}
                onClick={onClick}
            >
                {props.children}
            </Button>
        )
};

export default ButtonTemplate;