// cut gitHub link from private gitHub link

// cut link like this 'https://github.com/nickName'
// from 'https://github.com/rolling-scopes-school/nickName-2018Q3/'

function modifyGitHubLink(link) {
  return link.replace(/rolling-scopes-school\//, '').replace(/-2018Q3\/?/, '').toLowerCase();
}

module.exports = modifyGitHubLink;
