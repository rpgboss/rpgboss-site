#!/bin/bash
set -e

jekyll build

rsync -avz --progress --delete-before -e ssh $SRC_DIR/_site/* mathim.com:/home/tommycli/rpgboss
