import axios from 'axios'
import {db} from './src/db'
import {banks} from './src/db/schema'
import { createTransferRecipientTool } from './src/mastra/tools';
import { } from '@mastra/core'

// const fs = require('fs')

// async function listBanks() {
//   const res = await axios.get("https://api.paystack.co/bank", {
//     headers: {
//       Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
//     },
//     params: {
//       country: "nigeria"
//     }
//   })
//   return res.data
// }

// const res = await listBanks()
// // const slugs = res.data.map(data => ({
// //   name: data.name,
// //   slug: data.slug
// }))
console.log("Started")
const testData = {
  account_name: "BARAKAT TEMITOPE OYEKANMI",
  account_number: "9021512232",
  bank_code: "999992",
  currency: "NGN",
  type: "nuban"
};

const result = await createTransferRecipientTool.execute({
  context: {
  name: testData.account_name,
  account_number: testData.account_number,
  bank_code: testData.bank_code,
  currency: testData.currency,
  type: testData.type,
}});

console.log(result);
// const appendData = await db.query.banks.findFirst({
//       where: (banks, { eq }) => eq(banks.slug, 'access-bank-ng')
//     });
// console.log(appendData)
// fs.writeFileSync('bank-slugs.json', JSON.stringify(slugs, null, 2))

// console.log((await listBanks()).map(bank => bank.slug))