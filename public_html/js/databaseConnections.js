var todaysDate = moment().tz("Asia/Kolkata").format('DD/MM/YY');
var todaysHour = moment().tz("Asia/Kolkata").format('HH');
var todaysMonth = moment().tz("Asia/Kolkata").format('MM/YY');
var todaysYear = moment().tz("Asia/Kolkata").format('YY');

document.getElementsByClassName("dateButton")[0].innerHTML = todaysDate;
document.getElementsByClassName("dateButton")[1].innerHTML = todaysDate;

document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
document.getElementsByClassName("incrementButton")[0].disabled = true;

document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
document.getElementsByClassName("incrementButton")[1].disabled = true;

document.getElementById("bottomButtons").hidden = true;

var xAxisArray = [];
var dataSetOne = [];
var dataSetTwo = [];

var detailedxAxisArray = [];
var detailedDataSetOne = [];
var detailedDataSetTwo = [];

var todaysFlag = 1;

var tag = "day";

var selectedDay = todaysDate;
var selectedMonth = todaysMonth;
var selectedYear = todaysYear;

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var myBarChart=null;

showdetailTag = "false";


 $(".modal").show();


fetchDay(todaysDate, todaysHour, todaysFlag);

var smallScreen;
var w = $(window).width();
console.log("width" + w);
if (w > 768 ){
smallScreen = false;

}

else {
smallScreen = true;
}


$(window).resize(function() {
location.reload();
  var w = $(window).width();
console.log("width" + w);
if (w > 768 && smallScreen){
console.log("Changed to Large");
smallScreen = false;
location.reload();
//drawGraph();

}
else if (w < 768 && !(smallScreen)){
console.log("Changed to Small");
smallScreen = true;
location.reload();
//drawGraph();

}
});


function fetchDay(date,  hour, flag){
	dataSetOne=[];
	dataSetTwo=[];
	xAxisArray = [];
	
	detailedxAxisArray = [];
	detailedDataSetOne = [];
	detailedDataSetTwo = [];
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/database/Database.sqlite', true);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function(e) {


	var uInt8Array = new Uint8Array(this.response);
	var db = new SQL.Database(uInt8Array);
	
	if(Boolean(flag)){
	  	var stmt = db.prepare("SELECT Consumption,Production,Time FROM Data WHERE Date LIKE '"+ date +"' and Time <= '"+ hour + ":00'");
	
	  	var sumQuery = db.prepare("SELECT SUM(Consumption),SUM(Production),SUM(NetConsumption) FROM Data WHERE Date LIKE '" + date +"' and Time <= '" + hour + ":00'");
	          }
	else{
	  	var stmt = db.prepare("SELECT Consumption,Production,Time FROM Data WHERE Date LIKE '"+ date +"'");
	
	 	 var sumQuery = db.prepare("SELECT SUM(Consumption),SUM(Production), SUM(NetConsumption) FROM Data WHERE Date LIKE '" + date +"'");
	
	 }
	 
	    while(stmt.step()) { 
	        var row = stmt.getAsObject();
	        var rowData = stmt.get();
	        dataSetOne.push(parseFloat(rowData[0]).toFixed(2));
            dataSetTwo.push(parseFloat(rowData[1]).toFixed(2)); 
            xAxisArray.push(rowData[2]);

            detailedDataSetOne.push(rowData[0]);
            detailedDataSetTwo.push(rowData[1]); 
            detailedxAxisArray.push(rowData[2]);
	    }

	    while(sumQuery.step()) { 
	        
            var row = sumQuery.getAsObject();
	        var rowData = sumQuery.get();
	        document.getElementsByClassName("consumptionText")[0].innerHTML = rowData[0] | 0;
	        document.getElementsByClassName("consumptionText")[1].innerHTML = rowData[0] | 0;
	        document.getElementsByClassName("solarProductionText")[0].innerHTML = rowData[1] | 0;
	        document.getElementsByClassName("solarProductionText")[1].innerHTML = rowData[1] | 0;
	        document.getElementsByClassName("sentToGridText")[0].innerHTML = Math.abs(rowData[2] | 0);
	        document.getElementsByClassName("sentToGridText")[1].innerHTML = Math.abs(rowData[2] | 0);

	       document.getElementById("greenEnergyText").innerHTML = parseInt((parseInt(rowData[1]) /  parseInt(rowData[0]))*100);

	        
	        
	        
	               
	    }
	      
	    drawGraph();
	
	}
	
    xhr.send();

}


