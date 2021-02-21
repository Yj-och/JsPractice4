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


outputFixedLogs.forEach((outputFixedLog) => {
    console.log(`${outputFixedLog.content}`);
});

tasks.forEach((task, index) => {
    console.log(`${index}: ${task.content} ${task.genre}`);
});

tasks.push({ content: '[内容］寝る', genre: '［ジャンル］睡眠 ' });

const a = b => tasks.push({ content: '[内容］寝る', genre: '［ジャンル］睡眠 ' });


const str = prompt('「確認、追加、削除、終了」のいずれかを入力してください');
const afterKey = prompt('タスクを入力してください');
if (afterKey) {
    alert('タスクが入力されました');
}

outputFixedLogs.forEach((outputFixedLog) => {
    console.log(`${outputFixedLog.content}`);
});

tasks.forEach((task, index) => {
    console.log(`${index}: ${task.content} ${task.genre}`);
});

