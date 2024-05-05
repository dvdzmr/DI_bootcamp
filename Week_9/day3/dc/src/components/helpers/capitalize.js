export function capitalizeString(str) {
    const first = str[0].toUpperCase();
    const rest = str.slice(1);
    return first + rest;
}