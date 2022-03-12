export default function getUniqueKey(digit = 6) {
    return Math.random().toString().slice(2, digit + 2)
}