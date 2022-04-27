#!/bin/bash
rm -rf static
rm -rf index.html
cp -r ../HIS/HIS-web/dist/* .

rm -rf h5
cp -r ../HIS/HIS-app/unpackage/dist/build/h5 . 
