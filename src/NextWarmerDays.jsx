

function NextWarmerDays() {

    const temp = [73, 74, 75, 71, 69, 72, 76, 73];
    const result = nextWarmerDays(temps);

    // nextWarmerDays function
    function nextWarmerDays(temps) {
        const res = new Array(temps.length).fill(0);
        const stack = [];

        for (let i = 0; i < temps.length; i++) {
            while(stack.length && stack[stack.length - 1] < temps[i]) {
                const idx = stack.pop();
                res[idx] = i - idx;
            }

            stack.push(i);
        }

        return res;
    }
}