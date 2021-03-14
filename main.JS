'use strict';

const logs = [
    '========================',
    '現在持っているのタスク一覧',
    '========================'
]

const tasks = [
    { content: '机を片付ける', genre: '掃除 ' },
    { content: '牛乳を買う', genre: '買い物' },
    { content: '散歩をする', genre: '運動' },
];

function fixed(log) {
    console.log(log);
}
logs.forEach(fixed);

tasks.forEach((task, index) => {
    console.log(`${index}: ［内容］${task.content} ［ジャンル］${task.genre}`);
});

const str = prompt('「確認、追加、削除、終了」のいずれかを入力してください');

const taskKey1= window.prompt('タスクを入力してください');

const junreKey= window.prompt('ジャンルを入力してください');

tasks.push({ content: taskKey1, genre: junreKey });

alert('タスクを入力しました')

logs.forEach(fixed);

tasks.forEach((task, index) => {
    console.log(`${index}: ［内容］${task.content} ［ジャンル］${task.genre}`);
});

