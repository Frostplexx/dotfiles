#!/bin/bash

# Check if current device is mac or x86-linux
if [[ "$OSTYPE" == "darwin"* ]]; then
	IS_MAC=true
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
	IS_MAC=false
else
	echo "Unsupported OS, cannot continue (See README.md)"
	exit 1
fi

if [ "$IS_MAC" = true ]; then
	# Check if brew is installed
	if ! command -v brew >/dev/null; then
		echo "Homebrew is not installed, please install it first (https://brew.sh/)"
		exit 1
	fi
    
    echo "Installing npm, ripgrep, tmux, lazygit and fzf..."

    # Install neovim and npm (npm is needed for language servers)
	brew install npm ripgrep fzf tmux lazygit git

    # Ask if the user wants to install neovim or neovim nightly
    read -p "Do you want to install neovim (1) or neovim nightly? (2)" -n 1 -r
	echo
	if [[ $REPLY =~ ^[1]$ ]]; then
		brew install neovim
    else 
        brew install neovim --HEAD
	fi


	# Check if user is using zrsh or bash
	if [ -n "$ZSH_VERSION" ]; then
		#Append to .zshrc
		echo "alias vim=nvim" >>~/.zshrc
	elif [ -n "$BASH_VERSION" ]; then
		# Append to .bashrc
		echo "alias vim=nvim" >>~/.bashrc
	else
		echo "Not zsh or bash, cannot continue"
	fi

    # Install font
    ./scripts/helpers/install_fonts.sh


else # If using Linux
    # TODO
	# Append to .bashrc
	echo 'export PATH="$PATH:/opt/nvim/"' >>~/.bashrc
	echo "alias vim=nvim" >>~/.bashrc
fi

# Restore dotfiles using backup_dotfiles.sh
./scripts/back_up_dotfiles.sh -r

echo "Installing neovim config"
git clone https://github.com/Frostplexx/vim-config.git ~/.config/nvim
ln -s ~/.config/nvim/.ideavimrc ~/.ideavimrc


# Run neovim
nvim
