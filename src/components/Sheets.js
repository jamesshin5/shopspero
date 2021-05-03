import React from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = "1yWZT9Xx5_Q3DKjdtswqd5DQE15VyKVZcJk3UKv5Px5w";
const SHEET_ID = "2005855658";
const CLIENT_EMAIL = "database@spero-database.iam.gserviceaccount.com";
const PRIVATE_KEY = ""; // TODO: MANUALLY ADD LOCALLY

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
// const doc = new GoogleSpreadsheet("1yWZT9Xx5_Q3DKjdtswqd5DQE15VyKVZcJk3UKv5Px5w");

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