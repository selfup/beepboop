#!/usr/bin/env bash

set -eou pipefail

git add .
git commit -m "compile docs"
git push origin HEAD
git checkout main
