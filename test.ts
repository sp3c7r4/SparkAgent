import { generateReceiptImage, generateReceiptImageBuffer } from './src/utils/Reciept';
import Whatsapp from './src/utils/Whatsapp';

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
// console.log("Started")
// const testData = {
//   account_name: "BARAKAT TEMITOPE OYEKANMI",
//   account_number: "9021512232",
//   bank_code: "999992",
//   currency: "NGN",
//   type: "nuban"
// };

// const result = await createTransferRecipientTool.execute({
//   context: {
//   name: testData.account_name,
//   account_number: testData.account_number,
//   bank_code: testData.bank_code,
//   currency: testData.currency,
//   type: testData.type,
// }});

// console.log(result);
// const appendData = await db.query.banks.findFirst({
//       where: (banks, { eq }) => eq(banks.slug, 'access-bank-ng')
//     });
// console.log(appendData)
// fs.writeFileSync('bank-slugs.json', JSON.stringify(slugs, null, 2))

// console.log((await listBanks()).map(bank => bank.slug))
// console.time("Started inserting wallet")
// await db.insert(wallet).values({
//   balance: 0,
//   is_active: true,
//   user_id: "01JW1PNEF2RGFP5T4FXK092ESP"
//   // 01JW1PNEF2RGFP5T4FXK092ESP
// })

// const findUser = await db.query.users.findFirst({
//   where: (users, { eq }) => eq(users.email, "sarafasatar@gmail.com"),
//   with: {
//     wallet: true,
//   }
// })

// console.log(findUser)
// console.timeEnd("Started inserting wallet")
// const data = {
//   "country": "NG",
//   "type": "bank_account",
//   "account_number": "0111111111",
//   "bvn": "29222222202",
//   "bank_code": "007",
//   "first_name": "Uchenna",
//   "last_name": "Okoro"
// }

// const customer_code = "CUS_r3wgbio9zrc31wl"
// const res:any = await axios({
//   method: "post",
//   url: `https://api.paystack.co/customer/${customer_code}/identification`,
//   headers: {
//     Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//     "Content-Type": "application/json",
//   },
//   data
// })
// console.log(res.data)

// const res = await db.query.users.findFirst({
//   where: (users, { eq }) => eq(users.email, "cyberlacoco@gmail.com")
// })
// console.log(await bcrypt.compare("Djlacoco24s", res.password))

// console.log(await loginUserTool.execute({context: {email: "cyberlacoco@gmail.com", password: "Djlacoco24", pin: "1234"}}))
// import { verifyEmailWorkflow } from './src/mastra/workflows';

// const threadId = "you";
// const resourceId = "me"
// const agents = mastra.getAgent('agent')
// const gen = await agents.generate("How are u", {
//                 threadId,
//                 resourceId,
//               })
//               console.log(gen)
// console.log(gen.text)

const defaultReceiptData = {
  amount: '25,000',
  currency: '₦',
  date: 'June 1, 2025 at 03:38:11 PM',
  accountBalance: '30,000',
  accountName: 'John Doe',
  status: 'Success'
};


// const receiptBuffer = await generateReceiptImageBuffer(defaultReceiptData, 'test-receipt.png')
// const tx_id = `Transaction-${Date.now()}.png`
// const upload_buffer = await Whatsapp.uploadMediaBuffer(receiptBuffer, tx_id, 'png')
// console.log(upload_buffer);
// console.log("Receipt generated successfully!", receiptBuffer.length, "bytes", "uploaded to WhatsApp with ID:", upload_buffer.id);

await Whatsapp.sendMediaMessage("2347032622430", "554597174181405", "*Transaction Receipt*\nHere is your transaction receipt. Thank you for using our service!");