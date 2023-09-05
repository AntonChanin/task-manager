import React, { FC, PropsWithChildren } from 'react';

import tailwindcssStyles from '../../assets/styles';
import createClass from '../../utils/createClass';
import { PaperProps } from '../../types/ui';

const Paper: FC<PropsWithChildren<Partial<PaperProps>>> = (props) => {
    const {
        className = 'drop-shadow-md bg-white',
        variant = 'primary',
        theme = 'light',
        children,
    } = props
    return (
        <div className={createClass([`${className}`, tailwindcssStyles['ui']['paper'][variant](theme)])}>
            {children}
        </div>
    );
};

export default Paper;
