'use strict';

function outputFixedLogs(){
    console.log('========================')
    console.log('現在持っているのタスク一覧')
    console.log('========================')
}

const a = [
    { content: '0 : ［内容］机を片付ける', genre: '［ジャンル］掃除 ' },
    { content: '1 : ［内容］牛乳を買う', genre: '［ジャンル］買い物' },
    { content: '2 : ［内容］散歩をする', genre: '［ジャンル］運動 ' },
    { content: '3 :  [内容］寝る', genre: '［ジャンル］睡眠 ' },
];

outputFixedLogs();
console.log(a[0].content,a[0].genre)
console.log(a[1].content,a[1].genre)
console.log(a[2].content,a[2].genre)

// const crick = true;
const str = prompt('「確認、追加、削除、終了」のいずれかを入力してください');
const afterKey = prompt('タスクを入力してください');

// if (str === '寝る') {
//     (afterKey === '睡眠')
//     outputFixedLogs();
//     console.log(a[0].content, a[0].genre)
//     console.log(a[1].content, a[1].genre)
//     console.log(a[2].content, a[2].genre)
//     console.log(a[3].content, a[3].genre)
//     alert('タスクを追加しました')
// }
