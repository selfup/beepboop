#!/usr/bin/env bash

set -eou pipefail

npm run build 

mkdir -p docs

rm -rf docs/*

cp -R build/* docs/
