/**
 * Fetch the orders and append to the table
 * 
 * ****************************
 * Please change 'json/orders.json' 
 * with your service endpoint below
 * ****************************
 */
 fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(report => {
        let template = createReportTemplate(report);
        $("#report").append(template);
 });

/**
* Find the template tag and populate it with the data
* @param report 
*/
function createReportTemplate(report) {
const ingredientInfo = report[0].ingrediente
    const beveragetInfo = report[1].beverage
    const clientInfo =report[2].clients[0]
    const clientInfo2 =report[2].clients[1]
    const clientInfo3=report[2].clients[2]
    const monthInfo = report[3].month
    const prueba = { ingredient: ingredientInfo, client: clientInfo, client2: clientInfo2,client3: clientInfo3, month: monthInfo , beverage: beveragetInfo }
 let template = $("#report-template")[0].innerHTML;
 return Mustache.render(template, prueba);
}