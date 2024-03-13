export const addQueryParamToPath = ({
    pathname,
    query,
    params,
}: {
    pathname: string;
    query: URLSearchParams;
    params: Record<string, string>;
}): string => {
    const newQuery = new URLSearchParams(query);

    Object.entries(params).forEach(([name, value]) => {
        if (!value) {
            newQuery.delete(name);
        } else {
            newQuery.set(name, value);
        }
    });

    const newQueryString = newQuery.toString();
    return newQueryString ? `${pathname}?${newQueryString}` : pathname;
};
