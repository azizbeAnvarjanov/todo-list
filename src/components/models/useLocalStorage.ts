export const useLocalStorage = (key: string) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : []
}