var num = 99;
var line = '';
var newLine = '';

while (num <= 99 && num >= 0) {
    if (num !== 1 && num !==0) {
        line = (num+" bottles of juice on the wall! " + num +" bottles of juice! Take one down, pass it around... " );
        newLine =newLine+line;
    } else if (num===1) {
        line2 = (num+" bottle of juice on the wall! " + num +" bottle of juice! Take one down, pass it around... " );
        newLine = newLine+line2;
    } else {
        line4 = (num+" bottles of juice on the wall!" );
        newLine = newLine+line4;
    }
    num = num-1;
}
console.log(newLine);