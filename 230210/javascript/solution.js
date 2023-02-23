// function solution(s){
//     const sToArray = s.split('');
//     const stack = [];

//     for(let i = 0; i < sToArray.length; i += 1) {
//         if (!stack.length) {
//             stack.push(sToArray[i]);
//             continue;
//         }

//         if (stack[stack.length - 1] === '(' && sToArray[i] === ')') {
//             stack.pop();
//             continue;
//         }

//         stack.push(sToArray[i]);
//     }

//     return !stack.length ? true : false;
// }

// 스택 문제라고 하더라도 굳이 스택을 쓰지 않아도 된다.
// 우선 위에 있는 것은 최대 10만글자를 split해야 하면 배열 메모리가...
// so. count를 + 하거나 - 하는 것으로 stack처럼 활용
// function solution(s) {
//     let count = 0;

//     for (const char of s) {
//         if (char === '(') {
//             count += 1;
//         }

//         if (char !== '(') {
//             if (count === 0) {
//                 return false;
//             }

//             count -= 1;
//         }
//     }

//     return count === 0;
// }

// priorities의 길이 -> 대기목록. 작업의 갯수
// location이 내가 인쇄하려고 하는 문서의 어떤 위치에 있는지. -> index임
// max값을 먼저 구하고 그 max값의 findIndex를 한다음에 그걸 기준으로 slice한 다음에 뒤쪽에 있는 배열

/* 큐 구현해보기 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        }

        if (this.head !== null) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }
}
