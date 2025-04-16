/*
スタンプを押したことを外部システムへPOSTする
*/

// スタンプ情報をPOSTするURL
const POST_URL = "http://hoge.com/api/stamp";


// スタンプが追加された旨をPOSTする（非同期で実行し、クライアント側へは特に通知しない）
export const postStamp = (userId:string, stampId:string) => {
    fetch(POST_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, stampId }),
    })
    .then((res) => {
        if (!res.ok) throw new Error('通信エラー');
        return res.json();
    })
    .then(() => {
        console.log(`スタンプ「${stampId}」を獲得しました！`);
    })
    .catch(() => {
        console.log('通信に失敗しました。もう一度お試しください。');
    });
}
