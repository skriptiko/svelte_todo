const ghPages = require('gh-pages');

ghPages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/skriptiko/svelte_todo.git',
  }
)
