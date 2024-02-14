#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Loading scripts..."
else
	echo "Unsupported OS, cannot continue (See README.md)"
	exit 1
fi

# Install Homebrew if it doesn't exist
if ! command -v brew >/dev/null; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Install fzf if it doesn't exist
if ! command -v fz >/dev/null; then
    brew install fzf
fi


selected=$(find ./scripts -type f -mindepth 1 -maxdepth 1 | fzf)

if [ -n "$selected" ]; then
    echo "Running $selected"
    source $selected
    ./start.sh
else
    echo "No script selected"
fi
