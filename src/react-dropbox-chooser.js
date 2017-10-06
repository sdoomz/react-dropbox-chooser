import React, { Component } from 'react';
import loadScript from 'load-script';

const DROPBOX_SDK_URL = 'https://www.dropbox.com/static/api/2/dropins.js';
const SCRIPT_ID = 'dropboxjs';

let scriptLoadingStarted = false;

// read more
// https://www.dropbox.com/developers/chooser
export default class DropboxChooser extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    appKey: React.PropTypes.string.isRequired,
    success: React.PropTypes.func.isRequired,
    cancel: React.PropTypes.func,
    linkType: React.PropTypes.oneOf([ 'preview', 'direct' ]),
    multiselect: React.PropTypes.bool,
    extensions: React.PropTypes.arrayOf(React.PropTypes.string),
    disabled: React.PropTypes.bool
  };

  static defaultProps = {
    cancel: () => {},
    linkType: 'preview',
    multiselect: false,
    disabled: false
  };

  constructor(props) {
    super(props);

    this.onChoose = this.onChoose.bind(this);
  }

  componentDidMount() {
    if (!this.isDropboxReady() && !scriptLoadingStarted) {
      scriptLoadingStarted = true;
      loadScript(DROPBOX_SDK_URL, {
        attrs : {
          id: SCRIPT_ID,
          'data-app-key': this.props.appKey
        }
      });
    }
  }

  isDropboxReady() {
    return !!window.Dropbox;
  }

  onChoose() {
    if (!this.isDropboxReady() || this.props.disabled) {
      return null;
    }

    const {
      success,
      cancel,
      linkType,
      multiselect,
      extensions
    } = this.props;

    window.Dropbox.choose({
      success,
      cancel,
      linkType,
      multiselect,
      extensions
    });
  }

  render() {
    return (
      <div onClick={this.onChoose} disabled={this.props.disabled}>
        {
          this.props.children ?
              this.props.children :
              <button>Open dropbox chooser</button>
        }
      </div>
    );
  }
}
