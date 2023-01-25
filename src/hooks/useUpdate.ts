import { useEffect } from 'react';

const useUpdate = (callback: () => void, dependency: any[]) => {
    useEffect(() => callback(), dependency);
};

export default useUpdate;
