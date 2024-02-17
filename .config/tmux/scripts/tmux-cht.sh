#!/usr/bin/env bash

selected=`echo "$(curl -s "https://en.wikipedia.org/wiki/List_of_programming_languages" | awk 'BEGIN { RS="</li>"; FS="<li>"; } NR>1 {print "<li>" $2}' | ggrep -oP '<li><a href="\/wiki\/.*".*<\/a>' | sed -e 's/<[^>]*>//g')$(cat ~/.config/tmux/tmux-cht-command)"|tr '[:upper:]' '[:lower:]' |fzf`

if [[ -z $selected ]]; then
    exit 0
fi

read -p "Enter Query: " query

if grep -qs "$selected" ~/.tmux-cht.command; then
    tmux neww bash -c "curl cht.sh/$selected~$query & while [ : ]; do sleep 1; done"
else
    query=`echo $query | tr ' ' '+'`
    tmux neww bash -c "curl cht.sh/$selected/$query & while [ : ]; do sleep 1; done"
fi

