module.exports = {
  async rewrites() {
    return [
      {
        source: "/shop/products",
        has: [
          {
            type: "query",
            key: "sale",
            value: "true",
          },
        ],
        destination: "https://buildarmy.com/sale",
      },
      {
        source: "/shop/:path*",
        destination: "https://buildarmy.com/shop",
      },
      {
        source: "/contact",
        destination: "https://buildarmy.com/contact",
      },
      {
        source: "/shipping",
        destination: "https://buildarmy.com/shipping",
      },
      {
        source: "/about-us/:path*",
        destination: "https://buildarmy.com/about-us",
      },
      {
        source: "/legal/:path*",
        destination: "https://buildarmy.com/terms-conditions",
      },
      {
        source: "/returns",
        destination: "https://buildarmy.com/return-policy",
      },
      {
        source: "/about-us/rewards-system",
        destination: "https://buildarmy.com/reward-system",
      },
      {
        source: "/account/:path*",
        destination: "https://buildarmy.com/my-account",
      },
      {
        source: "/post/6th-buildarmy-image-contest",
        destination: "https://buildarmy.com/6th-buildarmy-image-contest",
      },
    ];
  },
};
