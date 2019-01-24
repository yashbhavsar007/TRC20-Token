module.exports = {
    networks: {
        development: {
            from: 'TR7Kg2Yf5swVFm2hbC6GX9MQzVzuA1RwV3',
            privateKey: '431996138f9c8592c9e632213b05b84d53afe831ba36d989a2a871ad214299d3',
            userFeePercentage: 30, // or consume_user_resource_percent
            feeLimit: 100000000, // or fee_limit
           // originEnergyLimit: 10000000, // or origin_energy_limit
            callValue: 0, // or call_value
            fullNode: "http://127.0.0.1:8500",
            solidityNode: "http://127.0.0.1:8600",
            eventServer: "http://127.0.0.1:9090",
            network_id: "*"
        },
        production: {}
    }
};