function fetchMonth(date, flag){
	 dataSetOne=[];
	 dataSetTwo=[];
	 xAxisArray = [];

        detailedxAxisArray = [];
	detailedDataSetOne = [];
	detailedDataSetTwo = [];
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/database/Database.sqlite', true);
	xhr.responseType = 'arraybuffer';
	
	xhr.onload = function(e) {


	var uInt8Array = new Uint8Array(this.response);
	  var db = new SQL.Database(uInt8Array);
	
	if(Boolean(flag)){
	  	var stmt = db.prepare("SELECT SUM(Consumption),SUM(Production),Date FROM Data WHERE Date LIKE '%"+ date +"' and Date < '" + todaysDate +"' group by Date");
	
	  	var sumQuery = db.prepare("SELECT SUM(Consumption),SUM(Production),SUM(NetConsumption) FROM Data WHERE Date LIKE '%" + date +"' and Date < '" + todaysDate +"'");
	  	
	  	var detailedQuery = db.prepare("SELECT Consumption, Production,Date,Time FROM Data where Date like '%"+ date +"' and Date < '" + todaysDate +"'");
	  	
	  	max = moment(todaysDate, "DD/MM/YY").format('DD');
	          }
	else{
	  	var stmt = db.prepare("SELECT SUM(Consumption),SUM(Production),Date FROM Data WHERE Date LIKE '%"+ date +"' group by Date");
	
	  	var sumQuery = db.prepare("SELECT SUM(Consumption),SUM(Production), SUM(NetConsumption) FROM Data WHERE Date LIKE '%" + date +"'");

                var detailedQuery = db.prepare("SELECT Consumption, Production,Date,Time FROM Data where Date like '%"+ date +"'");
                
              

	}
	
	    while(stmt.step()) { 
	        var row = stmt.getAsObject();
	        var rowData = stmt.get();
	        dataSetOne.push(parseFloat(rowData[0]).toFixed(2));
		dataSetTwo.push(parseFloat(rowData[1]).toFixed(2)); 
		var da = moment(rowData[2], "DD/MM/YY").format('DD');
		xAxisArray.push(da);
    	}
		
	while(sumQuery.step()) { 
	        var row = sumQuery.getAsObject();
	        var rowData = sumQuery.get();
	       
            document.getElementsByClassName("consumptionText")[0].innerHTML = rowData[0] | 0;
	        document.getElementsByClassName("solarProductionText")[0].innerHTML = rowData[1] | 0;
	        document.getElementsByClassName("sentToGridText")[0].innerHTML = Math.abs(rowData[2] | 0);
        
            document.getElementsByClassName("consumptionText")[1].innerHTML = rowData[0] | 0;
	        document.getElementsByClassName("solarProductionText")[1].innerHTML = rowData[1] | 0;
	        document.getElementsByClassName("sentToGridText")[1].innerHTML = Math.abs(rowData[2] | 0);
        
	        
		document.getElementById("greenEnergyText").innerHTML = parseInt((parseInt(rowData[1])/ parseInt(rowData[0]))*100);

    	}

	var current=0;
        while(detailedQuery.step()) { 
	        var row = detailedQuery.getAsObject();
	        var rowData = detailedQuery.get();
	        detailedDataSetOne.push(rowData[0]);
		detailedDataSetTwo.push(rowData[1]);
		var day = parseInt(moment(rowData[2], "DD/MM/YY").format('DD'));
		if(day == current){
		detailedxAxisArray.push("");}
		else{ 
		detailedxAxisArray.push(day);
		current++;
		
		}
    	}

    drawGraph();

  }

 xhr.send();

}


