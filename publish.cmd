pushd ..\weight-calendar
del /S *.html
del /S *.js
del /S *.css
del /S *.json
popd
call yarn prod:build
pushd ..\weight-calendar
git add -A
git commit -m "Update" --allow-empty
git push origin master
popd
