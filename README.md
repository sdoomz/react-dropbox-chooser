React dropbox chooser
============
Simple react wrapper for [Dropbox Chooser API](https://www.dropbox.com/developers/chooser)

Installation 
============
```
npm install react-dropbox-chooser
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

Demo 
====
```
npm install
npm start
open http://localhost:8080
```

### [How to create new app?](https://www.dropbox.com/developers/apps/create)

### Feel free to feel free