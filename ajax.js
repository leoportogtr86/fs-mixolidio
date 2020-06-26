const axios = require('axios')

axios.get('https://jam-track.herokuapp.com/').then((res)=>{

    let dados = res.data
    let c = dados.filter((e)=>{

        return e.tonalidade == 'c'
    })

    console.log(c)
})