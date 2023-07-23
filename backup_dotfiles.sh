#!/bin/bash

# =====================================================
# ADD THE ITEMS YOU WANT TO BACKUP HERE
# Example: ("$HOME/.zshrc",...)
ITEMS=("$HOME/.zshrc" "$HOME/.p10k.zsh" "$HOME/.config/alacritty/alacritty.yml" "$HOME/.ideavimrc" "$HOME/.vimrc")
# ADD THE ITEMS YOU WANT TO ENCRYPT AND BACKUP HERE
ENCRYPTED_ITEMS=("$HOME/.ssh/config")
# ADD YOUR FOLDERS HERE
# Example: ("$HOME/.config/spicetify", ...)
FOLDERS=("$HOME/.config/spicetify", "$HOME/.config/raycast", "$HOME/.config/linearmouse")
# =====================================================

VERSION=2.1

# check if openssl is installed
if ! command -v openssl &> /dev/null
then
    echo "Error: openssl could not be found. Please install it"
    exit
fi

# check if git is installed
if ! command -v git &> /dev/null
then
    echo "Error: git could not be found. Please install it"
    exit
fi

# get the first argument
if [ -z "$1" ]
then
    echo "Error: No argument supplied use -h or --help for help"
    exit
fi

# check if the first argument is -h or --help
if [ "$1" == "-h" ] || [ "$1" == "--help" ]
then
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
if [ "$1" == "-v" ] || [ "$1" == "--version" ]
then
    echo "Version: $VERSION"
    exit
fi

# check if the first argument is -b or --backup
if [ "$1" == "-b" ] || [ "$1" == "--backup" ]
then
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
            cp -r $folder $folder_name
        fi
    done

    if [ -f public.pem ]; then
      # check if a public.pem file exists that contains a public key
      # generate an encryption key 
      openssl rand -base64 32 > key.bin
      # Encrypt the key.bin file
      openssl rsautl -encrypt -inkey public.pem -pubin -in key.bin -out key.bin.enc

      echo "Ecnrypting files..."
      for item in ${ENCRYPTED_ITEMS[@]}; do 
        if [ -f $item ]; then
          echo "Encrypting $item"
          openssl enc -aes-256-cbc -salt -in $item -out $item.enc -pass file:./key.bin -pbkdf2
          mv $item.enc .
        else
          echo "Error: $item does not exist"
        fi
      done 
      
      # remove the key.bin file
      rm key.bin
    else
      echo "Warn: public.pem file does not exist. Skipping encryption"
    fi


    echo "Done"


    # check if a private.pem file exists that contains a private key and if yes warn the user if its not in the .gitingore file
    # also give the user the option to atumaticly add it to the .gitignore file, continue without adding it or abort the script
    if [ -f private.pem ]; then
        if ! grep -q "private.pem" .gitignore; then
            echo "Warning: private.pem file exists but is not in the .gitignore file. This file contains a private key and should not be uploaded to github"
            echo "Do you want to add it to the .gitignore file (y), coninue (n) or abort (a)? (y/n/a)"
            read -r answer
            if [ "$answer" == "y" ]; then
                echo -e "\nprivate.pem" >> .gitignore
                echo "Added private.pem to .gitignore"
            elif [ "$answer" == "a" ]; then
                exit
            fi
        fi
    fi

    # commit and upload them to github
    echo "---------------------------------"
    echo "Committing and uploading to github:"
    git add .
    git commit -m "Backup dotfiles"
    git push
    echo "Done"
fi


if [ "$1" == "-r" ] || [ "$1" == "--restore" ]
then 
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

    # handle the encrypted files
    if [ -f private.pem ]; then
        # decrypt the key.bin.enc file
        openssl rsautl -decrypt -inkey private.pem -in key.bin.enc -out key.bin

        # decrypt the files
        for item in ${ENCRYPTED_ITEMS[@]}; do 
            # current item is the last part of the path of the item in the ENCRYPTED_ITEMS array and .enc is added to it
            cur_item=$(echo $item | rev | cut -d'/' -f1 | rev)".enc"
            if [ -f $cur_item ]; then
                echo "Decrypting $cur_item"
                openssl enc -aes-256-cbc -d -in $cur_item -out $item -pass file:./key.bin -pbkdf2
            else
                echo "Error: $item does not exist"
            fi
        done
        # delete the key.bin file
        rm key.bin
    else 
        echo "Warn: private.pem file does not exist. Skipping decryption"
    fi
fi

if [ "$1" == "-g" ] || [ "$1" == "--generate" ]
then
    # generate a public and private key
    openssl genrsa -out private.pem 2048
    openssl rsa -in private.pem -outform PEM -pubout -out public.pem
fi
