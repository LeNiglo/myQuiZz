#!/bin/sh

php app/console server:start ; npm start ; php app/console server:stop
