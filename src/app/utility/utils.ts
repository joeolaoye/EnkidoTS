export class Utils {
    // utility function to convert base 10 integer to base 58 string
    static encode(num) {
        const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
        const base = alphabet.length; // base is the length of the alphabet (58 in this case)

        let encoded = '';
        while (num) {
            const remainder = num % base;
            num = Math.floor(num / base);
            encoded = alphabet[remainder].toString() + encoded;
        }
        return encoded;
    }
}