//1. реализовать метод, принимающий строку и возвращающий является ли она палиндромом

function isPalindromeString(str: string): boolean {
    if (!str)
        return false;
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - i - 1))
            return false;
    }
    return true;
}

console.log(isPalindromeString('assa'));

//2. реализовать метод который принимает число натуральное(int >0)и выдает массив чисел Фибоначчи до заданного числа
// fn(2) => [1,1]
// fn(4) => [1,1,2,3]

function fibonacciArray(fibonacciNumber: number): Array<number> {
    let fibonacci: Array<number> = [];
    if (fibonacciNumber <= 0) return fibonacci;
    for (;;) {
        let {length} = fibonacci;
        if (length < 2){
            fibonacci.push(1);
            continue;
        }
        
        let nextValue = fibonacci[length - 1] + fibonacci[length - 2];
        if (nextValue < fibonacciNumber){
            fibonacci.push(nextValue);
        } else {
            break;
        }
    }
    return fibonacci;
}

console.log(fibonacciArray(10));
