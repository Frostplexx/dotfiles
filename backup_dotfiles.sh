#!/bin/bash

# =====================================================
# ADD THE ITEMS YOU WANT TO BACKUP HERE
# Example: ZSHRC="$HOME/.zshrc"

ITEMS=
  ZSHRC="$HOME/.zshrc"
  P10K="$HOME/.p10k.zsh"
  ALACRITTY="$HOME/.config/alacritty/alacritty.yml"
  IDEAVIMRC="$HOME/.ideavimrc"
  VIMRC="$HOME/.vimrc"

# =====================================================

VERSION=1.0

echo "Welcome to the dotfiles backup script v$VERSION"

# Loop through the items to backup and copy them into this directory 
# if the items doesnt exist then print an error message
for item in $ITEMS; do
  if [ -f $item ]; then
    echo "Copying $item to this directory"
    cp $item .
  else
    echo "Error: $item does not exist"
  fi
done

echo "Done"

# commit and upload them to github
echo "Committing and uploading to github"
echo "---------------------------------"
git add .
git commit -m "Backup dotfiles"
git push
echo "Done"

# press any key to exit
echo "
read -n 1 -s -r -p "Press any key to exit"

