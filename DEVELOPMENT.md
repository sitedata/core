# Development

A few notes regarding developing Form Tools. Up until 3.0.14 it was just a question of cloning the repo and loading it 
up in your browser, but now we're finally adding a proper build process.


### Technologies

- grunt
- yarn

### Local development

With 3.0.14 Form Tools source code was moved to a `src/` folder in the repo and all build artifacts are generated
into a `dist/` folder. 

After checking out the repo run these commands. 

```
yarn install
grunt 
```

That generates the `dist/` folder and sets up watchers to copy over any edited files to your `dist/` folder. Only ever
edit files in your `src/` folder. You'll probably want to tell your IDE to ignore the dist folder contents so you don't
accidentally find yourself editing those files.

### Linking modules for local development 

TODO.


### Localization 

Grunt has a few commands to simplify dealing with all the localization.

```
# adds a key to all lang files. Requires the key to exist in the en_us.php file first.
grunt addI18nKey --key=word_hello 

# removes a key from all files
grunt removeI18nKey --key=word_hello

# sort the keys
grunt sortI18nKeys
```


### Generating release package

Everything is published to a dist/ folder (not checked in). The generated `dist/` folder is what's actually part of the 
release packages found on github.

Since github doesn't provide options to only publish the contents of a subfolder, generating packages is a manual process:  
 
- Check out second repo. Give the folder the name `formtools_releases`.
- Check out the `releases` branch. 
- In the first repo, run `grunt publish x.y.z`: that (will) generate the `dist/` folder, copy it into the other repo
and create a tag with the name specified. 

Please note:
- the main `global/Core.class.php` should have been updated with the correct version.

At that point we can just generate the new release from the `releases` branch via github as before. 