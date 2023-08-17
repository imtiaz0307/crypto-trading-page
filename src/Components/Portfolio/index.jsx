import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Chart from "react-apexcharts"
import { FaArrowTrendUp } from 'react-icons/fa6';
import React, { useState, useEffect, useRef } from 'react';
import { formatDateTime } from '../../helpers/DataFormat/DateFormat';
import { savedDataString } from './../../helpers/UserDetails/UserDetails';
import fetchAllTradeOption from './../../helpers/getApis/getAllOptions';
// import FixedBar from './../FixedBar/index';
import fetchPastUserTrade from '../../helpers/getApis/pastALLinvest';

const Portfolio = () => {
    const currenciesData = [
        {
            name: "Bitcoin",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
            value: "btc",
            color: "#f39900",
            graph_values: [13, 15, 25, 20, 30, 26, 24, 15, 16, 20]
        },
        {
            name: "Ethereum",
            img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png",
            value: "eth",
            color: "#637feb",
            graph_values: [15, 12, 13, 10, 12, 14, 16, 16, 8]
        },
        {
            name: "USDT",
            img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png",
            value: "usdt",
            color: "#26a17b",
            graph_values: [8, 9, 16, 7, 20, 8, 12, 14]
        },
        {
            name: "USDT",
            img: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png",
            value: "usdt",
            color: "#26a17b",
            graph_values: [8, 9, 16, 7, 20, 8, 12, 14]
        },
    ]
    const [tradeOptions, setTradeOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [pastUserTradeData, setPastUserTradeData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const decryptedData = await fetchAllTradeOption();
            setTradeOptions(decryptedData.data);
            console.log(decryptedData.data, "Trade Options");
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            let startDate = new Date();
            let endDate = new Date();
            startDate.setDate(startDate.getDate() - 7);

            if (startDate) {
                startDate = startDate.toISOString().split('T')[0];
            }

            if (endDate) {
                endDate = endDate.toISOString().split('T')[0];
            }
            
            const fetchedData = [];

            // Fetch past user trade data for each trade option
            for (const tradeOption of tradeOptions) {
                const tradeId = tradeOption._id;
                const response = await fetchPastUserTrade(tradeId, startDate, endDate);
                console.log(response, "res from cur file for trade option", tradeOption?.name);

                if (response?.data?.investmentFound && Array.isArray(response.data.investmentFound)) {
                    // const pastUserTradeData = response.data.investmentFound;
                    // setPastUserTradeData(prevData => [...prevData, { tradeOption, pastUserTradeData }]);
                    fetchedData.push({ tradeOption, pastUserTradeData: response.data.investmentFound });
                } else {
                    console.log(`No data found for trade option ${tradeOption.name}`);
                }
            }
            setPastUserTradeData(fetchedData); 
        }

        fetchData();
    }, [tradeOptions]);


    return (
        <div>
            <h6 style={{ color: "white", fontSize: "4vw", fontWeight: 600, padding: ".2rem 1rem 0" }}>Portfolio</h6>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                className="mySwiper"
                style={{ padding: ".5rem 1rem" }}
            >
                {currenciesData.map((item, index) => {
                    const tradeOption = tradeOptions.find(option => option._id === item._id) || {};
                    // item.investment_name._id === selectedOption
                    // || item.graph_values
                    const investment = pastUserTradeData.filter(data => data?.investment_name === tradeOption?._id);
                    const pastInvestmentDataV = pastUserTradeData?.map(item => item?.payment);
                    console.log(pastInvestmentDataV, "data aa");

                    if (pastInvestmentDataV.length === 0) {
                        return null; // Skip rendering if there's no corresponding investment
                    }
                    const Currentlysale = {
                        series: [
                            {
                                name: "Past Investment",
                                data: pastInvestmentDataV.map(data => data.payment) || item.graph_values,
                            },
                        ],
                        options: {
                            chart: {
                                opacity: 1,
                                type: "area",
                                toolbar: {
                                    show: false,
                                },
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            stroke: {
                                width: [3, 3],
                                curve: "smooth",
                            },
                            xaxis: {
                                offsetX: 0,
                                offsetY: 0,
                                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                                labels: {
                                    low: 0,
                                    offsetX: 0,
                                    show: false,
                                },
                                axisBorder: {
                                    low: 0,
                                    offsetX: 0,
                                    show: false,
                                },
                                axisTicks: {
                                    show: false,
                                },
                            },

                            yaxis: {
                                show: false,
                            },
                            grid: {
                                show: false,
                            },
                            colors: [item.color],
                            fill: {
                                opacity: [0.5, 0.25, 1],
                            },

                            legend: {
                                show: false,
                            },
                            tooltip: {
                                x: {
                                    format: "MM",
                                },
                            },
                        },
                    };
                    return (
                        <SwiperSlide key={item.value} style={{
                            background: "#181f2d",
                            boxShadow: "0 0 20px rgba(8, 21, 66, 0.05)",
                            borderRadius: "16px",
                            padding: 0,
                            overflow: "hidden",
                            cursor: "pointer",
                            width: "35vw",
                            transition: "250ms"
                        }}>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: ".5rem",
                                padding: ".5rem .75rem 0"
                            }}>
                                <img src={item.img} alt={item.value} style={{ width: "7vw" }} />
                                {tradeOptions?.length > 0 && (
                                    <h5 style={{ fontSize: "3.9vw", fontWeight: "900", marginBottom: "0", color: "white" }}>
                                        {tradeOption.name ? tradeOption.name.toUpperCase() : ""}
                                    </h5>
                                )}
                            </div>
                            <div style={{
                                color: "white",
                                marginTop: "0rem",
                                padding: ".6rem 1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem"
                            }}>
                                <h4 style={{ fontSize: "4vw" }}>$8,322</h4>
                                <div
                                    style={{
                                        display: "flex",
                                        color: "#21c8d7",
                                        fontSize: "2.2vw",
                                        alignItems: "center",
                                        gap: ".2rem"
                                    }}>
                                    <span>+5.23%</span>
                                    <FaArrowTrendUp />
                                </div>
                            </div>
                            <div style={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "2.8vw",
                                padding: "0 1rem",
                                gap: ".5rem"
                            }}>
                                <div style={{
                                    padding: ".25rem .5rem",
                                    borderRadius: "20px",
                                    background: "rgba(33, 200, 215, 0.21)",
                                    color: "#21c8d7"
                                }}>$233</div>
                                <span style={{ color: "#a8a8a8" }}>since 24h</span>
                            </div>
                            <div style={{ width: "100%", marginTop: "-4.5rem" }}>
                                <Chart id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type="area" height={"140px"} width={"118%"} style={{
                                    transform: "translateX(-8%) translateY(46px)",
                                }} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Portfolio;