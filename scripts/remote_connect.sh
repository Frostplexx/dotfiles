#!/bin/zsh

# $TAILSCALE="/Applications/Tailscale.app/Contents/MacOS/Tailscale"
$TARGET_IP=""

# Start the tailscale application
echo "Starting Tailscale"
open -a Tailscale

# run `ping raspberrypi` and wait until it's successful
echo "Waiting for raspberrypi to come online..."
while ! ping -c1 raspberrypi &>/dev/null; do :; done


# run the wol command on the raspberry pi
echo "Sending WOL command to raspberrypi"
ssh daniel@raspberrypi "sudo etherwake -i eth0 74:56:3C:30:FC:B7"

echo "Waiting for Desktop to come online..."
while ! ping -c1 desktop-pc &>/dev/null; do :; done

echo Initalizing RDP connection
open -a Microsoft\ Remote\ Desktop