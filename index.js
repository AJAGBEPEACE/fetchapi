const data = async () => {
    const response = await fetch('https://api.imgflip.com/get_memes')
    const json = await response.json();
    if (json) {
        let allJson = json.data.memes
        allJson.map((item,index)=>{
            return (
                document.getElementById('all').innerHTML +=`
                    <div style="display:inline-block" key=${index}>
                        <img src=${item.url} alt=${item.name} width="200px" height="200px"/>
                        <p>${item.name}</p>
                    </div>
                `
            )
        })
    } else {
        alert("Network Error")
    }
}

data();