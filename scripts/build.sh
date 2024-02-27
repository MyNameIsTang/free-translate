#! /bin/bash

rm -rf build

npm run build

npm run extenal

cp dist/content-script.bundle.js build/content-script.bundle.js
cp dist/service-worker.bundle.js build/service-worker.bundle.js

rm -rf dist

echo "打包编译完成"
