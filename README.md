>## React dropbox chooser
Simple react wrapper for dropbox chooser API

Installation
============
```
npm install
npm start
open http://localhost:8080
```


Usage
=====
```
<DropboxChooser 
    appKey={'your-uniq-app-key'}
    success={files => this.onSuccess(files)}
    cancel={() => this.onCancel()}
    multiselect={true}
    extensions={['.mp4']} >
    <div className="dropbox-button">Click me!</div>        
</DropboxChooser>
```

Dropbox Chooser API
===================
[api](https://www.dropbox.com/developers/chooser)


Don't forget to register new app
================================
[create new app](https://www.dropbox.com/developers/apps/create)