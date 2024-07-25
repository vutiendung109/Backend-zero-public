const fs = require('fs');
const path = require('path');

const baseDir = 'client';

const directories = [
  'public/assets/css',
  'public/assets/js',
  'public/assets/img',
  'public/assets/fonts',
  'src/components/header',
  'src/components/footer',
  'src/components/courseCard',
  'src/pages/home',
  'src/pages/courses',
  'src/pages/courseDetail',
  'src/pages/learn',
  'src/utils',
  'build/css',
  'build/js',
  'build/img'
];

const files = [
  'public/index.html',
  'public/assets/css/main.css',
  'public/assets/js/main.js',
  'public/assets/img/logo.png',
  'src/components/header/header.html',
  'src/components/header/header.css',
  'src/components/header/header.js',
  'src/components/footer/footer.html',
  'src/components/footer/footer.css',
  'src/components/footer/footer.js',
  'src/components/courseCard/courseCard.html',
  'src/components/courseCard/courseCard.css',
  'src/components/courseCard/courseCard.js',
  'src/pages/home/home.html',
  'src/pages/home/home.css',
  'src/pages/home/home.js',
  'src/pages/courses/courses.html',
  'src/pages/courses/courses.css',
  'src/pages/courses/courses.js',
  'src/pages/courseDetail/courseDetail.html',
  'src/pages/courseDetail/courseDetail.css',
  'src/pages/courseDetail/courseDetail.js',
  'src/pages/learn/learn.html',
  'src/pages/learn/learn.css',
  'src/pages/learn/learn.js',
  'src/utils/api.js',
  'src/utils/helpers.js',
  'package.json',
  'webpack.config.js',
  'gulpfile.js'
];

directories.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)){
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

files.forEach(file => {
  const fullPath = path.join(baseDir, file);
  if (!fs.existsSync(fullPath)){
    fs.writeFileSync(fullPath, '');
  }
});

console.log('Project structure created successfully!');
