export default function colour(bright = false) {
  if (bright) {
    // generate random 'bright' colour
    return `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
  }
  // generate random hex
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
