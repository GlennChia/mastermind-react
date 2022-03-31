# CloudFormation deployment

## Installing Nodejs on Amazon Linux 2

### Manual installation

Reference: [AWS docs: Tutorial: Setting Up Node.js on an Amazon EC2 Instance](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
# Test the version and that Node.js is running correctly
node -e "console.log('Running Node.js ' + process.version)"
```

### Via CloudFormation

Reference: [Stackoverflow: Installing NodeJS in AWS EC2 via User Data](https://stackoverflow.com/questions/49793245/spotfleetrequest-tag-specification-resource-type-must-have-a-value)

Example provided by Stackoverflow:

```bash
#!/bin/bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 7
```

### Troubleshooting

**Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath '<example subpath>' is not defined by "exports" in the package.json of a module in node_modules**

Reference: [Stackoverflow](https://stackoverflow.com/questions/69693907/error-err-package-path-not-exported-package-subpath-lib-tokenize-is-not-d)

Solution: Install the TLS version of NodeJS

```bash
nvm install --lts
```