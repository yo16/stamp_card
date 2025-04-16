# stamp_card
静的なサイトでスタンプカードを実現する

# 技術メモ
- UUIDを生成し、クッキーに保存する
- URLパラメータで、スタンプIDが指定されていたら、クッキーに保存する
- スタンプの確認は、クッキーに保存されているスタンプIDの配列を参照する
- URLパラメータで、初期化パラメータが指定されていたら、クッキーを削除する
    - トラブル時用

# 運用方法
- パラメータ付きURLを、QRコードにして印刷する
- 周遊してほしい場所に、QRコードを貼る
- 最後のスタンプ(QRコード)を、コンプリート景品と交換する場所に置いておけば、交換した印が押されたことになる

