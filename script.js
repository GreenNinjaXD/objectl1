for (let i = 0; i < 10; i++) {
    var a = prompt('Введите имя')
    var b = +prompt('Введите возраст')
}

const users= {
    'Ползователь 1: ':{
        name: a,
        age: b
    },
    'Ползователь 2: ':{
        name: a,
        age: b
    },
    'Ползователь 3: ':{
        name: a,
        age: b
    },
    'Ползователь 4: ':{
        name: a,
        age: b
    },
    'Ползователь 5: ':{
        name: a,
        age: b
    },
    'Ползователь 6: ':{
        name: a,
        age: b
    },
    'Ползователь 7: ':{
        name: a,
        age: b
    },
    'Ползователь 8: ':{
        name: a,
        age: b
    },
    'Ползователь 9: ':{
        name: a,
        age: b
    },
    'Ползователь 1: ':{
        name: a,
        age: b
    }
};

for (const key in users) {
    console.log(key);
    console.log(users[key]); 
}