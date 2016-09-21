#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  git config --global user.email "your-github-email@email.com"
  git config --global user.name "travis-ci"
  npm run release
  cd dist
  git init
  git add .
  git commit -m "deployed commit ${TRAVIS_COMMIT} from travis"
  git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
fi