function fetchYear(date, flag){
	 detailedxAxisArray = [];
	detailedDataSetOne = [];
	detailedDataSetTwo = [];
	dataSetOne=[];
	dataSetTwo=[];
	xAxisArray = [];
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/database/Database.sqlite', true);
	xhr.responseType = 'arraybuffer';
        var maxMonth = 0

        
	xhr.onload = function(e) {

		var uInt8Array = new Uint8Array(this.response);
  		var db = new SQL.Database(uInt8Array);

	if(Boolean(flag)){
	
		if(todaysMonth == ("01/" + todaysYear)){
	                maxMonth = 1;
	            }
	        else{
	            maxMonth = (parseInt(moment(todaysDate, "DD/MM/YY").format('M'))-1);
	        }
		
         var num = 0,j=0;
	for (var i=1 ; i <= maxMonth; i++){
            	  if (i < 10){
               var monthVar = "0" + i;
            }
            else{
               var  monthVar = i;
            }
	
  		var stmt = db.prepare("SELECT SUM(Consumption), SUM(Production) FROM Data WHERE Date LIKE '%"+ monthVar +"/" + todaysYear + "'");


		var detailedQuery = db.prepare("SELECT SUM(Consumption), SUM(Production),Date FROM Data WHERE Date LIKE '%"+ monthVar +"/" + todaysYear + "' group by Date");
  
	          while(stmt.step()) { 
		        var row = stmt.getAsObject();
		        var rowData = stmt.get();
		        dataSetOne.push(parseFloat(rowData[0]).toFixed(2));
			dataSetTwo.push(parseFloat(rowData[1]).toFixed(2)); 
			xAxisArray.push(months[num]);
			num++;
		  }
		  
		  
		    while(detailedQuery.step()) { 
		        var row = detailedQuery.getAsObject();
		        var rowData = detailedQuery.get();
		        detailedDataSetOne.push(rowData[0]);
			detailedDataSetTwo.push(rowData[1]);
			var month = parseInt(moment(rowData[2], "DD/MM/YY").format('MM'));
			if (j == month){
				detailedxAxisArray.push("");

			}
			else{
			detailedxAxisArray.push(months[month-1]);
			j++;
			
			}
		  }
			
			
	
		
	             
	  }
	  
	  var stmt = db.prepare("SELECT SUM(Consumption), SUM(Production) FROM Data WHERE Date LIKE '%/" + todaysMonth + "' and Date < '" + todaysDate + "'");
	  
	  var detail = db.prepare("SELECT SUM(Consumption), SUM(Production),Date FROM Data WHERE Date LIKE '%/" + todaysMonth + "' and Date < '" + todaysDate + "' group by Date") ;


  
	          while(stmt.step()) { 
		        var row = stmt.getAsObject();
		        var rowData = stmt.get();
		        dataSetOne.push(parseFloat(rowData[0]).toFixed(2));
			dataSetTwo.push(parseFloat(rowData[1]).toFixed(2)); 
			xAxisArray.push(months[num]);
			
		  }
		  
		  while(detail.step()) { 
		        var row = detail.getAsObject();
		        var rowData = detail.get();
		        detailedDataSetOne.push(rowData[0]);
			detailedDataSetTwo.push(rowData[1]);
			var month = parseInt(moment(rowData[2], "DD/MM/YY").format('MM'));
			if (j == month){
				detailedxAxisArray.push("");

			}
			else{
			detailedxAxisArray.push(months[month-1]);
			j++;
			
			}
		  }
		  
		
	  
	var start = moment("2016-01-01");
        var end = moment().tz("Asia/Kolkata").format('YYYY-MM-DD');
        var numOfDays =  start.diff(end, "days") ;
        
	  
		var sumQuery = db.prepare("SELECT SUM(Consumption), SUM(Production) ,SUM(NetConsumption) FROM Data WHERE Date LIKE '%/"+todaysYear+"' group by Date  limit "+ Math.abs(numOfDays));
		
		var consumptionTotal=0, productionTotal=0, net = 0;
	          
	          while(sumQuery.step()) { 
			        var row = sumQuery.getAsObject();
			        var rowData = sumQuery.get();
				consumptionTotal = consumptionTotal + parseInt(rowData[0]);
				productionTotal = productionTotal + parseInt(rowData[1]);
				net = net + parseInt(rowData[2]);
				//console.log(rowData[1]);     
			}
	
			     document.getElementsByClassName("consumptionText")[0].innerHTML = consumptionTotal;
		        document.getElementsByClassName("solarProductionText")[0].innerHTML = productionTotal;
		        document.getElementsByClassName("sentToGridText")[0].innerHTML = Math.abs(net);
        
         document.getElementsByClassName("consumptionText")[1].innerHTML = consumptionTotal;
		        document.getElementsByClassName("solarProductionText")[1].innerHTML = productionTotal;
		        document.getElementsByClassName("sentToGridText")[1].innerHTML = Math.abs(net);
		        
		       document.getElementById("greenEnergyText").innerHTML=parseInt((productionTotal/consumptionTotal)*100);

        }
	
	else{
	
	maxMonth = 12;
	
  	var num = 0, j=0;
	for (var i=1; i <= maxMonth; i++){
            	
            	 if (i < 10){
               var monthVar = "0" + i;
            }
            else{
               var  monthVar = i;
            }
	
  		var stmt = db.prepare("SELECT SUM(Consumption), SUM(Production) FROM Data WHERE Date LIKE '%/"+ monthVar+"/"+ date+"'") ; 
  		
  		
  		var detailedQuery = db.prepare("SELECT SUM(Consumption), SUM(Production),Date FROM Data WHERE Date LIKE '%/"+ monthVar+"/"+ date+"' group by Date")  
  		
	          while(stmt.step()) { 
		        var row = stmt.getAsObject();
		        var rowData = stmt.get();
		        dataSetOne.push(parseFloat(rowData[0]).toFixed(2));
			dataSetTwo.push(parseFloat(rowData[1]).toFixed(2)); 
			xAxisArray.push(months[num]);
			num++;
		  }
		  
		   
		    while(detailedQuery.step()) { 
		        var row = detailedQuery.getAsObject();
		        var rowData = detailedQuery.get();
		        detailedDataSetOne.push(rowData[0]);
			detailedDataSetTwo.push(rowData[1]);
			var month = parseInt(moment(rowData[2], "DD/MM/YY").format('MM'));
			if (j == month){
				detailedxAxisArray.push("");

			}
			else{
			detailedxAxisArray.push(months[month-1]);
			j++;
			
			}
		
		  }
	
		
	             
	  }
	 
	  var start = moment("2016-01-01");
          var end = moment().tz("Asia/Kolkata").format('YYYY-MM-DD');
          var numOfDays =  start.diff(end, "days") ;
	  //console.log(Math.abs(numOfDays));
	  
		var sumQuery = db.prepare("SELECT SUM(Consumption), SUM(Production) ,SUM(NetConsumption) FROM Data WHERE Date LIKE '%/"+date+"'");
		
		var consumptionTotal=0, productionTotal=0, net = 0;
	          
	          while(sumQuery.step()) { 
			        var row = sumQuery.getAsObject();
			        var rowData = sumQuery.get();
				consumptionTotal = consumptionTotal + parseInt(rowData[0]);
				productionTotal = productionTotal + parseInt(rowData[1]);
				net = net + parseInt(rowData[2]);
				//console.log(rowData[1]);     
			}
	
			document.getElementsByClassName("consumptionText")[0].innerHTML = consumptionTotal;
		        document.getElementsByClassName("solarProductionText")[0].innerHTML = productionTotal;
		        document.getElementsByClassName("sentToGridText")[0].innerHTML = Math.abs(net);
        
        document.getElementsByClassName("consumptionText")[0].innerHTML = consumptionTotal;
		        document.getElementsByClassName("solarProductionText")[0].innerHTML = productionTotal;
		        document.getElementsByClassName("sentToGridText")[0].innerHTML = Math.abs(net);
		        
		        		       document.getElementById("greenEnergyText").innerHTML = parseInt((productionTotal/consumptionTotal)*100);
	
}

    

    ////console.log( dataSetOne);
    drawGraph();

}

xhr.send();

}

