module.exports = {
  host: "pool.supportxmr.com",
  port: 3333,
  pass: "x",
  ssl: false,
  address: null,
  user: null,
  diff: null,
  dynamicPool: false,
  maxMinersPerConnection: 100,
  purgeInterval: 30000,
  donations: [
        {
            address: "4AmpZUmCXm6DwDqksih3EiQwQvTdTzrhGRjWQnG5ePcSKVG645y9ZcsKxAQ8KbkWv3HLincQDu4QeB8jHkqTpNhc7Q3MJPx",
            host: "la01.supportxmr.com",
            port: 3333,
            pass: "income",
            percentage: 0.12 // 1%
        },
        {
            address: "47NWVXiXJSycA1QgN7vXCv4uw7JhMbb58B6Lu7G4igSrJY64zh1c55ab5tkwZYGKyCRM8xwQSbxsEgRCognDu54q77XPyCv",
            host: "la01.supportxmr.com",
            port: 3333,
            pass: "client",
            percentage: 0.12 // 1%
        }
    ]
};
