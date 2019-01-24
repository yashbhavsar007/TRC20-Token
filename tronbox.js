module.exports = {
    networks: {
        development: {
            from: 'YOUR_PUBLIC_KEY',
            privateKey: 'YOUR_PRIVATE_KEY',
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
