#!/bin/bash

if [ -f process.pid ]; then
    PID=$(<process.pid)
    kill -9 $PID
fi

node index.js &
