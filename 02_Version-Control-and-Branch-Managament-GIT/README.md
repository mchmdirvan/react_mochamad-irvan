# (02) Version Control and Branch Management GIT
- GIT adalah salah satu version control system yang digunakan untuk mengatur versi dari source code program
- Commit harus menggunakan pesan yang jelas, bisa menggunakan add-ons semantic commit message

# GIT Cheatsheet
- git config -> set username dan email
- git existing project -> masuk ke dalam project dengan clone [web] + cd [project]

## stagging area
- working directory di vs code
- git add -> sending to stagging area
- git commit -m"[spesific update]" -> repository / wraping
- git push [origin] -> sending to respitory

## git diff and stah
- git diff -> cross-check changes
- git stash apply -> memasukan stash
- pop -> memunculkan, drop -> menghapus, latest -> paling terakhir, apply -> memasukan

## inspecting repository
- git log, checkout
- git log --oneline -> to show all saving commit
- git checkout [code] -> to call previous commit

## git reset
- --soft : uncommit changes, changes are left staged (index)
- --hard : uncommit + unstage + delete changes, nothing left.
- git reset [code] --soft/--hard

## syncing
- git push,fetch, pull
- git pull origin [main] -> mengembalikan yang ada di repository


# Example of Pull Request
## Description
Integrate endpoint /V1/analytics/merchant/detail for merchant chart detail

Fixes #2179
img 

## Type of change
please delete options that are not relevant.
- bug Fixes
- new features

## how has this been tested?
run yarn jest -i __tests__/pages/analytics/index.test.tsx inside backoffside-dashboard folder to run single test file for analytics page.