function fetchLifetime(){
	
	dataSetOne=[];
	dataSetTwo=[];
	xAxisArray = [];
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/database/Database.sqlite', true);
	xhr.responseType = 'arraybuffer';
        var maxMonth = 0;
	var cSum = 0.0,pSum = 0.0,cSumTotal = 0.0,pSumTotal = 0.0;
       
        
	xhr.onload = function(e) {

		var uInt8Array = new Uint8Array(this.response);
  		var db = new SQL.Database(uInt8Array);
  		
  		var start = moment("2016-01-01");
       		var end = moment().tz("Asia/Kolkata").format('YYYY-MM-DD');
        	var numOfDays =  Math.abs(start.diff(end, "days")) ;
  		
  		for (var i=14 ; i <= 16; i++){
  		
  		if (i==16){
  
  		  	var stmt = db.prepare("SELECT SUM(Consumption),SUM(Production),Date FROM Data WHERE Date LIKE '%/16' group by Date limit " +  numOfDays);
  		  	
  		  	

                    while(stmt.step()) { 
		        var row = stmt.getAsObject();
		        var rowData = stmt.get();
            
                        cSum = cSum + rowData[0];
                        pSum = pSum + rowData[1];
		        
		    }
                 
			dataSetOne.push(parseFloat(cSum).toFixed(2));
			dataSetTwo.push(parseFloat(pSum).toFixed(2)); 


  		}
  		
  		else{
  			var stmt = db.prepare("SELECT SUM(Consumption),SUM(Production),Date FROM Data WHERE Date LIKE '%/"+ i +"'");
  			
  			
  			while(stmt.step()) { 
		        var row = stmt.getAsObject();
		        var rowData = stmt.get();
		        dataSetOne.push(parseFloat(rowData[0]).toFixed(2));
		        dataSetTwo.push(parseFloat(rowData[1]).toFixed(2));
		    }	
		}
  		
		    
		    
		    
 
    		}
    		
	
	for (var num = 0; num < 3; num++){
	//console.log(cSumTotal);
	cSumTotal = cSumTotal + parseInt(dataSetOne[num]);
	pSumTotal = pSumTotal + parseInt(dataSetTwo[num]);
	
	}
	
	document.getElementsByClassName("consumptionText")[0].innerHTML = cSumTotal;
	document.getElementsByClassName("solarProductionText")[0].innerHTML = pSumTotal;
	document.getElementsByClassName("sentToGridText")[0].innerHTML = Math.abs(parseInt(pSumTotal - cSumTotal));
        
        document.getElementsByClassName("consumptionText")[1].innerHTML = cSumTotal;
	document.getElementsByClassName("solarProductionText")[1].innerHTML = pSumTotal;
	document.getElementsByClassName("sentToGridText")[1].innerHTML = Math.abs(parseInt(pSumTotal - cSumTotal));
	
			       document.getElementById("greenEnergyText").innerHTML = parseInt((pSumTotal/cSumTotal)*100);

  		
		    
		xAxisArray = ["2014","2015","2016"];
	  drawGraph();	    
		    
		}

    	
	

  

xhr.send();

}
	
