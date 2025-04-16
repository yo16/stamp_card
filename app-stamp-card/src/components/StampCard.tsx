/*
StampCard
*/
import { useEffect, useState } from 'react';

import {
    getOrCreateUniqueUserId,
    getCookieValues,
    setCookie,
    deleteCookie,
    checkCookieEnabled,
} from '../utilities/cookieUtils';

//import { StampCardViz1 } from './StampCardViz1';
import { StampCardViz2 } from './StampCardViz2';
//import { postStamp } from '../utilities/postStamp';




export const StampCard = () => {
    const [userId, setUserId] = useState<string>(getOrCreateUniqueUserId());
    const [stampIds, setStampIds] = useState<string[]>(getCookieValues("stamp_ids"));
    const [cookieEnabled] = useState<boolean>(checkCookieEnabled());

    // 新しいスタンプを、stampIdsに追加し、クッキーを更新する
    const addNewStamp = (newStampId:string) => {
        // 今回のスタンプIDが、存在していなければ追加する
        if (!stampIds.includes(newStampId)) {
            const newStampIds = [...stampIds, newStampId];

            // state値を更新
            setStampIds(newStampIds);

            // クッキーを更新
            setCookie('stamp_ids', newStampIds.join(','));
        }
    }

    useEffect(() => {
        const params: URLSearchParams = new URLSearchParams(window.location.search);
        const newStampId: string | null = params.get("stampId");
        if (newStampId) {
            // スタンプIDが指定されている場合、stampIdsに追加し、クッキーを更新する
            addNewStamp(newStampId);

            // 新しいスタンプ情報を、別のサーバーへPOST
            //postStamp(cookieUserId, newStampId);
        }

        // クッキーの削除パラメータがあった場合は、削除する
        const initializeParam: string | null = params.get("initialize");
        if (initializeParam) {
            deleteCookie('user_id');
            deleteCookie('stamp_ids');
            setUserId(getOrCreateUniqueUserId());
            setStampIds([]);
        }
    }, []);

    return (
        <div>
            <h1>Stamp Card</h1>
            <StampCardViz2 userId={userId} stampIds={stampIds} />

            <hr />
            <h1>テスト</h1>
            <div>
                dev toolのアプリケーション＞Cookie と同期がとれていることを確認すること。
            </div>
            <div>
                stamp1
                <button onClick={() => {
                    window.location.href = '?stampId=stamp1';
                }}>獲得</button>
            </div>
            <div>
                stamp2
                <button onClick={() => {
                    window.location.href = '?stampId=stamp2';
                }}>獲得</button>
            </div>
            <div>
                stamp3
                <button onClick={() => {
                    window.location.href = '?stampId=stamp3';
                }}>獲得</button>
            </div>
            <div>
                <button onClick={() => {
                    window.location.href = '?initialize=true';
                }}>初期化</button>
            </div>

            <hr />
            <div>
                <p>ブラウザ設定で、Cookieが有効かどうか</p>
                <p>{cookieEnabled ? '有効' : '無効'}</p>
            </div>
        </div>
    )
}

