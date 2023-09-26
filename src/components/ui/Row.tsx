import React, { FC, PropsWithChildren } from 'react';

import createClass from '../../utils/createClass';

const Row: FC<PropsWithChildren> = ({ children }) => {
    return <div className={createClass(['flex', 'justify-between'])}>{children}</div>
}

export default Row;
