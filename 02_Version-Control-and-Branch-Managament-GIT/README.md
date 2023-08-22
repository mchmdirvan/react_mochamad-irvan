# (02) Version Control and Branch Management GIT

1. Versioning mengatur versi dari source code program dan GIT adalah salah satu version control system.
2. Commit harus menggunakan pesan yang jelas, bisa menggunakan add-ons semantic commit message
3. GIT Cheatsheet

git config -> set username dan email
git existing project -> masuk ke dalam project dengan clone [web] + cd [project]

stagging area
working directory di vs code
git add -> sending to stagging area
git commit -m"[spesific update]" -> repository / wraping
git push [origin] -> sending to respitory

git diff and stah
git diff -> cross-check changes
git stash apply -> memasukan stash
pop -> memunculkan, drop -> menghapus, latest -> paling terakhir, apply -> memasukan

inspecting repository
git log, checkout
git log --oneline -> to show all saving commit
git checkout [code] -> to call previous commit

git reset
--soft : uncommit changes, changes are left staged (index)
--hard : uncommit + unstage + delete changes, nothing left.
git reset [code] --soft/--hard

syncing
git push,fetch, pull
git pull origin [main] -> mengembalikan yang ada di repository
