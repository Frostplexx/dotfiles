#!/bin/bash

# This Scripts aims to speed up macos by reducing some of its animation speeds


# ==== VARIABLES ====

DOCK_ANIM_SPEED=0.4
LAUNCHPAD_ANIM_SPEED=0.1
LAUNCHPAD_PAGEFLIP_SPEED=0.4
WINDOW_RESIZE_TIME=0.1
# ========
# get the first argument
if [ -z "$1" ]
then
    echo "Error: No argument supplied use -h or --help for help"
    exit
fi

# check if the first argument is -h or --help
if [ "$1" == "-h" ] || [ "$1" == "--help" ]
then
    echo "Usage: ./reduce_macOS_anim_speed.sh [OPTION]"
    echo "Options:"
    echo "  -h, --help      Show this help message"
    echo "  -a, --apply     Apply the animation speed modifications"
    echo "  -r, --restore   Restore to the default settings"
    exit
fi


if [ "$1" == "-a" ] || [ "$1" == "--apply" ]
then
  # Animation Speed increases
  echo "Increasing Dock animation speed."
  defaults write com.apple.Dock autohide-delay -float 0
  defaults write com.apple.dock autohide-time-modifier -float $DOCK_ANIM_SPEED && killall Dock

  echo "Speeding up Launchpad"
  defaults write com.apple.dock springboard-hide-duration -float $LAUNCHPAD_ANIM_SPEED
  defaults write com.apple.dock springboard-show-duration -float $LAUNCHPAD_ANIM_SPEED
  defaults write com.apple.dock springboard-page-duration -float $LAUNCHPAD_PAGEFLIP_SPEED

  echo "Disabling window opening animation and resize time"
  defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false
  defaults write -g NSWindowResizeTime -float $WINDOW_RESIZE_TIME

  # Other tweaks
  echo "Enabling key repeat."
  defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false

  echo "Enabling show hidden files."
  defaults write com.apple.Finder AppleShowAllFiles true && killall Finder

  echo "Show Folders first in Finder"
  defaults write com.apple.finder _FXSortFoldersFirst -bool true && killall Finder
fi


if [ "$1" == "-r" ] || [ "$1" == "--restore" ]
then 
  defaults delete com.apple.Dock autohide-delay
  defaults delete com.apple.Dock autohide-time-modifier
  defaults delete com.apple.dock springboard-hide-duration
  defaults delete com.apple.dock springboard-show-duration
  defaults delete com.apple.dock springboard-page-duration
  defaults delete NSGlobalDomain NSAutomaticWindowAnimationsEnabled
  defaults delete -g NSWindowResizeTime
  defaults delete NSGlobalDomain ApplePressAndHoldEnabled
  defaults delete com.apple.finder AppleShowAllFiles
  defaults delete com.apple.finder _FXSortFoldersFirst
  killall Dock
  killall Finder
fi 
