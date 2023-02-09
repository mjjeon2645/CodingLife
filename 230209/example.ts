type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

const bear = getBear();
console.log(bear.name);
console.log(bear.honey);
