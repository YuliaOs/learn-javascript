// обращение к элементу отталкиваясь от родителя:
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

//получение элемента отталкиваясь от абсолютно любого элемента на странице: (указывая родителя)
// console.log(document.querySelector('#current').parentNode.parentNode);

//получение следующего эл-та (перенос строки)
// console.log(document.querySelector('[data-current="3"]').nextSibling);
//получение предыдущего эл-та (элемента)

console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//получение эл-тов в body
for (let node of document.body.childNodes) {
             if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}
