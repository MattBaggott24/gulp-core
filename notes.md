INITIALIZATION:::
npm i -g gulp-cli
npm i --save-dev gulp
npm install

GULP TASKS:::
default - processes nunjucks
buildSass - builds Sass

NUNJUCKS:::
include - injects the file into the spot in the file
extends - pulls the whole nunjucks file into the page
block - rewrites the content of the block from the template

BROWSERSYNC:::
browser-sync start --server "dist" --files "dist"
