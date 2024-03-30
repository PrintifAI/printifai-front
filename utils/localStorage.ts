export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string): T | null => {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return null;
        }

        return JSON.parse(value);
    } catch (e) {
        return null;
    }
};
