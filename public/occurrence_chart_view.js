var OccurrenceChartView = function(chartElement, chartData){
  this.chartElement = chartElement;
  this.chartData = chartData;

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
  })








}
