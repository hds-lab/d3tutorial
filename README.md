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


## Updating Bower Dependencies

If you need to update any of the "vendor" library files (in `public/vendor`),
you will want to use this command:

```sh
$ grunt bowercopy
```

This will copy just the required files from the `bower_components` folder to `public/vendor`.
