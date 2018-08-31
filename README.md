## 操作步骤
### 拉代码
1. git clone https://github.com/lisancai511/lagou.git
2. cd lagou
3. git checkout '自己的分支' (例：git checkout dev-lisc)

### 提交代码
1. git add . 
2. git commit -m '本次提交的信息'
3. git pull origin '自己的分支' (例：git pull origin dev-lisc)
4. git push origin '自己的分支'
5. git checkout develop
6. git pull origin develop
7. git merge '自己的分支' (例：git merge dev-lisc)
8. git push origin develop

### 切记
1. 提交完代码一定要切回自己的分支。
2. 整体思路： 每个人都在自己的分支开发，开发完之后先提交到自己的分支，然后切换到develop分支拉取最新的代码，然后把自己的代码合并到develop分支上面，最后推送到develop分支。