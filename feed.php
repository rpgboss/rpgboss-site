<?php
header('Content-Type: text/plain');

$data = file_get_contents("https://github.com/rpgboss/rpgboss/commits/master.atom");

print str_replace("media:thumbnail", "thumbnail", $data);
