#!/usr/bin/env bash

selected=`echo "$(curl -s "https://en.wikipedia.org/wiki/List_of_programming_languages" | awk 'BEGIN { RS="</li>"; FS="<li>"; } NR>1 {print "<li>" $2}' | ggrep -oP '<li><a href="\/wiki\/.*".*<\/a>' | sed -e 's/<[^>]*>//g')$(cat ~/.config/tmux/tmux-cht-command)"|tr '[:upper:]' '[:lower:]' |fzf --no-color --border=rounded --border-label=" cht.sh "`

if [[ -z $selected ]]; then
    exit 0
fi

read -p "Enter Query: " query

if grep -qs "$selected" ~/.tmux-cht.command; then
    tmux neww bash -c "curl -s cht.sh/$selected~$query |bat --theme=base16-256 & while [ : ]; do sleep 1; done"
else
    query=`echo $query | tr ' ' '+'`
    tmux neww bash -c "curl -s cht.sh/$selected/$query |bat --theme=base16-256 & while [ : ]; do sleep 1; done"
fi

