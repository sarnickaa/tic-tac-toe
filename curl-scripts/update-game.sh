curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
}'

echo


# TOKEN=BAhJIiU1NDM4ZjA0Y2Y2ZjY1MzYxM2YxOTVmYTcyNGQ0ZjdkZgY6BkVG--c72953aff1a59a567a2eb8723206eea9e2bf9bda ID=6251 INDEX=3 VALUE="x" sh update-game.sh
