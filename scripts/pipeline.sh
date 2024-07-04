#!/usr/bin/env bash

set -eou pipefail

./scripts/build.sh
./scripts/deploy.sh
