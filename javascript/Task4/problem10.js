function filp_even_odd(numbers) {
let nums = numbers.map((element) => {
        element = (element % 2 == 0) ? ++element : --element;
return element;
});
return nums;
}
