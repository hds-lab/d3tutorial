# D3 Tutorial

System for running D3 tutorials.


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

When the tutorial is loaded, the url on the first button will be used
to initialize the JS Bin window.

Add a link to your tutorial in `public/index.jade`.

## Updating Bower Dependencies

If you need to update any of the "vendor" library files (in `public/vendor`),
you will want to use this command:

```sh
$ grunt bowercopy
```

This will copy just the required files from the `bower_components` folder to `public/vendor`.

## Deployment

To update the website (which is hosted on GitHub pages at `http://scclab.github.io/d3tutorial`)
there are two steps:

1. Edit `harp.js` so that the `baseUrl` variable is set to "http://scclab.github.io/d3tutorial"
2. Run `grunt deploy`.

The deploy task compiles the site to the `dist` folder,
commits these changes, then pushes the `dist` folder
to the `gh-pages` branch of the repository,
which updates the website.

**Note:** If your `baseUrl` setting is anything other than `""` you will not
 be able to serve the site locally using `harp server`.
