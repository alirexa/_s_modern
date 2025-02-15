
_s_modern
===

This theme is a fork of [_S](https://github.com/Automattic/_s) with [Barbajs](https://github.com/barbajs/barba) and [WPGulp](https://github.com/ahmadawais/WPGulp) intergrated to it.


Installation
---------------

### Requirements

`_s_modern` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Quick Start

Clone or download this repository, change its name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a six-step find and replace on the name in all the templates.

1. Search for `'_s'` (inside single quotations) to capture the text domain and replace with: `'megatherium-is-awesome'`.
2. Search for `_s_` to capture all the functions names and replace with: `megatherium_is_awesome_`.
3. Search for `Text Domain: _s` in `style.css` and replace with: `Text Domain: megatherium-is-awesome`.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;Megatherium_is_Awesome</code>.
5. Search for `_s-` to capture prefixed handles and replace with: `megatherium-is-awesome-`.
6. Search for `_S_` (in uppercase) to capture constants and replace with: `MEGATHERIUM_IS_AWESOME_`.

Then, update the stylesheet header in `style.scss`, the links in `footer.php` with your own information and rename `_s.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.

#### WPGulp configuration
Change `projectURL` variable in `wpgulp.config.js` to your local address.

### Setup

To start using all the tools that come with `_s`  you need to install the necessary Node.js and Composer dependencies :

⚠️ Keep in mind, this code works with node v14 (v14.17.4) and you may ran into errors and problems if you use another version (specially on Arm64 processors, ie Apple M1), so swith your node version before installation:
```sh
$ nvm use 14
```

And then you should be able to install the dependencies with no problem
```sh
$ composer install
$ npm install
```

### Available CLI commands

After the installation of npm packages, you can start Browser-Sync and files watch —WPGulp— using this command:
```sh
$ npm start
```

~~`_s` comes packed with CLI commands tailored for WordPress theme development :~~

~~- `composer lint:wpcs` : checks all PHP files against [PHP Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).~~
~~- `composer lint:php` : checks all PHP files for syntax errors.~~
~~- `composer make-pot` : generates a .pot file in the `languages/` directory.~~
~~- `npm run compile:css` : compiles SASS files to css.~~
~~- `npm run compile:rtl` : generates an RTL stylesheet.~~
~~- `npm run watch` : watches all SASS files and recompiles them to css when they change.~~
~~- `npm run lint:scss` : checks all SASS files against [CSS Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/css/).~~
~~- `npm run lint:js` : checks all JavaScript files against [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).~~
~~- `npm run bundle` : generates a .zip archive for distribution, excluding development and system files.~~


Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
