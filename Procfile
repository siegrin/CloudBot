web: node . --server
bot: pm2 link 10li9bc1krfwk5z a977mqdqu63utty && pm2 start main.js && pm2 save && pm2 monit
worker: node . --db 'mongodb+srv://Della:lylia9090@cloudclus1.dlgwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' --autocleartmp --restrict
new: node run/main.js
