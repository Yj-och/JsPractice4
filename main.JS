'use strict';

const outputFixedLogs = [
    { content: '========================' },
    { content: '現在持っているのタスク一覧' },
    { content: '========================' },
];

const tasks = [
    { content: '［内容］机を片付ける', genre: '［ジャンル］掃除 ' },
    { content: '［内容］牛乳を買う', genre: '［ジャンル］買い物' },
    { content: '［内容］散歩をする', genre: '［ジャンル］運動 ' },
];


const pushItem = [
    { content: ' [内容］寝る', genre: '［ジャンル］睡眠 ' },
];

// outputFixedLogs();
// console.log(tasks[0].content,tasks[0].genre)
// console.log(tasks[1].content,tasks[1].genre)
// console.log(tasks[2].content,tasks[2].genre)
// const afterKey = prompt('タスクを入力してください');

// let gets = get => tasks.push('内容］寝る', '［ジャンル］睡眠')
// console.log(gets)
outputFixedLogs.forEach((outputFixedLog) => {
    console.log(`${outputFixedLog.content}`);
});

tasks.forEach((task, index) => {
    console.log(`${index}: ${task.content} ${task.genre}`);
});

const str = prompt('「確認、追加、削除、終了」のいずれかを入力してください');
const afterKey = prompt('タスクを入力してください');
