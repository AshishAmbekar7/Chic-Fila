
const report = require('multiple-cucumber-html-reporter');
const reporter = require('cucumber-html-reporter')
const options = 
{
  theme: 'bootstrap',
  jsonDir: 'cypress/cucumber-json',
  output: 'reports/html_simple/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  jsonDir: 'C:/Users/sbavisa/CypressAutomation/cypress/integration/examples/cucumber_reports',
	reportPath: 'cypress/integration/examples/cucumber_reports/cfa_htmlreports.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'CFA project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            // {label: 'Execution Start Time     ', value : "data[0].elements[0].steps[0].duration"},
            // {label: 'Execution End Time     ', value : " "}
        ]
    }
}

report.generate(options);

