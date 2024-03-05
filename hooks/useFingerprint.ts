import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { useAsync } from 'react-use';

export const useFingerprint = () => {
    const state = useAsync(async () => {
        return getFingerprint();
    }, []);

    return state;
};
