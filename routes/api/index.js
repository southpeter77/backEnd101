const router = require('express').Router();

const routes = ["user","review", "plan", "profile", "category","exercise","images","order"];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
