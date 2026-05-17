
const getData = async () => {
    const data = await fetch("data.json");
    const res = await data.json()
    console.log(res.easy[Math.floor((Math.random() * 11) - 1)
    ])
}

getData()
