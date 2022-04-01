const psi = require('psi')
const fs = require('fs')
require('dotenv').config()

const result = JSON.parse(fs.readFileSync('result.json', 'utf8'))
const pages = JSON.parse(fs.readFileSync('pages.json', 'utf8'))

const updateResult = () => {
    fs.writeFileSync('./result.json', JSON.stringify(result, null, 4))
}

const runChecker = async ({pageTitle, url, type}) => {
    const { data } = await psi(url, {
        strategy: type,
        key: process.env.API_KEY
    })

    const cruxMetrics = {
        "performance": data.lighthouseResult.categories.performance.score,
        "fcp": data.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
        "fid": data.loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category
    }

    console.log(JSON.stringify(data.lighthouseResult.audits['speed-index']))

    const lighthouseMetrics = {
        'fcp': data.lighthouseResult.audits['first-contentful-paint'].displayValue,
        'si': data.lighthouseResult.audits['speed-index'].displayValue,
        'tti': data.lighthouseResult.audits['interactive'].displayValue,
        'fmp': data.lighthouseResult.audits['first-meaningful-paint'].displayValue,
    };

    result.push({
        ...cruxMetrics,
        ...lighthouseMetrics,
        type,
        pageTitle,
        date: new Date().toLocaleDateString()
    })
    updateResult()
}

(() => {
    pages.map(runChecker)
})()
