echo "Installing NVM..."
brew install nvm
source $(brew --prefix nvm)/nvm.sh

echo "Installing v8.5..."
nvm install v8.5.0
nvm use --delete-prefix v8.5.0
nvm alias default v8.5.0

echo "Figuring out node version..."
node --version

echo "Installing detox cli..."
npm install -g detox-cli

echo "Installing dependencies for detox tests..."
npm install

echo "Building the project..."
cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..

echo "Starting the packager"
npm run start &

echo "start the tests"
npm run androidDetox 
