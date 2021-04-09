# Novel-Writing-Template

このプロジェクトは執筆用のテンプレートです。
Draftフォルダ以下にあるテキストファイル .txt を結合して、publishフォルダに出力します。
執筆を助ける textlint の設定も、とりあえず入れておきました。

## プロジェクトの初期設定

```
% npm init 
```

## 起動

```
% gulp
```
## 出力

Draft内のテキストファイルを保存すると、ファイルを結合して、ターミナルに全てのテキストの文字数を表示します。

```
[11:29:51] Finished 'cleaning' after 160 ms
[11:29:51] Starting 'chapter'...
./Draft 1
./00話プロローグ 2
./01 第1話 奇妙な依頼 3
./01 第1話 奇妙な依頼/1 第0話プロローグ 4
./01 第1話 奇妙な依頼/2 コヴフェ 5
...
./15 第15話 54
[11:29:51] Finished 'chapter' after 522 ms
[11:29:51] Starting 'countstat'
...
[11:29:52] 002-00話プロローグ.txt : 10,980 characters
[11:29:52] 004-1 第0話プロローグ.txt : 1,180 characters
[11:29:52] 005-2 コヴフェ.txt : 7,050 characters
[11:29:52] 006-3 アマソナスの村.txt : 7,085 characters
...
[11:29:52] 053-5 圧倒.txt : 2,358 characters
[11:29:52] Total : 204,127 characters
[11:29:52] Finished 'countstat' after 114 ms
[11:29:52] Starting 'novel'...
[11:29:52] Finished 'novel' after 32 ms
```