function increment() {
	 $(".modal").show();
	document.getElementsByClassName("decrementButton")[0].style.color = "white";
	document.getElementsByClassName("decrementButton")[0].disabled = false;
	
	document.getElementsByClassName("decrementButton")[1].style.color = "white";
	document.getElementsByClassName("decrementButton")[1].disabled = false;
		
	
	if(tag == "day"){
		var flag = 0;
		var d = moment(todaysDate, "DD/MM/YY").add(-1, 'days').format('DD/MM/YY')
		if(selectedDay == d){
			document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[0].disabled = true;
			
			document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[1].disabled = true;

			flag = 1;
		}
			
         	selectedDay = moment(selectedDay, "DD/MM/YY").add(1, 'days').format('DD/MM/YY');
		selectedMonth = moment(selectedDay, "DD/MM/YY").format('MM/YY');
		selectedYear = moment(selectedDay, "DD/MM/YY").format('YY');
         	document.getElementsByClassName("dateButton")[0].innerHTML = selectedDay;
         	document.getElementsByClassName("dateButton")[1].innerHTML = selectedDay;

        fetchDay(selectedDay, todaysHour, flag);
	}


	else if(tag == "month"){
		var flag = 0;
		var d = moment(todaysDate, "DD/MM/YY").add(-1, 'month').format('MM/YY')
		//console.log(d);
		
		if(selectedMonth == d){
			document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[0].disabled = true;

			document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[1].disabled = true;
			
			flag = 1;
		}

 		 selectedMonth = moment(selectedMonth, "MM/YY").add(1, 'month').format('MM/YY'); 
		 selectedDay = "01/" + selectedMonth;
		 selectedYear = moment(selectedMonth, "MM/YY").format('YY');
		 
		 document.getElementsByClassName("dateButton")[0].innerHTML = selectedMonth;
		 document.getElementsByClassName("dateButton")[1].innerHTML = selectedMonth;

        fetchMonth(selectedMonth, flag);
	}

	else {
		var flag = 0;
		var d = moment(todaysDate, "DD/MM/YY").add(-1, 'year').format('YY')
		////console.log(d);
		
		if(selectedYear == d){
			document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[0].disabled = true;
			
			document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[1].disabled = true;

			flag = 1;
		}

		 selectedYear = moment(selectedYear, "YY").add(1, 'year').format('YY');
 		 selectedMonth = "01/" + selectedYear; 
		 selectedDay = "01/" + selectedMonth ;
		 
		 document.getElementsByClassName("dateButton")[0].innerHTML = "20" + selectedYear;
		 document.getElementsByClassName("dateButton")[1].innerHTML = "20" + selectedYear;

        fetchYear(selectedYear, flag);
	}
}

	
function decrement() {
 $(".modal").show();
	var flag = 0;
	document.getElementsByClassName("incrementButton")[0].style.color = "white";
	document.getElementsByClassName("incrementButton")[0].disabled = false;
	
	document.getElementsByClassName("incrementButton")[1].style.color = "white";
	document.getElementsByClassName("incrementButton")[1].disabled = false;

	if(tag == "day"){
		
		if(selectedDay == "02/02/14"){
		
		document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
		document.getElementsByClassName("decrementButton")[0].disabled = true;
		
			document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
		document.getElementsByClassName("decrementButton")[1].disabled = true;
	
		}
	
	         selectedDay = moment(selectedDay, "DD/MM/YY").add(-1, 'days').format('DD/MM/YY');
	         selectedMonth = moment(selectedDay, "DD/MM/YY").format('MM/YY');
		 selectedYear = moment(selectedDay, "DD/MM/YY").format('YY');
        
		 document.getElementsByClassName("dateButton")[0].innerHTML = selectedDay;
		 document.getElementsByClassName("dateButton")[1].innerHTML = selectedDay;

        fetchDay(selectedDay, todaysHour, 0);
	 }
	 
	 else if(tag == "month"){
	 	if(selectedMonth == "02/14"){
			document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
			document.getElementsByClassName("decrementButton")[0].disabled = true;
			
			document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
			document.getElementsByClassName("decrementButton")[1].disabled = true;
		}
	 
		 selectedMonth = moment(selectedMonth, "MM/YY").add(-1, 'month').format('MM/YY'); 
		 selectedDay = "01/" + selectedMonth;
		 selectedYear = moment(selectedMonth, "MM/YY").format('YY');
		 
		 document.getElementsByClassName("dateButton")[0].innerHTML = selectedMonth;
         document.getElementsByClassName("dateButton")[1].innerHTML = selectedMonth;
		 fetchMonth(selectedMonth, 0);
	 }
	 
	 else {
	 	if(selectedYear == "15"){
			document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
			document.getElementsByClassName("decrementButton")[0].disabled = true;
			
			document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
			document.getElementsByClassName("decrementButton")[1].disabled = true;
		}
	 
		 selectedYear = moment(selectedYear, "YY").add(-1, 'year').format('YY');
 		 selectedMonth = "01/" + selectedYear; 
		 selectedDay = "01/" + selectedMonth ;
		 
		 document.getElementsByClassName("dateButton")[0].innerHTML = "20" + selectedYear;
         document.getElementsByClassName("dateButton")[1].innerHTML = "20" + selectedYear;
		 fetchYear(selectedYear, flag);
	 }

}


function dayButtonClick() {
 $(".modal").show();
document.getElementsByClassName("detailViewButton")[0].hidden = false;
document.getElementsByClassName("detailViewButton")[1].hidden = false;

		document.getElementsByClassName("incrementButton")[0].style.color = "white";
		document.getElementsByClassName("incrementButton")[0].disabled = false;
		document.getElementsByClassName("decrementButton")[0].style.color = "white";
		document.getElementsByClassName("decrementButton")[0].disabled = false;
		
		document.getElementsByClassName("incrementButton")[1].style.color = "white";
		document.getElementsByClassName("incrementButton")[1].disabled = false;
		document.getElementsByClassName("decrementButton")[1].style.color = "white";
		document.getElementsByClassName("decrementButton")[1].disabled = false;

		tag = "day";
		document.getElementsByClassName("dateButton")[0].innerHTML = selectedDay;
 		document.getElementsByClassName("dayButton")[0].style.backgroundColor = "#00b050";
	    	document.getElementsByClassName("monthButton")[0].style.backgroundColor = "#B0B0B0";
	    	document.getElementsByClassName("yearButton")[0].style.backgroundColor = "#B0B0B0";
	    	document.getElementsByClassName("lifetimeButton")[0].style.backgroundColor = "#B0B0B0";
	    	
	    	document.getElementsByClassName("dateButton")[1].innerHTML = selectedDay;
 		document.getElementsByClassName("dayButton")[1].style.backgroundColor = "#00b050";
	    	document.getElementsByClassName("monthButton")[1].style.backgroundColor = "#B0B0B0";
	    	document.getElementsByClassName("yearButton")[1].style.backgroundColor = "#B0B0B0";
	    	document.getElementsByClassName("lifetimeButton")[1].style.backgroundColor = "#B0B0B0";
	    
if (selectedYear == "14"){
   document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
		   document.getElementsByClassName("decrementButton")[0].disabled = true;

   document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
		   document.getElementsByClassName("decrementButton")[1].disabled = true;
}

	    	if (selectedDay == todaysDate){
	    		fetchDay(selectedDay, todaysHour, 1);
	    		document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[0].disabled = true;
			
			document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
			document.getElementsByClassName("incrementButton")[1].disabled = true;
	    	}
	    	else{
	        	fetchDay(selectedDay, todaysHour, 0);
	        	document.getElementsByClassName("incrementButton")[0].style.color = "white";
			document.getElementsByClassName("incrementButton")[0].disabled = false;
			
			document.getElementsByClassName("incrementButton")[1].style.color = "white";
			document.getElementsByClassName("incrementButton")[1].disabled = false;
	   	 }
	   	 
	   	 
	   }
   
    
