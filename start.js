module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        env: { },
        path: "app",
        message: [
          "python app_chat.py {{args.mode ? args.mode : ''}}",
        ],
        on: [{
          "event": "/http:\/\/\\S+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[0]}}"
      }
    }
  ]
}
