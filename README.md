# ts-tdd

## TODO

##### 正常系

- [ ] 上端点と下端点をもつことができる

  - [x] 1, 3 を渡す
    - [x] 上端点として 1 が取得できる
    - [x] 下端点として 3 が取得できる
  - [ ] 上端点と下端点から文字列表記にできる
    - [ ] 1, 3 を渡すと"[1,3]"にできる
  - [ ] 指定した整数を含むのか判定できる
    - [ ] "[1,3]"に 4 を入れると False を得る
    - [ ] "[1,3]"に 1 を入れると True を得る
    - [ ] "[1,3]"に 2 を入れると True を得る

##### エラー系

- [ ] 大小逆の上端点、下端点はもつことができない

  - [ ] 2, 1 を渡すとエラーとメッセージで停止

※ 渡す: class のコンストラクタにわたす

※ 指定: 含有判定メソッドにわたす