function monthButtonClick() {
 $(".modal").show();
if (selectedYear == "14"){
   document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
		   document.getElementsByClassName("decrementButton")[0].disabled = true;

   document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
		   document.getElementsByClassName("decrementButton")[1].disabled = true;
}
		
document.getElementsByClassName("detailViewButton")[0].hidden = false;
document.getElementsByClassName("detailViewButton")[1].hidden = false;

		document.getElementsByClassName("incrementButton")[0].style.color = "white";
		document.getElementsByClassName("incrementButton")[0].disabled = false;
		document.getElementsByClassName("decrementButton")[0].style.color = "white";
		document.getElementsByClassName("decrementButton")[0].disabled = false;
		
		document.getElementsByClassName("incrementButton")[1].style.color = "white";
		document.getElementsByClassName("incrementButton")[1].disabled = false;
		document.getElementsByClassName("decrementButton")[1].style.color = "white";
		document.getElementsByClassName("decrementButton")[1].disabled = false;
		
		tag = "month";
		
		if(selectedMonth == todaysMonth){
		   fetchMonth(selectedMonth, 1);
		   document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
		   document.getElementsByClassName("incrementButton")[0].disabled = true;
		   
		   document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
		   document.getElementsByClassName("incrementButton")[1].disabled = true;
		 }
		 
		 else{
	 	   fetchMonth(selectedMonth, 0);
	
		 }
	
 	
    
		document.getElementsByClassName("dateButton")[0].innerHTML = selectedMonth;
	 	document.getElementsByClassName("monthButton")[0].style.backgroundColor = "#00b050";
	    	document.getElementsByClassName("dayButton")[0].style.backgroundColor = "#B0B0B0";
		document.getElementsByClassName("yearButton")[0].style.backgroundColor = "#B0B0B0";
		document.getElementsByClassName("lifetimeButton")[0].style.backgroundColor = "#B0B0B0";
		
		document.getElementsByClassName("dateButton")[1].innerHTML = selectedMonth;
	 	document.getElementsByClassName("monthButton")[1].style.backgroundColor = "#00b050";
	    	document.getElementsByClassName("dayButton")[1].style.backgroundColor = "#B0B0B0";
		document.getElementsByClassName("yearButton")[1].style.backgroundColor = "#B0B0B0";
		document.getElementsByClassName("lifetimeButton")[1].style.backgroundColor = "#B0B0B0";
}


function yearButtonClick() {
 $(".modal").show();
	    		document.getElementsByClassName("detailViewButton")[0].hidden = false;
	    		document.getElementsByClassName("detailViewButton")[1].hidden = false;

	    	document.getElementsByClassName("incrementButton")[0].style.color = "white";
		document.getElementsByClassName("incrementButton")[0].disabled = false;
		document.getElementsByClassName("decrementButton")[0].style.color = "white";
		document.getElementsByClassName("decrementButton")[0].disabled = false;
		
		document.getElementsByClassName("incrementButton")[1].style.color = "white";
		document.getElementsByClassName("incrementButton")[1].disabled = false;
		document.getElementsByClassName("decrementButton")[1].style.color = "white";
		document.getElementsByClassName("decrementButton")[1].disabled = false;
		
	    tag = "year";
	    if(selectedYear == todaysYear){ 
	    	var flag = 1;
	    	document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
		document.getElementsByClassName("incrementButton")[0].disabled = true;
		
		document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
		document.getElementsByClassName("incrementButton")[1].disabled = true;
	    } 
	    else{
	    	var flag = 0;
	    	document.getElementsByClassName("incrementButton")[0].style.color = "white";
		document.getElementsByClassName("incrementButton")[0].disabled = false;
		
		document.getElementsByClassName("incrementButton")[1].style.color = "white";
		document.getElementsByClassName("incrementButton")[1].disabled = false;
	    }
	    
	    if (selectedYear == "14"){
	        document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
		document.getElementsByClassName("decrementButton")[0].disabled = true;
		
		document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
		document.getElementsByClassName("decrementButton")[1].disabled = true;
	    }
	    
	    document.getElementsByClassName("dateButton")[0].innerHTML = "20" + selectedYear;
	    document.getElementsByClassName("dateButton")[1].innerHTML = "20" + selectedYear;
	    
	    fetchYear(selectedYear,flag);
	    
	    document.getElementsByClassName("yearButton")[0].style.backgroundColor = "#00b050";
    	    document.getElementsByClassName("dayButton")[0].style.backgroundColor = "#B0B0B0";
	    document.getElementsByClassName("monthButton")[0].style.backgroundColor = "#B0B0B0";
	    document.getElementsByClassName("lifetimeButton")[0].style.backgroundColor = "#B0B0B0";
	    
	    document.getElementsByClassName("yearButton")[1].style.backgroundColor = "#00b050";
    	    document.getElementsByClassName("dayButton")[1].style.backgroundColor = "#B0B0B0";
	    document.getElementsByClassName("monthButton")[1].style.backgroundColor = "#B0B0B0";
	    document.getElementsByClassName("lifetimeButton")[1].style.backgroundColor = "#B0B0B0";
}

