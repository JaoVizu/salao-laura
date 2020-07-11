import {GoogleSpreadsheet} from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) =>{
  try{
    await doc.useServiceAccountAuth({
      client_email : process.env.SHEET_CLIENT_EMAIL,
      private_key : process.env.SHEET_PRIVATE_KEY.replace(/\\n/g, "\n")
    })

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);
    await sheet.addRow({
      Nome : data.nome,
      Whatsapp : data.whatsapp,
      Nota : data.nota,
      Opiniao :  data.opiniao
    })
    
    res.end(JSON.stringify({
      message : 'Opinião enviada, obrigada!!!'
    }))

  }catch(error){
    res.end(JSON.stringify({
      errorMessage : error
    }))
  }
}