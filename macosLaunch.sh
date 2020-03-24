#!/bin/sh
echo "Launching api rtmpserver and client terminals..."

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

osascript -e 'tell app "Terminal" to do script "cd '$DIR'/api/ && npm start"'

osascript -e 'tell app "Terminal" to do script "cd '$DIR'/rtmpserver/ && npm start"'

osascript -e 'tell app "Terminal" to do script "cd '$DIR'/client/ && npm start"'
