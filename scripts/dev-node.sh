#!/bin/sh

cd node
npm install --audit=false --fund=false --loglevel=error --progress=false
npm run dev-build
cd ..
rm -rf ./node/node_modules/
