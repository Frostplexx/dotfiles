#!/bin/sh

echo "Installing packages"
./helpers/backup_brew_packages.sh -r

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
./helpers/install_fonts.sh

echo "Installing Oh-My-Zsh"


echo "Installing Powerlevel10k"
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

echo "Restoring dotfiles"
./backup_dotfiles.sh -r

echo "Tweaking macOS"
./reduce_macOS_anim_speed.sh -a


echo "Installing IDE"
./set_up_ide.sh
