#!/bin/sh

echo "Installing Homebrew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


echo "Installing packages"
brew install neovim php nodejs npm python3 python3-pip git wget htop nmap qemu spicetify-cli tetris zsh-autosuggestions zsh-syntax-highlighting fortune cowsay
brew install ffmpeg binwalk curl neofetch mas

echo "Installing casks"
brew install --cask 1password-cli keka altserver kitty amethyst obsidian chromium onyx cyberduck openinterminal db-browser-for-sqlite orbstack devtoys postman
brew install --cask raycast firefox	termius font-jetbrains-mono-nerd-font transmission hex-fiend visual-studio-code imageoptim tailscale microsoft-remote-desktop
brew install --cask jetbrains-toolbox mac-mouse-fix burp-suite spotify discord wireshark zoom nordvpn gitkraken moonlight app-cleaner


echo "Installing Appstore App"

mas install 1440147259  # AdGuard for Safari                            (1.11.15)
mas install 1569813296  # 1Password for Safari                          (2.16.0)
mas install 1317704208  # eduVPN                                        (3.0.8)
mas install 409183694   # Keynote                                       (13.2)
mas install 1592917505  # Noir                                          (2023.2.4)
mas install 1295203466  # Microsoft Remote Desktop                      (10.9.4)
mas install 1520333300  # Wappalyzer - Technology profiler              (6.10.67)
mas install 899247664   # TestFlight                                    (3.3.0)
mas install 904280696   # Things                                        (3.19.2)
mas install 1544743900  # Hush                                          (1.0.12)
mas install 409201541   # Pages                                         (13.2)
mas install 1573461917  # SponsorBlock for YouTube - Skip Sponsorships  (5.4.22)
mas install 1444383602  # Goodnotes                                     (6.2.7)
mas install 1286485858  # waifu2x                                       (7.2.5)
mas install 1287239339  # ColorSlurp                                    (3.9.2)
mas install 409203825   # Numbers                                       (13.2)
mas install 1475387142  # Tailscale                                     (1.52.0)
mas install 310633997   # WhatsApp Messenger                            (23.23.79)


echo "Installing Xcode and Command Line Tools. This will take a while..."
mas install 497799835  # Xcode                                              (15.0.1)
xcode-select --install


echo "Restoring dotfiles"

echo "Installing Fonts"
./install_fonts.sh

echo "Installing Oh-My-Zsh"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

echo "Installing Powerlevel10k"
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

echo "Restoring dotfiles"
./backup_dotfiles.sh -r

echo "Tweaking macOS"
./reduce_macOS_anim_speed.sh -a
