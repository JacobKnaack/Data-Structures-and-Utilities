#!/usr/bin/env bash
# This code base is maintained using the Github super linter

if [ -x "$(command -v docker)" ]; then
    echo "Update docker"
    # command
else
    echo "Install docker"
    # command
fi