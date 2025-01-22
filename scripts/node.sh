#!/bin/sh

cd node
mkdir .temp
npm install --cache .temp --audit=false --fund=false --loglevel=error --progress=false
npm run build
cd ..
