
read -p "Do you want to back up homebrew packages (b),m restore them (r)?" -n 1 -r
echo
if [[ $REPLY =~ ^[bB]$ ]]; then
    ./helpers/backup_homebrew_packages.sh -b
elif [[ $REPLY =~ ^[rR]$ ]]; then
    ./helpers/backup_homebrew_packages.sh -r
elif [[ $REPLY =~ ^[qQ]$ ]]; then
    exit
fi


