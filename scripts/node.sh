#!/bin/sh

cd node
mkdir .temp
npm install --audit=false --fund=false --loglevel=error --progress=false
npm run build
cd ..
