export default function colour(bright) {
    let val;

    if (bright) {
        val = 'hsl(' + Math.floor(Math.random() * 360) + ', 80%, 50%)';
    } else {
        val = '#';
        let chars = '1234567890ABCDEF'.split('');
        for (let i = 0; i < 6; i++) {
            val += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    console.log(val);
    return val;
}