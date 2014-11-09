# D3 Tutorial

System for running D3 tutorials.

Main features:
- Side-by-side instructions with live code editing via [JS Bin](jsbin.com).
- Buttons to update the JS Bin to preset checkpoints.
- Remembers the position in the tutorial


## Installation

First, make sure your system has Node.js (with `npm`) installed.
You will also need to have Harp, Bower, and Grunt:

```sh
$ sudo npm install -g harp bower grunt-cli
```

Now, install the node and bower dependencies:

```sh
$ npm install && bower install
```

You can run the harp server:

```sh
$ harp server
```

And navigate to `http://localhost:9000` in your browser.

You can also compile the site to static files for easy hosting:

```sh
$ harp compile
```

This produces a `www` folder that is ready for any web server.


## Writing a Tutorial

This project displays tutorials in a side-by-side window with JS Bin,
to allow the reader to code along with the tutorial.

Tutorials are located in the `public/tutorials` folder, and may be written in Markdown
or any other format supported by Harp.

You can add special buttons that will let the user update the JS Bin window
to show a specific bin. You might use this to get the user past some initial setup steps,
or to skip ahead in the tutorial.

```html
<a class="btn btn-primary jsbin-button"
   href="http://jsbin.com/xexezo/5/edit?js,output"
   target="_blank">
   Open in JS Bin
</a>
```

Note that you can insert these in Markdown as well, as long as there is a line of space
on either side of the HTML.

When the tutorial is loaded, *if* there is a button with the class `.auto-load`
in the tutorial, its JS Bin will be used to initialize the JS Bin window.

Add a link to your tutorial in `public/_blocks/welcome.md`.

## Updating Bower Dependencies

If you need to update any of the "vendor" library files (in `public/vendor`),
you will want to use this command:

```sh
$ grunt bowercopy
```

This will copy just the required files from the `bower_components` folder to `public/vendor`.

## Deployment

To be safe, make sure your repository is clean -- no outstanding uncommitted changes.

To update the website (which is hosted on GitHub pages at http://scclab.github.io/d3tutorial,
just run `grunt deploy`. This performs the following steps:

1. Sets the `baseUrl` variable in `harp.json` to "http://scclab.github.io/d3tutorial"
2. Runs `harp compile -o dist` to build the site to the `dist` folder.
3. Restore the original `harp.json` file.
4. Commits the updated `dist` folder (if nothing has changed the task will fail here).
5. Uses `git subtree push` to send the `dist` folder to the `gh-pages` branch.

