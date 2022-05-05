#!/bin/bash
rm -rf static
rm -rf index.html
cd ../HIS/HIS-web
npm run build:prod
cd ../../HIS-web
cp -r ../HIS/HIS-web/dist/* .

rm -rf h5
cp -r ../HIS/HIS-app/unpackage/dist/build/h5 . 

git add .
git commit -a -m 'update'
git push -u origin main
