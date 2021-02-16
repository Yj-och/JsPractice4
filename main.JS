'use strict';

function outputFixedLogs(){
    console.log('========================')
    console.log('現在持っているのタスク一覧')
    console.log('========================')
}

const todos = ['［内容］机を片付ける、［ジャンル］掃除', '内容］牛乳を買う、［ジャンル］買い物', '内容］散歩をする、［ジャンル］運動'];
const commands = ['［内容］机を片付ける、［ジャンル］掃除', '内容］牛乳を買う、［ジャンル］買い物', '内容］散歩をする、［ジャンル］運動','[内容］寝る、［ジャンル］睡眠'];

outputFixedLogs();
todos.forEach((todo, index) => {
    console.log(`${index} : ${todo}`)
});

if (prompt('「確認、追加、削除、終了」のいずれかを入力してください') === '寝る');
(prompt('タスクを入力してください') === '睡眠');
(alert('新しいタスクが追加されました'));
outputFixedLogs();
commands.forEach((command, index) => {
    console.log(`${index} : ${command}`)
});
