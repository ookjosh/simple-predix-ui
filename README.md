# simple-predix-ui
Bare-minimum tutorial on how to utilize Predix-UI elements in a simple setting.

This document draws from existing available resources from the [Predix UI site](predix-ui.com) but is intended to demonstrate the bare minimum required to actually get stuff working. Predix is a complicated ecosystem, and I hope this helps distill some of the UI end of things for new users.

>This is not intended to be a demonstration of best practices or "production quality" code. This is meant to get you on your feet so you can actually see something happening.

# Setup

## Install Node/NPM/Bower
This document assumes that you have a working installation of Node.js and npm. If not, follow their install instructions for your hardware.

> Note that bower has been deprecated. However at the time of writing Predix still uses it for its package management. Please check the predix-ui site for updates.

With npm installed, install bower with `npm install -g bower`

## Demonstration Setup
1.  If you haven't already, clone this repo. 
2.  In a terminal, navigate to the cloned folder (`cd /path/to/repo`)
3.	Run `npm install`. This will install the demo's dependencies (mainly [express](expressjs.com) for an easy web server)
4.  Run `bower install`. This will install all of the predix dependencies required by the demo into a folder called `bower_components`.
5.  Run `npm start` to start serving the demo at [localhost:8080](localhost:8080)
  * Alternately you may run `npm start XXXX` where XXXX is the port you want served to (e.g if 8080 is in use) 

You should see an index page at [localhost:XXXX](localhost:8080) and you can navigate to localhost:XXXX/thing.html, replacing "thing" with the name of the files in the components directory (e.g localhost:8080/px-vis-timeseries.html).

You can now view or edit the different component demos located in their respective html files.

## Using Predix-UI In Your Own Project
Navigate to your project directory and run `bower init`. This creates a file `bower.json` that tracks what packages you have installed.

Now, using bower, you can install components you like from the predix-ui site. To do so, you run `bower install the-element-name --save`, where the element name is something like `px-accordion`. The `--save` option tracks dependencies in the bower.json file so you can track what dependencies your project has.



