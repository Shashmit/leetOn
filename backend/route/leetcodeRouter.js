const query = require("../graphQl/graphQueries");
const formatData = require("../format/dataFormatter");

exports.leetcode = (req, res) => {
  let user = req.body.username;
  fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({ query: query, variables: { username: user } }),
  })
    .then((result) => result.json())
    .then((data) => {
      if (data.errors) {
        res.send(data);
      } else {
        const cycle = formatData(data.data);
        res.status(200).json(cycle);
      }
    })
    .catch((err) => {
      console.error("Error", err);
      res.send(err);
    });
};
