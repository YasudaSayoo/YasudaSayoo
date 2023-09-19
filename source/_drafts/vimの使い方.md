---
title: vimの使い方
tags:
---

# VIMの使い方

## visual model

- `v` ：**Visual Model** に移る
- `V` ：`行選択`
- `Ctrl+v` ：`矩形選択`
- `o` ：で反対側を操作できる

## カーソル移動

- `h` ：←
- `j` ：↑
- `k` ：↓
- `l` ：→

## カーソルを大きく動かすコマンド

word: 記号や空白で区切られた文字の集まりを`word`という
WORD: 空白で区切られた文字の集まりを`word`という

> `word/WORD`で移動
- `w` は右の word の先頭にジャンプ
- `e` は右の word の終端にジャンプ
- `b` は左の word の先頭にジャンプ


> 目で見てるところにカーソルを持っていける

- `t{char}`
- `T{char}`
- `f{char}`
- `F{char}`


- `*` でカーソル下の単語を検索
- `n` で次の結果にジャンプ(循環)

拡張コマンド
```md
`/{pattern}` で文字検索
`N` で前にジャンプ
`g*` で完全一致ではなく部分一致で検索
```

### 文字を消す

- `{select}x` ：選択範囲を消す
- `d{motion}` ：{motion}でカーソルが一回動いた部分を消す
  - `dh` `dl` `d^` `d$` など

> 文字を消して **Insert Mode** に移る
- `{select}c` ：
- `c{motion}` ：

拡張コマンド
```md
`Substitute の s` 
`C` 
`S` 
```

### 文字をコピーする

- `{select}y` ：
- `y{motion}` ：

### 文字転換

> 文字を大文字にする
- `{select}U`
- `gU{motion}`

> 文字を小文字にする
- `{select}u`
- `gu{motion}`


## テクニック


## 1. Text Objects

- `x` `gu` `c`
- `a`|`i` は `a` が範囲ごてで、`i` が範囲内
- 範囲はいろいろ決まってる
  - **word** `w`
  - `"`、`'`、`{`、`(`、`<`、`[`など、
  - **HTML Tag** の `t`
  - など

## 2. `.`



# Vim入門Vol.2

## `Insert Mode`

- `i` ：
- `I` ：
- `a` ：
- `A` ：
- `o` ：
- `O` ：

 覚え方：Insert、Append


> 消しつつ書く

- `s` ：
- `C` ：
- `S` ：


```text
return $render(['result' => 'ok', 'message' => 'success.'])

let user = findBy(id)

```


