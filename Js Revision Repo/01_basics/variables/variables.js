var num = 10;
var num = 50;
console.log(num);
num = 70;
console.log(num);

let a = 20;
a = 90;
console.log(a);
// let a = 50;  => it Will give the Redeclared Error because we can't redeclare with same name in same scope.

const ab = 30;
// ab = 40 => it will give error becasue it can't update it is constant variable.

/*
 *  - Inside the JS we can declare the varible in 3 types
        -Var =>
            -var is function scope varialbe, 
            -we can hoisted by declare with var keyword. 
            -in var we can inistilized variable and declare and redecalre the variable
        -Let => 
            -let is block scope variable. 
            -we can not hoisted by let declare becase variable goes in TDZ.
            -in let we can inistilized and decalre but on redecalre the variable.
        -const => 
            -Const is Constant Variable. 
            -same as let in hoisted case.
            - we can't update and redinitilzed
 */
