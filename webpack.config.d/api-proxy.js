config.devServer = config.devServer || {};
config.devServer.proxy = [
    {
        context: ["/api"],
        target: "https://sksnv-5-175-178-17.run.pinggy-free.link",
        changeOrigin: true,
        secure: false,
        headers: {
            "User-Agent": "curl/8.0"
        }
    }
];
