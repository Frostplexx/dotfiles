# DotFiles

This is a repo for backing up all my dotfiles.

## Backup Usage

### Backing Up

Run `backup_dotfiles.sh -` to back up your files. For more info run `backup_dotfiles.sh -h`

### Adding Items for backup

1. Open `backup_dotfiles.sh`
2. Add the path to the file to the `ITEMS` array.
3. If you want to encrypt the file add it to the `ENCRYPTED_ITEMS` array.
4. If you dont yet have a keyset run `backup_dotfiles.sh -g` to generate one
5. Run `backup_dotfiles.sh -b`

### Restoring Items

1. Run `backup_dotfiles.sh -r` to restore the items
2. If no `private.pem` file is found the decryption of encrypted files will be skipped!

## Reduce Animation Speed Usage

Run `reduce_macOS_anim_speed.sh -a` to apply the changes and `reduce_macOS_anim_speed.sh -r` to restore to the original state. If you want to speed up or slow down an animation, then open the file and edit the variables at the top of the file. If you instead want to disable a tweak just comment out the corresponding line.
