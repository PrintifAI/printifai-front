export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string): unknown | null => {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return value;
        }

        return JSON.parse(value);
    } catch (e) {
        console.log(e);
    }
};
