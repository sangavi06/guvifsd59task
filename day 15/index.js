
let div = document.getElementById('root')
setTimeout(()=>{
    div.innerHTML='<h1>10</h1>'
    console.log("10")
    setTimeout(()=>{
        div.innerHTML='<h1>9</h1>'
        console.log("9")
        setTimeout(()=>{
            div.innerHTML='<h1>8</h1>'
            console.log("8")
            setTimeout(()=>{
                div.innerHTML='<h1>7</h1>'
                console.log("7")
                setTimeout(()=>{
                    div.innerHTML='<h1>6</h1>'
                    console.log("6")
                    setTimeout(()=>{
                        div.innerHTML='<h1>5</h1>'
                        console.log("5")
                        setTimeout(()=>{
                            div.innerHTML='<h1>4</h1>'
                            console.log("4")
                            setTimeout(()=>{
                                div.innerHTML='<h1>3</h1>'
                                console.log("3")
                                setTimeout(()=>{
                                    div.innerHTML='<h1>2</h1>'
                                    console.log("2")
                                    setTimeout(()=>{
                                        div.innerHTML='<h1>1</h1>'
                                        console.log("1")
                                        setTimeout(()=>{
                                            div.innerHTML='<h1>Happy independance day</h1>'
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)