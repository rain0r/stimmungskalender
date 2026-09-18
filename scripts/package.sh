#!/bin/sh

version="2.0.0"

docker build --force-rm --no-cache \
    -t "rain0r/stimmungskalender:${version}" \
    -t "rain0r/stimmungskalender:latest" \
    -f ./docker/app/Dockerfile .

# docker push "rain0r/stimmungskalender:${version}"
# docker push "rain0r/stimmungskalender:latest"

