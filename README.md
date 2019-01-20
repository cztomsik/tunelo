# tunelo
Simple GUI for SSH tunneling in react (no DOM, no electron)

- clone this repo
- edit `data.json`
  - add new item for each port you need to forward
  - make sure you have appropriate entry in `~/.ssh/authorized_keys` on target server
- run `npm start`

You can make native package too with `npm run build && npm run package` but it's not terribly useful yet because there is no in-app edit.