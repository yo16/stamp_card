
// クッキーの有効期限
const COOKIE_EXPIRATION_TIME = 86400;


// クッキーからユーザーIDを取得する or 作成する
export const getOrCreateUniqueUserId = ():string => {
    const key = 'user_id';
    const match = document.cookie.match(new RegExp(`${key}=([^;]+)`));
    if (match) return match[1];
    const id = crypto.randomUUID();

    // １日だけ有効なクッキーを作成する
    setCookie(key, id);

    return id;
}

// クッキーから文字列の配列を取得する
export const getCookieValues = (key: string):string[] => {
    const match = document.cookie.match(new RegExp(`${key}=([^;]+)`));
    if (match) return match[1].split(',');
    return [];
}

// クッキーを設定する
export const setCookie = (key:string, value:string) => {
    document.cookie = `${key}=${value}; path=/; max-age=${COOKIE_EXPIRATION_TIME}`;
}

// クッキーを削除する
export const deleteCookie = (key:string) => {
    document.cookie = `${key}=; path=/; max-age=0`;
}

// Cookieが有効かどうかを確認する
export const checkCookieEnabled = (): boolean => {
    const testKey = 'cookie_test';
    document.cookie = `${testKey}=1; max-age=10; path=/`;
  
    const match = document.cookie.match(new RegExp(`${testKey}=([^;]+)`));
    const result = !!match;
  
    // テスト用Cookieを削除（副作用防止）
    document.cookie = `${testKey}=; max-age=0; path=/`;
  
    return result;
};
