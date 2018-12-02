'use strict';

let myString = 'Wisdom comes with winters';
let dots = '...';
let myArray = [13, 0, 8, 19, 8, 7];
let textArray = ['Wisdom', 'comes', 'with', 'winters'];


test('test_string', () => {
    expect(myString.length).toEqual(25);//длина
    expect(myString.charAt(3)).toEqual('d');//доступ к символу
    expect(myString.toUpperCase()).toEqual('WISDOM COMES WITH WINTERS');//смена регистра
    expect(myString.indexOf('With')).toEqual(-1);//поиск подстроки
    expect(myString.substring(13)).toEqual('with winters');//взятие подстроки
    expect(myString.split(' ')).toEqual(['Wisdom', 'comes', 'with', 'winters']);//разбиение строки по сепаратору
    expect(myString.concat(dots)).toEqual('Wisdom comes with winters...'); //конкатенация строк
    expect(myString.replace('winters', dots)).toEqual('Wisdom comes with ...');//замена строки
});

test('test_numbers', () => {
    expect(Number.isNaN(13)).toEqual(false);//является ли значение NaN
    expect(Number.isFinite(13)).toEqual(true);//является ли значение конечным числом
    expect(Number.isInteger(13)).toEqual(true);//является ли тип  значения «числом», а само число целым
    expect(Number.isSafeInteger(13)).toEqual(true);//является ли значение безопасным целым числом
    expect(Number.parseFloat("13")).toEqual(13);//возвращает десятичное число
    expect(Number.parseInt("13.2")).toEqual(13);//возвращает целое число в указанной системе счисления
    expect((13).toExponential()).toEqual("1.3e+1");//возвращает строку, представляющую число в экспоненциальной записи
    expect((13.5567127).toFixed(3)).toEqual("13.557");//округление с указанной точностью
    expect((13).toString(2)).toEqual("1101");//переводит число в указанную систему счисления
    expect((13).valueOf()).toEqual(13);//возвращает примитивное значение указанного объекта
});

test('test_arrays', () => {
    expect(myArray.length).toEqual(6);//длина массива
    expect(Array.from('winter')).toEqual(['w','i','n','t','e','r']);//создаёт новый массив из итерируемого
    expect(Array.isArray([1,2,3])).toEqual(true);//является ли значение массивом
    expect(myArray.fill(13)).toEqual([13, 13, 13, 13, 13, 13]);//заменяет все элементы массива указанным значением
    expect(textArray.sort()).toEqual(['Wisdom', 'comes', 'winters', 'with']);//сортировка элементов
    expect(textArray.pop()).toEqual('with');//удаление последнего элемента
    expect(textArray).toEqual(['Wisdom', 'comes', 'winters']);
    expect(textArray.push('with')).toEqual(textArray.length);//добавление элемента в конец массива
    expect(textArray).toEqual(['Wisdom', 'comes', 'winters', 'with']);
    expect(textArray.reverse()).toEqual(['with', 'winters', 'comes', 'Wisdom']);//элементы в обратном порядке
    expect(textArray.shift()).toEqual('with');//удаляет первый элемент
    expect(textArray).toEqual(['winters', 'comes', 'Wisdom']);
    expect(textArray.unshift('with')).toEqual(textArray.length);//добавляет элемент в начало массива
    expect(textArray).toEqual(['with', 'winters', 'comes', 'Wisdom']);
    textArray.splice(1, 1, 'summers');// после элемента№1 удаляет1 элемент и добавляет указанный
    expect(textArray).toEqual(['with', 'summers', 'comes', 'Wisdom']);
});

test('test_compare_operators', () => {
    expect(13 > 14).toEqual(false);//сравнение
    expect(13 !== 14).toEqual(true);//равенство
    expect(13 + 14).toEqual(27);//сложение
    expect(13 * 5).toEqual(65);//умножение
    expect(13 <= 14  ? "to be" : "not to be").toEqual("to be");//условный оператор
    expect(false > true).toEqual(false); //сравнение
    expect(false >= 0).toEqual(true); //сравнение

});

test('test_equality_comparison_algorithm', () => {//преобразование типов данных
    expect(true + false).toEqual(1);
    expect(12 / "6").toEqual(2);
    expect(15 + 3 + "number").toEqual('18number');
    expect("number" + 15 + 3 ).toEqual('number153');
    expect([1] > null ).toEqual(true);
    expect("foo" + + "bar").toEqual('fooNaN');
    expect(null == '').toEqual(false);
    expect(!+[]+[]+![]).toEqual('truefalse');
    expect([] + null + 1).toEqual('null1');
});
