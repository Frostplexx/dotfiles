#!/bin/bash

brew update

echo "Installing CaskaydiaCove Nerd Font"
brew tap homebrew/cask-fonts
brew install --cask font-caskaydia-cove-nerd-font

echo "Installing SF Mono Nerd Font"

brew tap epk/epk
brew install --cask font-sf-mono-nerd-font
