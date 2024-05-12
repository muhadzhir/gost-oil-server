import { Injectable } from '@nestjs/common'

import * as ExcelJS from 'exceljs'
import { NumbersService } from "../numbers/numbers.service";

@Injectable()
export class ExcelService {
  constructor(private numbersService: NumbersService) { }
  async downloadAllNumbers(): Promise<string> {
    const data = await this.numbersService.getAllNumbers()
    const numbers = data.map(({ dataValues }) => ({
      'Номерок': dataValues.id,
      'Телефон': dataValues.phone,
      // 'Заправка': getOilRusName(dataValues.oilStation)
    }))
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Data')

    const headers = ['Номерок', 'Телефон']
    worksheet.addRow(headers)

    numbers.forEach(item => {
      const row = []
      headers.forEach(header => {
        row.push(item[header])
      })
      worksheet.addRow(row)
    })
    worksheet.getColumn(2).width = 20
    const filePath = 'src/files/data.xlsx'
    await workbook.xlsx.writeFile(filePath)
    return filePath
  }
}
