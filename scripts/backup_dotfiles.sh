#!/bin/bash

# =====================================================
# ADD THE ITEMS YOU WANT TO BACKUP HERE
# Example: ("$HOME/.zshrc",...)
ITEMS=("$HOME/.zshrc" "$HOME/.p10k.zsh" "$HOME/.ideavimrc" "$HOME/.vimrc" "$HOME/.zimrc")
# ADD YOUR FOLDERS HERE
# Example: ("$HOME/.config/spicetify", ...)
FOLDERS=("$HOME/.config")
# =====================================================

VERSION=2.3


if [ -z "$1" ]
then
    read -p "Do you want to backup dotfiles (b), restore dotfiles (r) or quit (q)" -n 1 -r
    echo
    if [[ $REPLY =~ ^[bB]$ ]]; then
        action="-b"
    elif [[ $REPLY =~ ^[rR]$ ]]; then
        action="-r"
    elif [[ $REPLY =~ ^[qQ]$ ]]; then
        exit
    fi
else 
    action=$1
fi

# check if git is installed
if ! command -v git &>/dev/null; then
	echo "Error: git could not be found. Please install it"
	exit
fi

# get the first argument
if [ -z "$action" ]; then
	echo "Error: No argument supplied use -h or --help for help"
	exit
fi

# check if the first argument is -h or --help
if [ "$action" == "-h" ] || [ "$action" == "--help" ]; then
	echo "Usage: ./backup_dotfiles.sh [OPTION]"
	echo "Options:"
	echo "  -h, --help      Show this help message"
	echo "  -v, --version   Show the version of this script"
	echo "  -b, --backup    Backup the dotfiles"
	echo "  -r, --restore   Restore the dotfiles"
	echo "  -g, --generate  Generate a public and private key"
	exit
fi

# check if the first argument is -v or --version
if [ "$action" == "-v" ] || [ "$action" == "--version" ]; then
	echo "Version: $VERSION"
	exit
fi

# check if the first argument is -b or --backup
if [ "$action" == "-b" ] || [ "$action" == "--backup" ]; then
	# Loop through the items to backup and copy them into this directory
	# if the items doesnt exist then print an error message
	echo "Starting backup..."
	for item in ${ITEMS[@]}; do
		if [ -f $item ]; then
			echo "Copying $item to this directory"
			cp $item .
		else
			echo "Error: $item does not exist"
		fi
	done

	# Backup the folders
	for folder in ${FOLDERS[@]}; do
		#check if folder exists
		if [ ! -d $folder ]; then
			echo "Error: $folder does not exist"
			continue
		else
			# get the name of the folder which is the last part of the path
			folder_name=$(echo $folder | rev | cut -d'/' -f1 | rev)
			# copy the folder into a subfolder into this directory that has the same name as the folder
			echo "Copying $folder to this directory"
			mkdir $folder_name
			cp -r $folder .
		fi
	done

	echo "Done"

	# commit and upload them to github
	echo "---------------------------------"
	echo "Committing and uploading to github:"
	git add .
	git commit -m "Backup dotfiles"
	git push
	echo "Done"
fi

if [ "$action" == "-r" ] || [ "$action" == "--restore" ]; then
	# get the last path part of the files in the Items array
	# Example: $HOME/.zshrc -> .zshrc
	# this is needed because the files in the Items array are in this directory
	for item in ${ITEMS[@]}; do
		cur_item=$(echo $item | rev | cut -d'/' -f1 | rev)
		if [ -f $cur_item ]; then
			echo "Restoring $cur_item"
			cp $cur_item $item
		else
			echo "Error: $item does not exist"
		fi
	done

	# Restore the folders
	for folder in ${FOLDERS[@]}; do
		cur_folder=$(echo $item | rev | cut -d'/' -f1 | rev)
		if [ -d $cur_folder ]; then
			echo "Restoring $cur_folder"
			cp -r $cur_folder $folder
		else
			echo "Error: $folder does not exist"
		fi
	done

    echo "Backing up brew packages"
    ./helpers/backup_brew_packages.sh -b
fi

if [ "$action" == "-g" ] || [ "$action" == "--generate" ]; then
	# generate a public and private key
	openssl genrsa -out private.pem 2048
	openssl rsa -in private.pem -outform PEM -pubout -out public.pem
fi
