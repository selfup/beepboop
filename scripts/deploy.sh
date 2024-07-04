#!/usr/bin/env bash

set -eou pipefail

git add .
git commit "compile docs"
git push origin HEAD
git checkout main
