const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#operands-operator");
const total = document.querySelector('#equal');
let ctr = 0;


const screen2 = document.querySelector("#equalTo");
for (let button of buttons) {
    button.addEventListener('click', () => {
        if (ctr == 0) {
            switchingCase(button.value);
        }
        else {
            switchingCase2(button.value);

        }
    })
}
// buttons[17].addEventListener('click', () => {
//     let val = eval(screen.innerText);
//     screen.innerText = val;



// })

function switchingCase(v) {
    let k;
    switch (v) {
        case '1': screen.innerText = screen.innerText + '1';
            console.log('hello')
            break;
        case '2': screen.innerText = screen.innerText + '2';
            break;
        case '3': screen.innerText = screen.innerText + '3';
            break;
        case '4': screen.innerText = screen.innerText + '4';
            break;
        case '5': screen.innerText = screen.innerText + '5';
            break;
        case '6': screen.innerText = screen.innerText + '6';
            break;
        case '7': screen.innerText = screen.innerText + '7';
            break;
        case '8': screen.innerText = screen.innerText + '8';
            break;
        case '9': screen.innerText = screen.innerText + '9';
            break;
        case '0': screen.innerText = screen.innerText + '0';
            break;
        case '.':
            k = errorDoubleOperand(screen.innerText)
            if (k = 1)
                screen.innerText = screen.innerText + '.';
            break;
        case '-': k = errorDoubleOperand(screen.innerText)
            if (k = 1) {
                screen.innerText = screen.innerText + '-';
                ctr = 1;
            }


            break;
        case '+': k = errorDoubleOperand(screen.innerText)
            if (k = 1) {
                screen.innerText = screen.innerText + '+'; ctr = 1;
            }


            break;
        case '/': k = errorDoubleOperand(screen.innerText)
            if (k = 1) {
                screen.innerText = screen.innerText + '/';
                ctr = 1;

            }
            break;
        case '*': k = errorDoubleOperand(screen.innerText)
            if (k = 1) {
                screen.innerText = screen.innerText + '*';
                ctr = 1;
            }



            break;


        case 'AC':
            screen.innerText = '';
            break;
        case ' del':

            screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
            break;




    }

}
function switchingCase2(v) {
    let k;

    switch (v) {


        case '1': screen.innerText = screen.innerText + '1';
            console.log('hello')
            break;
        case '2': screen2.innerText = screen2.innerText + '2';
            break;
        case '3': screen2.innerText = screen2.innerText + '3';
            break;
        case '4': screen2.innerText = screen2.innerText + '4';
            break;
        case '5': screen2.innerText = screen2.innerText + '5';
            break;
        case '6': screen2.innerText = screen2.innerText + '6';
            break;
        case '7': screen2.innerText = screen2.innerText + '7';
            break;
        case '8': screen2.innerText = screen2.innerText + '8';
            break;
        case '9': screen2.innerText = screen2.innerText + '9';
            break;
        case '0': screen2.innerText = screen2.innerText + '0';
            break;
        case '.':
            k = errorDoubleOperand(screen2.innerText)
            if (k = 1)
                screen2.innerText = screen2.innerText + '.';
            break;
        case '-': k = errorDoubleOperand(screen2.innerText)
            if (k = 1)


                screen2.innerText = screen2.innerText + '-';
            break;
        case '+': k = errorDoubleOperand(screen2.innerText)
            if (k = 1)
                screen2.innerText = screen2.innerText + '+';
            break;
        case '/':
            k = errorDoubleOperand(screen2.innerText)
            if (k = 1)
                screen2.innerText = screen2.innerText + '/';
            break;
        case '*':
            k = errorDoubleOperand(screen2.innerText)
            if (k = 1)
                screen2.innerText = screen2.innerText + '*';
            break;


        case 'AC':
            screen.innerText = '';
            break;
        case ' del':

            screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
            break;
        case '=':
            ctr = 0;
            let val = eval(screen.innerText + screen2.innerText);
            screen2.innerText = '';
            screen.innerText = val;

            break;




    }

}
function errorDoubleOperand(s) {
    let m;
    console.log('enetered');

    if ('.+*/-'.indexOf(s.charAt(length - 2)) === 0) {
        console.log('+* /-'.indexOf(s.charAt(length - 1)));
        m = 1;
        console.log('true');
    }

    else {
        console.log('+* /-'.indexOf(s.charAt(length - 1)));
        m = 0;
        console.log('false');
    }

    return m;
}