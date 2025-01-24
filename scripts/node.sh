#!/bin/sh

cd node
npm install --audit=false --fund=false --loglevel=error --progress=false
npm run build
cd ..
