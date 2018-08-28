const detox = require('detox');
const {device, expect, element, by, waitFor} = require('detox');
const wait = ms => new Promise((r, j)=>setTimeout(r, ms));
before(async () => {
  const detoxDeviceConfig = {
      "configurations": {
        "ios.sim.debug": {
            "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/ndash.app",
            // xcodebuild -workspace ios/consumer.xcworkspace -configuration Debug -scheme consumer -sdk iphonesimulator -derivedDataPath ios/build
            "build": "xcodebuild -project ios/ndash.xcodeproj -scheme ndash -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
            "type": "ios.simulator",
            "name": "iPhone X"
        }
    }
};
  console.log(`Now starting detox with config: ${detoxDeviceConfig}`);
  console.log(detoxDeviceConfig);
  console.log(`Attempting init with the config provided`);
  await detox.init(detoxDeviceConfig);
});

after(async () => {
  await detox.cleanup();
});

describe('Set of tests for Catalog of the app', () => {

  before( async () => {
    console.log(`DONE: require navigateApp`);
    console.log(`DONE: Starting navigate to Catalog`);
  });
  beforeEach(async () => {
    await device.reloadReactNative();
    await wait(4000);
  });
  it('should have ndash button on screen', async () => {
    await expect(element(by.id('ndashButton'))).toBeVisible();
  });
  it('tap on ndash button', async () => {
    await element(by.id('ndashButton')).tap();
    await expect(element(by.id('ndashButton'))).toBeVisible();
  });
  it('appDrawer should not be visible', async () => {
    await expect(element(by.id('addProfileButton'))).toBeNotVisible();
  });
  it('appDrawer should be visible on tapping ndash', async () => {
    await element(by.id('ndashButton')).tap();
    await wait(2000);
    await expect(element(by.id('addProfileButton'))).toBeVisible();
  });
  it('Settings button shoukld be visible', async () => {
    await element(by.id('ndashButton')).tap();
    await wait(2000);
    await expect(element(by.id('settingsButton'))).toBeVisible();
  });
  it('Settings view should contain ndash button ', async () => {
    await element(by.id('ndashButton')).tap();
    await element(by.id('settingsButton')).tap();
    await wait(2000);
    await expect(element(by.id('ndashButton'))).toBeVisible();
  });
  it('Settings view should about section', async () => {
    await element(by.id('ndashButton')).tap();
    await element(by.id('settingsButton')).tap();
    await wait(2000);
    await expect(element(by.id('aboutText'))).toBeVisible();
    await expect(element(by.id('aboutHeader'))).toBeVisible();
  });
  it('Settings view should contain resetAllData button', async () => {
    await element(by.id('ndashButton')).tap();
    await element(by.id('settingsButton')).tap();
    await wait(2000);
    await expect(element(by.id('resetAllDataButton'))).toBeVisible();
  });
  it.skip('Settings view should contain resetAllData button', async () => {
    await element(by.id('ndashButton')).tap();
    await element(by.id('settingsButton')).tap();
    await element(by.id('resetAllDataButton')).tap();
    await wait(2000);
    await expect(element(by.id('cancelPopUpButton'))).toBeVisible();
    await expect(element(by.id('okPopUpButton'))).toBeVisible();
  });
});
