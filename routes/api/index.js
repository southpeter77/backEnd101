const router = require('express').Router();

const routes = ["user", "plan", "profile", "category"];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
