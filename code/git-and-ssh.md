
created: [2024-04-12]()

---
# Git and SSH

## Setting up GitHub on Mac

```shell

# Generate an SSH key
$ ssh-keygen -t ed25519 -C "thy@email.com"

# Add the key to the SSH agent (don't add if you are using multiple GitHub accounts)
#$ ssh-add ~/.ssh/id_ed25519_thyhonor_github

# Add the following in ~/.ssh/config
Host thyhonor.github
  HostName github.com
  User git
  #AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519_thyhonor_github

# Copy the public key to the clipboard, and then paste to GitHub
$ pbcopy < ~/.ssh/id_ed25519_thyhonor_github.pub

# Check if the connection is working fine:
$ ssh -T git@thyhonor.github

```

## Change remote URLs in a repository accordingly:

```shell

# List existing remotes
$ git remote -v

# Change the URL to `git@thyhonor.github:thyhonor/thyhonor.github.io`
$ git remote set-url origin git@HOST:USERNAME/REPOSITORY.git

```

## View other Git configs (local v/s global v/s system):

```shell

# Local config
$ git config --list
$ vi .git/config

# Verify the name and email, per repository
$ git config user.name "John Doe"
$ git config user.email "john@doe.org"

```

---

## Commands related to the SSH agent:
```shell

# Start the SSH agent (if needed)
$ eval "$(ssh-agent -s)"

# List the keys
$ ssh-add -l
$ ssh-add -L

# Add a key
$ ssh-add ~/.ssh/sshkeywithoutpub

# Delete all keys
$ ssh-add -D

```

---

### To do:
- Check more about Agent Forwarding (for any security best practices)
- Figure out .git/hooks/pre-commit for UTC timestamps
```shell
#! /bin/sh
export TZ=UTC
DATE=$(date -u +%Y-%m-%dT%H:%M:%S%z)
export GIT_AUTHOR_DATE="$DATE"
export GIT_COMMITTER_DATE="$DATE"
exit 0
```
