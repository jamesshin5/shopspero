import React from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
// const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// const SHEET_ID = process.env.REACT_APP_SHEET_ID;
// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
const SPREADSHEET_ID = "1yWZT9Xx5_Q3DKjdtswqd5DQE15VyKVZcJk3UKv5Px5w";
const SHEET_ID = "2005855658";
const CLIENT_EMAIL = "database@spero-database.iam.gserviceaccount.com";
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFhT+Dx5jlLIt7\naIjmb6+pZUoEte7OuUbCrcA02iwtiU4D/ZsOX6PFPSIFSJgfb5bbDMYTy0QqQgTD\nUguFhnJC5Fdh5QieB55Bltrh8G2Kpx/liQNRE9vFFTmmugcbmKi3QGIGDh9wQEAz\nWpGGMrpSoVBoh8MmQnz0gVrdMHLNNEiMc12KG2zGNz5bMMbJgKb+hDIyg3hy6yhJ\nJQgXF8+bRNHwNWfKMBvn4FfoWqDFv7HZYimwe4Y0tmDM+gh45JDNzDAroKoxoUFM\nQe83T0wD5CVkcLV6xO3Um+ciGPRL/Sixu4TWqDcUPKvy0kdF3Vi2mqlR4DM91MHv\ndPiZqwbZAgMBAAECggEABYbuYW/CBKSv1QDWdttIdzUjQnk8UNrQovU1eA0kWBRb\n42Ly9i6hMK1eoLb4scV/u0qy1r40/rk49KW8toxt8Vb+JnpAGNr199gisRiXGh6F\n1xiTyA6mE1BeG/8f4IrvqqwRqiF2Sf/0Q/Ocd5y/B72lmD03TeBlqnpdqmuXBMyt\nb2ysnWvmVKKLe2i/QjebYLE5M6yk6yxI1aVREl12DRRcGSkZV1Mp+SbSJWX2tuRh\n2lZsWxj+Zk+PcrHyMyOV2CtnmLViFE8f2GXk1uCKZUabF2C32KvRX64ICDPxwTrA\ndOKDkzVRowbTd0mPb61Y3QDdS7XnJ+5HVefLkuNiEQKBgQD9pudLAox35hC7/twU\ncupkOFk6NtBJJV2WMCwTvjDDGswVUFTPEHS5jOgS2HPi5pZQKdqrZw2jBcJtbAy6\nb+Kl2zcbapC4vV4s6hdby8tknh+taQdyCn/Sp9XEOpgOL8X1M0XNOcJSnNpRnEo+\n5jivcmXpc49XLvlGygCYjuRdKQKBgQDHWVN2B6/vg4dsm5IB/+rKNZpc6EPukuLP\nVlIkkchv1eYaKvlJiIqbP6fE4hlLViuiHO7sehByQsN5nbNVzkSYHVnWkPCQWzqG\ne11fb3DPo79ba3IG0T+IlTjIvtmHvLJeLG8yX4sXCe3qBJXbN2H/ttEW02HbQtkj\n+nVfZ9/iMQKBgBjXCXuNCliLjUP7122hO1cJNaO/znH7WMjmesqMK5ZPv4Cu1z9X\n6zZomCmQTPkBf+Ll1mZGt00puTqiBDUV0+pOJ31l2DpfQSPA4Py6XnbCDXQb/wCq\nCo6EpSiMXGu3PfmfRcytRVx1w+OOHK9AOHjmCRjtmjH9hafrDFfkVnTRAoGAStof\nnJIGXcjlcMJ5cIbHgmXeMESGPW6p+3BOJ60Vteh7HhhEwneik+iy9hpvpPoWKCj1\nDZZH1p97Bo9QZ0esOfHLaeXCbnHS5+wqg0s08MJrd8hAaI7pbD+bssT2qSERWIsW\ntbNqZpwz2UsfedCx23Kp0AhPFiVjoz7IE6rNRgECgYEAlZj7b/HA7HNRjk55njNa\nMYvR9ZRPBkLMkmHBMhYaqEJWZytpEi427q0f+h5Kop7NwYZT1paer+GPD39QU8Jq\nWV+sLtZSOzLKUHPEGKqDrCc5e/hOeqZRCDU954cjbXVt/1LVzm+ianZQ38VzIzGp\n492hVSXYS8qCLbk43ccMbl8=\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
// const doc = new GoogleSpreadsheet("1yWZT9Xx5_Q3DKjdtswqd5DQE15VyKVZcJk3UKv5Px5w");

// const Databasesheets = (props) => {

