import React, { FC, PropsWithChildren } from 'react';

import createClass from '../../utils/createClass';

const Column: FC<PropsWithChildren> = ({ children }) => {
    return <div className={createClass(['flex', 'flex-col', 'justify-between'])}>{children}</div>
}

export default Column;
