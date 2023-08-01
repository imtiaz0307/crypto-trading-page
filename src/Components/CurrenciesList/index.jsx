const CurrenciesList = () => {
    const data = [
        {
            id: 1,
            name: "Binance coin",
            abbr: "BNB",
            icon: "https://s3.cointelegraph.com/storage/uploads/view/f90d3fbc91f706a937b53ce93894b6d3.png",
            value: "$363.23",
            increment: "+5.67%"
        },
        {
            id: 2,
            name: "Binance coin",
            abbr: "BNB",
            icon: "https://s3.cointelegraph.com/storage/uploads/view/f90d3fbc91f706a937b53ce93894b6d3.png",
            value: "$363.23",
            increment: "+5.67%"
        },
        {
            id: 3,
            name: "Binance coin",
            abbr: "BNB",
            icon: "https://s3.cointelegraph.com/storage/uploads/view/f90d3fbc91f706a937b53ce93894b6d3.png",
            value: "$363.23",
            increment: "+5.67%"
        },
        {
            id: 4,
            name: "Binance coin",
            abbr: "BNB",
            icon: "https://s3.cointelegraph.com/storage/uploads/view/f90d3fbc91f706a937b53ce93894b6d3.png",
            value: "$363.23",
            increment: "+5.67%"
        },
        {
            id: 5,
            name: "Binance coin",
            abbr: "BNB",
            icon: "https://s3.cointelegraph.com/storage/uploads/view/f90d3fbc91f706a937b53ce93894b6d3.png",
            value: "$363.23",
            increment: "+5.67%"
        },
    ]
    return (
        <div style={{
            padding: "1rem 1rem .5rem"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: ".4rem"
            }}>
                <h6 style={{ color: "white", fontSize: "1.3rem", fontWeight: 600 }}>Market Trends</h6>
                <p style={{ color: "white", fontSize: "1.3rem", fontWeight: 500 }}>See All</p>
            </div>
            <div style={{
                padding: ".5rem",
            }}>
                {
                    data.map(item => (
                        <div key={item.id} style={{
                            display: "flex",
                            alignItems: "center",
                            color: "white",
                            gap: "1rem",
                            marginBottom: "1rem",
                            justifyContent: "space-between"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <img src={item.icon} alt={item.abbr} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                <div>
                                    <h2 style={{ fontSize: "1.2rem", fontWeight: 900 }}>{item.name}</h2>
                                    <span style={{ color: "#a8a8a8" }}>{item.abbr}</span>
                                </div>
                            </div>
                            <div>
                                <h2 style={{ fontSize: "1.3rem", fontWeight: 900 }}>{item.value}</h2>
                                <span style={{ color: "#21c8d7" }}>{item.increment}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CurrenciesList