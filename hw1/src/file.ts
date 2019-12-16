//1. реализовать метод, принимающий строку и возвращающий является ли она палиндромом

function isPalindromeString(str: string) {
    let i: number;
    if (!str)
        return false;
    for (i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1))
            return false;
    }
    return true;
}

console.log(isPalindromeString('assa'));

//2. реализовать метод который принимает число натуральное(int >0)и выдает массив чисел Фибоначчи до заданного числа
// fn(2) => [1,1]
// fn(4) => [1,1,2,3]

function fibonacciArray(fibonacciNumber: number) {
    let i: number;
    let fibonacci: Array<number> = [];
    if (fibonacciNumber > 0){
       for (i = 0; i < fibonacciNumber; i++){
           if (fibonacci.length < 2){
               fibonacci.push(1);
           } else if (fibonacci[i - 1] + fibonacci[i - 2] <= fibonacciNumber){
               fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
           }
       }
       return fibonacci;
    }
}

console.log(fibonacciArray(10));