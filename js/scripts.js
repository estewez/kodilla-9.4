function drawTree(number) {
    var branch = '';
    for (var i = 0; i < number; i++) {
        for (var j = 0; j <= i; j++) {
            branch += '*';
        }
        console.log(branch);
        branch = '';
    }
    console.log('');
}
function drawStraightTree(num) {
    var branch = '';
    for (var i = 0; i < num; i++) {
            for (var j = 0; j <= (num - i - 2); j++) {
                branch += ' ';
            }
            for (var k = 0; k <= i; k++) {
                branch += '* ';
            }
        console.log(branch);
        branch = '';
    }
    console.log('');
}
drawTree(5);
drawStraightTree(5);
drawStraightTree(6);
drawStraightTree(7);