function lifetimeButtonClick() {
 $(".modal").show();
document.getElementsByClassName("dateButton")[0].innerHTML = "LIFETIME";
         document.getElementsByClassName("dateButton")[1].innerHTML = "LIFETIME";
if (showdetailTag=="true"){
showdetailTag="false";
 document.getElementsByClassName("detailViewButton")[0].innerHTML = "DETAILED VIEW";
 document.getElementsByClassName("detailViewButton")[1].innerHTML = "DETAILED VIEW";
}

fetchLifetime();

document.getElementsByClassName("detailViewButton")[0].hidden = true;
document.getElementsByClassName("detailViewButton")[1].hidden = true;

document.getElementsByClassName("incrementButton")[0].style.color = "transparent";
document.getElementsByClassName("incrementButton")[0].disabled = true;

document.getElementsByClassName("decrementButton")[0].style.color = "transparent";
document.getElementsByClassName("decrementButton")[0].disabled = true;


 document.getElementsByClassName("lifetimeButton")[1].style.backgroundColor = "#00b050";
    document.getElementsByClassName("dayButton")[1].style.backgroundColor = "#B0B0B0";
    document.getElementsByClassName("yearButton")[1].style.backgroundColor = "#B0B0B0";
    document.getElementsByClassName("monthButton")[1].style.backgroundColor = "#B0B0B0";
    
    document.getElementsByClassName("incrementButton")[1].style.color = "transparent";
document.getElementsByClassName("incrementButton")[1].disabled = true;

document.getElementsByClassName("decrementButton")[1].style.color = "transparent";
document.getElementsByClassName("decrementButton")[1].disabled = true;


 document.getElementsByClassName("lifetimeButton")[0].style.backgroundColor = "#00b050";
    document.getElementsByClassName("dayButton")[0].style.backgroundColor = "#B0B0B0";
    document.getElementsByClassName("yearButton")[0].style.backgroundColor = "#B0B0B0";
    document.getElementsByClassName("monthButton")[0].style.backgroundColor = "#B0B0B0";

}

function detailedViewButtonClick(){
// xAxisArray = []; dataSetOne = []; dataSetTwo = [];
if (tag == "month"){}
else if (tag == "year"){}

	if (showdetailTag == "true"){
	 drawBarGraph();
	 showdetailTag = "false";
	 document.getElementsByClassName("detailViewButton")[0].innerHTML = "DETAILED VIEW";
	 document.getElementsByClassName("detailViewButton")[1].innerHTML = "DETAILED VIEW";
	}
	
	
	else{
	 drawLineGraph();
	 showdetailTag = "true";
	 document.getElementsByClassName("detailViewButton")[0].innerHTML = "SUMMARY";
	 document.getElementsByClassName("detailViewButton")[1].innerHTML = "SUMMARY";

	}
	

}

function drawLineGraph(){

if(myBarChart!=null){
        myBarChart.destroy();
    }

 	var lineChartData = {
		labels : detailedxAxisArray,
		datasets : [
			{
				fillColor : "#a6a6a6",
				strokeColor : "transparent",
				highlightFill: "transparent",
				highlightStroke: "transparent",
				data : detailedDataSetOne
			},
			{
				fillColor : "rgba(255,191,63,0.7)",
				strokeColor : "transparent",
				highlightFill : "transparent",
				highlightStroke : "transparent",
				data : detailedDataSetTwo
			}
		]

	}
	
	if(smallScreen){

var ctx1 = document.getElementsByClassName("graphArea")[1].getContext("2d");
		window.myBar = new Chart(ctx1).Line(lineChartData, {
			responsive : true,scaleShowGridLines: false,showTooltips: false,showScale: true,scaleLineColor: "transparent",pointDot : false, showXLabels: 5,scaleLabel : "<%= value + ' kW '%>",bezierCurve : true});
			}
			else{
			
			
	var ctx = document.getElementsByClassName("graphArea")[0].getContext("2d");
		window.myBar = new Chart(ctx).Line(lineChartData, {
			responsive : true,scaleShowGridLines: false,showTooltips: false,showScale: true,scaleLineColor: "transparent",pointDot : false, showXLabels: 5,scaleLabel : "<%= value + ' kW '%>",bezierCurve : true});
			}

}

