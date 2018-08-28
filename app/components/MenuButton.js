import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import imageAddProfile from '../../images/add_profile.png';
import imageSettings from '../../images/extra.png';
import imageEditProfiles from '../../images/edit.png';
import imageEditProfilesInProgress from '../../images/edit_in_progress.png';
import imageRemoveProfile from '../../images/remove_profile.png';

export default class MenuButton extends Component {
  render() {
    let image;
    let buttonTestId;

    switch(this.props.image)
    {
      case 'add_profile':
        image = imageAddProfile;
        buttonTestId = "addProfileButton";
        break;

      case 'settings':
        image = imageSettings;
        buttonTestId = "settingsButton";
        break;

      case 'edit_profiles':
        image = imageEditProfiles;
        buttonTestId = "editProfilesButton";
        break;

      case 'edit_profiles_in_progress':
        image = imageEditProfilesInProgress;
        buttonTestId = "editProfilesInProgress";
        break;

      case 'remove_profile':
        image = imageRemoveProfile;
        buttonTestId = "removeProfileButton";
        break;
    }

    return (
      <TouchableOpacity
        testID={buttonTestId}
        onPress={this.props.action}
        accessible={this.props.accessible}
        accessibilityLabel={this.props.accessibilityLabel}
        >
        <Image
          style={this.props.style}
          source={image}
          />
      </TouchableOpacity>
    );
  }
}
