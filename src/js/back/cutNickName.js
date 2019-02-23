// cut nickname of person from gitHub account and from private gitHub account

function cutNickNameFrom(link) {
  let nickName = '';

  if (link.match(/rolling-scopes-school/)) {
    nickName = link.replace(/https?:\/\/github.com\/rolling-scopes-school\//, '').replace(/-2018Q3\/?/, '');
  } else {
    nickName = link.replace(/https?:\/\/github.com\//, '').replace(/\//, '');
  }

  return nickName.trim();
}

module.exports = cutNickNameFrom;
