/**
 * URLからドメイン名を抽出します。
 * wwwがドメインの前にある場合、それも取り除きます。
 * 
 * @param url - ドメイン名を抽出したい完全なURL
 * @returns ドメイン名、もしくはエラーの場合はnull
 */
export const extractDomain = (url: string): string | null => {
  try {
      const parsedUrl = new URL(url);         // URLを解析
      const hostname = parsedUrl.hostname;    // ホスト名（ドメイン名）を取得
      return hostname.startsWith('www.') ? hostname.slice(4) : hostname;  // www.で始まる場合、それを取り除く
  } catch (error) {
      console.error("Invalid URL provided:", url);  // 不正なURLが提供された場合のエラーメッセージ
      return null;
  }
}

/**
 * YouTubeのURLからvideoIdを抽出します。
 * 
 * @param url - YouTubeのURL
 * @returns videoId、もしくはURLが不正な場合はnull
 */
export const extractYouTubeVideoId = (url: string): string => {
  // YouTubeのURLの正規表現パターン
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return '';
  }
}
