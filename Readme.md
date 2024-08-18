# Load Testing

### This is an Load Testing Repository for the beginners.

## For Installation follow the link: [K6 Setup](https://grafana.com/docs/k6/latest/set-up/install-k6/)

# HTML Report: [Link](assets/summary.html)

<code>import { htmlReport } from https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js</code>

# K6 Dashboard:

[View the Dashboard file](assets/html-report.html)

To know more about [Web Dashboard](https://grafana.com/docs/k6/latest/results-output/web-dashboard/)

<h3>K6 Environment Variables</h3>
    <table>
        <thead>
            <tr>
                <th>Environment Variable</th>
                <th>Description</th>
                <th>Default Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>K6_WEB_DASHBOARD</td>
                <td>Enable the web dashboard</td>
                <td>false</td>
            </tr>
            <tr>
                <td>K6_WEB_DASHBOARD_HOST</td>
                <td>Host to bind the web dashboard to</td>
                <td>localhost</td>
            </tr>
            <tr>
                <td>K6_WEB_DASHBOARD_PORT</td>
                <td>Port to bind the web dashboard to</td>
                <td>5665</td>
            </tr>
            <tr>
                <td>K6_WEB_DASHBOARD_PERIOD</td>
                <td>Period in seconds to update the web dashboard</td>
                <td>10s</td>
            </tr>
            <tr>
                <td>K6_WEB_DASHBOARD_OPEN</td>
                <td>Open the web dashboard in the default browser</td>
                <td>false</td>
            </tr>
            <tr>
                <td>K6_WEB_DASHBOARD_EXPORT</td>
                <td>Filename to automatically export the HTML test report to at the end of the test run. By default, the value is empty and the report isn’t exported.</td>
                <td>``</td>
            </tr>
        </tbody>
    </table>

### To run Load Testing script (with Web Report > html-report.html):

<code>K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js</code>

<h3>To run testing script and monitor the data in local dashboard, we have implemented Grafana local dashboard.</h3>

1. navigate inside LoadTesting directory
   <br></br>
   <code>cd LoadTesting</code>

2. Setting up docker compose file, which triggers grafana in <code>localhost:3000</code> and influxdb in system's <code>localhost:8086</code>
   <br></br>
   <code>docker compose up -d influxdb grafana</code>

3. To run any of the scripts, the script needs to be inside the <code>/scripts</code> folder of LoadTesting directory.
   <br></br>
   <code>docker compose run k6 run /scripts/{scriptName}</code>
