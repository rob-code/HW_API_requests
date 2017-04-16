var OccurrenceChartView = function(chartElement, chartData, textElement){
  this.chartElement = chartElement;
  this.chartData = chartData;
  this.textElement = textElement;

  this.data = [];
  this.categories = [];

  for (var category in chartData ) {
    this.data.push(chartData[category]);    
    this.categories.push(category);    
  }

  this.series = [{
    name: "Story Types",
    data: this.data
  }];
  
  this.chart = new Highcharts.Chart({

    chart: {
      type: 'column',
      renderTo: this.chartElement
    },
    title: {
      text: "Last 7 Days"
    },
    series: this.series, 
    xAxis: {
      categories: this.categories
    }
  });


  var table = document.createElement('table');
  table.className = "table-data-container";
 
  var theadElement = document.createElement('thead');
  theadElement.className = "row-header"

  var th1 = document.createElement('th');
  th1.innerText = "Category"; 
  th1.className = "col1";

  var th2 = document.createElement('th');
  th2.innerText = "Stories"; 
  th2.className = "col2";

  table.appendChild(theadElement);
  table.appendChild(th1);
  table.appendChild(th2);

  for (var i = 0; i < this.categories.length; i++){

    var rowElement = document.createElement('tr');

    var categoryElement = document.createElement('td');
    categoryElement.innerText = this.categories[i];
    categoryElement.className = "cell1";
    var dataElement = document.createElement('td');
    dataElement.innerText = this.data[i];
    dataElement.className = "cell2";

    table.appendChild(rowElement);
    table.appendChild(categoryElement);
    table.appendChild(dataElement);

  }

  this.textElement.appendChild(table);



}







