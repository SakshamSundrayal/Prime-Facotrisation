const inp = document.getElementById('num');
const printArea = document.getElementById('main-area');

inp.addEventListener('input', () => {
    let value = inp.value;
    let factors = [];
        for (let f = 2; f <= value;)
        {
            if (value % f == 0) {
                factors.push(f);
                value = value / f;
            }
            else {
                f++;
            }
        }

    printArea.innerText = factors;
});
