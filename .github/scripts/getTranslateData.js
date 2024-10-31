const fs = require('fs');
const url = require('url');
const https = require('https');
const csv = require('csv-parse');

const csvUrl = process.env.CSV_URL ?? "";
const queryString = process.env.QUERY_STRING ?? "";
let query = csvUrl + encodeURIComponent(queryString);
const keyColumn = process.env.KEY_COLUMN;

if(csvUrl == "") {
    const sheetUrl = process.env.SHEET_URL;
    // Парсим URL
    const parsedUrl = url.parse(sheetUrl);
    
    // Извлекаем идентификатор документа
    const documentIdMatch = parsedUrl.pathname.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const documentId = documentIdMatch[1];
    
    // Извлекаем gid из параметров
    const queryParams = new URLSearchParams(parsedUrl.search.slice(1));
    const gid = queryParams.get('gid');
    
    // URL для экспорта CSV
    query = `https://docs.google.com/spreadsheets/d/${documentId}/gviz/tq?gid=${gid}&tqx=out:CSV&headers=1&tq=` + encodeURIComponent(queryString);
}

// Функция для скачивания CSV
function downloadCsv(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Функция для парсинга CSV и конвертации в JSON
function convertCsvToJson(csvData, keyColumn) {
    return new Promise((resolve, reject) => {
        csv.parse(csvData, { columns: true }, (err, records) => {
            if (err) {
                reject(err);
                return;
            }

            const result = {};
            records.forEach(record => {
                if (Object.values(record).some(value => value.trim() !== '')) {
                    const key = record[keyColumn];
                    const transformedRecord = {};

                    // Проходим по всем полям записи и приводим значения к числу, если возможно
                    Object.keys(record).forEach(field => {
                        if (field !== keyColumn) { // Исключаем поле с ключом
                            let value = record[field].trim(); // Убираем лишние пробелы
                            // Преобразуем строку в число, если это возможно
                            if (/^-?\d+(\s\d+)*(\.\d+)?$/.test(value)) {
                                // Убираем пробелы внутри числа и преобразуем в число
                                value = Number(value.replace(/\s+/g, ''));
                            }
                            if(!result[field]) {
                                result[field] = {};
                            }
                            result[field][key] = value;
                        }
                    });
                }
            });

            resolve(result);
        });
    });
}

function cleanString(str, wordToRemove) {
    // Шаг 1: Удаляем все вхождения определённого слова (регистрозависимое удаление)
    let cleanedStr = str.replace(new RegExp(wordToRemove, 'g'), '');

    // Шаг 2: Удаляем все символы, кроме букв и цифр (буквы и цифры из любой языковой группы)
    cleanedStr = cleanedStr.replace(/[^a-zA-Z0-9]/g, '');

    return cleanedStr;
}

async function saveJson(data) {
    const outputPath = './src/js/modules/translate.js';
    const fileContent = `const langs = ${JSON.stringify(data, null, 2)};\nexport default langs;`;
    
    fs.mkdirSync('./src/js/modules', { recursive: true });
    fs.writeFileSync(outputPath, fileContent);

    console.log(`Данные успешно сохранены в файл`);
}

// Основная функция
async function main() {
    try {
        const csvData = await downloadCsv(query);
        const jsonData = await convertCsvToJson(csvData, keyColumn);
        await saveJson(jsonData);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

main();
