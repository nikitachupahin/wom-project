import React from 'react';
import LogoIcon from '../../assets/logo.svg'; 
import styles from "./Logo.module.scss";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <img src={LogoIcon} className={styles.logo} alt="Logo" />
        </div>
    );
};