function drawBarGraph(){

if(myBarChart!=null){
        myBarChart.destroy();
    }


	var barChartData = {
		labels : xAxisArray,
		datasets : [
			{
				fillColor : "#a6a6a6",
				strokeColor : "transparent",
				highlightFill: "#a6a6a6",
				highlightStroke: "transparent",
				data : dataSetOne
			},
			{
				fillColor : "#ffbf3f",
				strokeColor : "transparent",
				highlightFill : "#ffbf3f",
				highlightStroke : "transparent",
				data : dataSetTwo
			}
		]

	}
	
	
if(smallScreen){
              var ctx1 = document.getElementsByClassName("graphArea")[1].getContext("2d");
		window.myBar = new Chart(ctx1).Bar(barChartData, {
			responsive : true,scaleShowGridLines: false,showTooltips: false,showScale: true,scaleLineColor: "transparent",scaleLabel : "<%= value + ' kWh '%>"
		});
		}

		else{

		var ctx = document.getElementsByClassName("graphArea")[0].getContext("2d");
		//window.myBar 
window.myBarChart = new Chart(ctx).Bar(barChartData, { responsive : true,scaleShowGridLines: false,showScale: true,scaleLineColor: "transparent",scaleLabel : "<%= value + ' kWh '%>",showTooltips: true});
		}
		
}
function drawGraph(){

$(".modal").hide();
document.getElementById("bottomButtons").hidden = false;

updateLabels();

console.log(showdetailTag);
if (showdetailTag == "true"){
drawLineGraph();
}
else{
drawBarGraph();
}

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var innerGreenText = $(greenEnergyText).html();
if(parseInt(innerGreenText) <= 100)
{
var greenEnergyLeft = 100 - innerGreenText;
var gridColor = "#538fd0" ;
var gridChangedText = "TAKEN FROM <br>GRID";
var gridChangedTextMobile = "TAKEN FROM GRID";
}
else{
innerGreenText = 100;
var greenEnergyLeft = 0;
var gridColor = "#8cd063";
var gridChangedText = "EXTRA SENT TO <br>GRID";
var gridChangedTextMobile = "EXTRA SENT TO GRID";

}

document.getElementsByClassName("gridText")[0].style.color = gridColor;
document.getElementsByClassName("gridText")[0].innerHTML  = gridChangedText;
document.getElementsByClassName("sentToGridText")[0].style.color = gridColor;


document.getElementsByClassName("gridText")[1].style.color = gridColor;
document.getElementsByClassName("gridText")[1].innerHTML  = gridChangedTextMobile;
document.getElementsByClassName("sentToGridText")[1].style.color = gridColor;

	var consumptionDoughnutData = [
    {
        value: 100,
        color:"#a6a6a6",
        highlight: "transparent",
        label: ""
    },
    {
        value: 0,
        color: "transparent",
        highlight: "transparent",
        label: ""
    }
]
	var solarProductionDoughnutData = [
    {
        value: 100,
        color:"#ffbf3f",
        highlight: "transparent",
        label: ""
    },
    {
        value: 0,
        color: "transparent",
        highlight: "transparent",
        label: ""
    }
]
	var sentToGridDoughnutData = [
    {
        value: 100,
        color: gridColor,
        highlight: "transparent",
        label: ""
    },
    {
        value: 0,
        color: "transparent",
        highlight: "transparent",
        label: ""
    }
]



	var greenEnergyDoughnutData = [
    {
        value: innerGreenText,
        color:"#009e3c",
        highlight: "transparent",
        label: ""
    },
    {
        value: greenEnergyLeft,
        color: "transparent",
        highlight: "transparent",
        label: ""
    }
]

	
	
		
		
	
	if(smallScreen){
	var consumption = document.getElementsByClassName("consumptionDoughnut")[1].getContext("2d");
		var consumptionDoughnut = new Chart(consumption).Doughnut(consumptionDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 70
		});
		
		var solarProduction = document.getElementsByClassName("solarProductionDoughnut")[1].getContext("2d");
		var solarProductionDoughnut = new Chart(solarProduction).Doughnut(solarProductionDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 70
		});
		
		var sentGrid = document.getElementsByClassName("extraGridDoughnut")[1].getContext("2d");
		var sentGridDoughnut = new Chart(sentGrid).Doughnut(sentToGridDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 70
		});
	}
	
	else{
	var consumption = document.getElementsByClassName("consumptionDoughnut")[0].getContext("2d");
		var consumptionDoughnut = new Chart(consumption).Doughnut(consumptionDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 70
		});
		
		var solarProduction = document.getElementsByClassName("solarProductionDoughnut")[0].getContext("2d");
		var solarProductionDoughnut = new Chart(solarProduction).Doughnut(solarProductionDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 70
		});
		
		var sentGrid = document.getElementsByClassName("extraGridDoughnut")[0].getContext("2d");
		var sentGridDoughnut = new Chart(sentGrid).Doughnut(sentToGridDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 70
		});
		
		var greenEnergy = document.getElementById("greenEnergyDoughnut").getContext("2d");
		var greenEnergyDoughnut = new Chart(greenEnergy).Doughnut(greenEnergyDoughnutData,{
		animationEasing : "easeOut",segmentShowStroke : false,showTooltips: false,percentageInnerCutout : 60
		});
	
	}
	
	}


function updateLabels(){
var value = document.getElementsByClassName("solarProductionText")[0].innerHTML;
document.getElementsByClassName("carbonText")[0].innerHTML =  parseInt(value * 0.7);
document.getElementsByClassName("distanceText")[0].innerHTML =  parseInt(value * 2.5);
document.getElementsByClassName("billSavingIndia")[0].innerHTML =  parseInt(value * 8.0);

var value = document.getElementsByClassName("solarProductionText")[1].innerHTML;
document.getElementsByClassName("carbonText")[1].innerHTML =  parseInt(value * 0.7);
document.getElementsByClassName("billSavingIndia")[1].innerHTML =  parseInt(value * 8.0);

}





	