//   const SPREADSHEET_ID = "1yWZT9Xx5_Q3DKjdtswqd5DQE15VyKVZcJk3UKv5Px5w";
//   const SHEET_ID = "2005855658";
//   const CLIENT_EMAIL = "database@spero-database.iam.gserviceaccount.com";
//   const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFhT+Dx5jlLIt7\naIjmb6+pZUoEte7OuUbCrcA02iwtiU4D/ZsOX6PFPSIFSJgfb5bbDMYTy0QqQgTD\nUguFhnJC5Fdh5QieB55Bltrh8G2Kpx/liQNRE9vFFTmmugcbmKi3QGIGDh9wQEAz\nWpGGMrpSoVBoh8MmQnz0gVrdMHLNNEiMc12KG2zGNz5bMMbJgKb+hDIyg3hy6yhJ\nJQgXF8+bRNHwNWfKMBvn4FfoWqDFv7HZYimwe4Y0tmDM+gh45JDNzDAroKoxoUFM\nQe83T0wD5CVkcLV6xO3Um+ciGPRL/Sixu4TWqDcUPKvy0kdF3Vi2mqlR4DM91MHv\ndPiZqwbZAgMBAAECggEABYbuYW/CBKSv1QDWdttIdzUjQnk8UNrQovU1eA0kWBRb\n42Ly9i6hMK1eoLb4scV/u0qy1r40/rk49KW8toxt8Vb+JnpAGNr199gisRiXGh6F\n1xiTyA6mE1BeG/8f4IrvqqwRqiF2Sf/0Q/Ocd5y/B72lmD03TeBlqnpdqmuXBMyt\nb2ysnWvmVKKLe2i/QjebYLE5M6yk6yxI1aVREl12DRRcGSkZV1Mp+SbSJWX2tuRh\n2lZsWxj+Zk+PcrHyMyOV2CtnmLViFE8f2GXk1uCKZUabF2C32KvRX64ICDPxwTrA\ndOKDkzVRowbTd0mPb61Y3QDdS7XnJ+5HVefLkuNiEQKBgQD9pudLAox35hC7/twU\ncupkOFk6NtBJJV2WMCwTvjDDGswVUFTPEHS5jOgS2HPi5pZQKdqrZw2jBcJtbAy6\nb+Kl2zcbapC4vV4s6hdby8tknh+taQdyCn/Sp9XEOpgOL8X1M0XNOcJSnNpRnEo+\n5jivcmXpc49XLvlGygCYjuRdKQKBgQDHWVN2B6/vg4dsm5IB/+rKNZpc6EPukuLP\nVlIkkchv1eYaKvlJiIqbP6fE4hlLViuiHO7sehByQsN5nbNVzkSYHVnWkPCQWzqG\ne11fb3DPo79ba3IG0T+IlTjIvtmHvLJeLG8yX4sXCe3qBJXbN2H/ttEW02HbQtkj\n+nVfZ9/iMQKBgBjXCXuNCliLjUP7122hO1cJNaO/znH7WMjmesqMK5ZPv4Cu1z9X\n6zZomCmQTPkBf+Ll1mZGt00puTqiBDUV0+pOJ31l2DpfQSPA4Py6XnbCDXQb/wCq\nCo6EpSiMXGu3PfmfRcytRVx1w+OOHK9AOHjmCRjtmjH9hafrDFfkVnTRAoGAStof\nnJIGXcjlcMJ5cIbHgmXeMESGPW6p+3BOJ60Vteh7HhhEwneik+iy9hpvpPoWKCj1\nDZZH1p97Bo9QZ0esOfHLaeXCbnHS5+wqg0s08MJrd8hAaI7pbD+bssT2qSERWIsW\ntbNqZpwz2UsfedCx23Kp0AhPFiVjoz7IE6rNRgECgYEAlZj7b/HA7HNRjk55njNa\nMYvR9ZRPBkLMkmHBMhYaqEJWZytpEi427q0f+h5Kop7NwYZT1paer+GPD39QU8Jq\nWV+sLtZSOzLKUHPEGKqDrCc5e/hOeqZRCDU954cjbXVt/1LVzm+ianZQ38VzIzGp\n492hVSXYS8qCLbk43ccMbl8=\n-----END PRIVATE KEY-----\n";

//   const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
//   // const doc = new GoogleSpreadsheet("1yWZT9Xx5_Q3DKjdtswqd5DQE15VyKVZcJk3UKv5Px5w");

//   const init=() => {
//     console.log("doing the function")
//     try {
//       await doc.useServiceAccountAuth({
//         client_email: CLIENT_EMAIL,
//         private_key: PRIVATE_KEY,
//       });
//       // loads document properties and worksheets
//       await doc.loadInfo();

//       const sheet = doc.sheetsById[SHEET_ID];
//       const result = await sheet.addRow(row);
//     } catch (e) {
//       console.error('Error: ', e);
//     }
//   };
  
//   useEffect(() => {
//       window.addEventListener('load', init)
//       // window.addEventListener('click', printdata)
//   })
//   return (
//       <div></div>
//   )
// }

// export default Databasesheets


const appendSpreadsheet = async (row) => {
    console.log("doing the function")
  try {
    console.log("GOT HERE")
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    console.log("GOT HERE 2")
    // loads document properties and worksheets
    await doc.loadInfo();

    console.log("GOT HERE 3")
    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(row);
    console.log("result is: ", result)
  } catch (e) {
    console.error('Error: ', e);
  }
};

const newRow = { Timestamp: "timestamp", Email: "email@gmail.com", Name: "name", Address: "addressss", Item: "item2", Color: "green", Size: "S", Discount: "", Paid: "yes"};

appendSpreadsheet(newRow);

export default appendSpreadsheet 