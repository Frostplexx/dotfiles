tmux_running=$(pgrep tmux)

if [[ -z $TMUX ]] && [[ -z $tmux_running ]]; then
    tmux new-session -s "Spotify" bash -c spotify_player
    exit 0
fi

if ! tmux has-session -t="Spotify" 2> /dev/null; then
    tmux new-session -ds "Spotify" bash -c spotify_player
fi

tmux switch-client -t "Spotify"

