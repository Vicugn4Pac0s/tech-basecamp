import Inner from "../components/inner";
import MediaIndex from "../components/mediaIndex";
import Mv from "../components/mv";

export default function Media() {
  return (
    <main>
      <Mv
        title="メディア一覧"
        description="テキストが入ります。テキストが入ります。テキストが入ります。"
      ></Mv>
      <Inner>
        <MediaIndex></MediaIndex>
      </Inner>
    </main>
  );
}
