function choice(arr) {
    const idx = Math.floor(Math.random(arr) * arr.length);

    return arr[idx];
}

export { choice }
