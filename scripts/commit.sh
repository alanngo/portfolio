git pull origin master
git status
echo "enter files to add" && read FILES
git add $FILES
git status
echo "enter commit message"
read MESSAGE
git commit -m "$MESSAGE"
echo "enter branch to push to" && read BRANCH
git push origin $BRANCH