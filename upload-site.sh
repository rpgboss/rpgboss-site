#!/bin/bash
set -e

SRC_DIR=$(cd "$(dirname "$0")"; pwd)

jekyll build

rsync -avz --progress --delete-before -e ssh $SRC_DIR/_site/* mathim.com:/home/tommycli/rpgboss
