import express from 'express';
import message from './message'

let app = express();

app.get('/app', function(req,res){
    res.send('BOM TESTE')
});

app.get('/', (req, res) => {
    adicionar2(10).then(v => {
        message('bom dia')
      });
    res.send('ok');
});

app.listen(3000, () => {
    console.log('inicializando servidor');
});

function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(x);
        }, 2000);
    });
}

async function adicionar2(x) {
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
}

