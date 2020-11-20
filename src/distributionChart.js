let group2SVG = d3.select("#group2SVG")
let label2SVG = d3.select("#label2SVG")
let income2SVG = d3.select("#income2SVG")
let payment2SVG = d3.select("#payment2SVG")
let BRRLabel2SVG = d3.select("#BRRLabel2SVG")
let break2SVG = d3.select("#break2SVG")
let quartileFamSVG = d3.select("#quartileFamSVG")
let quartileIndSVG = d3.select("#quartileIndSVG")
let giniFamSVG = d3.select("#giniFamSVG")
let giniIndSVG = d3.select("#giniIndSVG")

d3.csv("data/final_data.csv" , function(d , i, columns) {
	return{
		id : +d.id,
		group : d["Basic Income Type"],
		benefits : +d["Benefit Level"],
		income : d["Income Test"],
		payment : d["Payment Unit"],
		brr : +d.BRR,
		breakeven: +d["Break-Even Point"],
		quartileFam1 : +d["Quartile 1 Families"],
		quartileFam2 : +d["Quartile 2 Families"], 
		quartileFam3 : +d["Quartile 3 Families"], 
		quartileFam4 : +d["Quartile 4 Families"], 
		quartileInd1 : +d["Quartile 1 Individuals"],
		quartileInd2 : +d["Quartile 2 Individuals"], 
		quartileInd3 : +d["Quartile 3 Individuals"], 
		quartileInd4 : +d["Quartile 4 Individuals"],
		giniFam : +d["% change Gini Family Income"],
		giniInd : +d["% change Gini Individual Income"]

	}
}
)
    .then(dataloaded2)

function dataloaded2(data) {

	let dataAll = data.sort((a, b) => {
		return d3.ascending(a.id , b.id)
	})

	showData2(dataAll)

	
	//Button for BI type
	let types2 = ["All" , "RTC", "UBI"]
	
	let dropDown5 = d3.select("#button5")
		
	dropDown5.selectAll("option")
		.data(types2)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })

	
	//Button for Benefit Amount
	let amount2 = [ "1000", "5000", "10000", "20000"]

	let dropDown6 = d3.select("#button6")

	dropDown6.selectAll("option")
		.data(amount2)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })


		
	//Button for Income Test Level
	let income2 = [ "All" , "Family" , "Individual"]

	let dropDown7 = d3.select("#button7")

	dropDown7.selectAll("option")
		.data(income2)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })


			
	//Button for Payment Unit Level
	let payment2 = [ "All" , "SQRT(2)" , "Per Capita"]

	let dropDown8 = d3.select("#button8")

	dropDown8.selectAll("option")
		.data(payment2)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })




	//Create functions for updates - if type button pressed first
	dropDown5.on("change", function(){
		var values = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values.push(this.value)})
		
			console.log(values)

		if(values.length>0 && values != "All"){
			dataFilteredType = dataAll.filter(function(d){return d.group==values})
		} else{dataFilteredType = dataAll}

		dataFiltered = dataFilteredType


		dropDown6.on("change", function(){
		var values2 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values2.push(this.value)})
		
			console.log(values2)

		if(values2.length>0 ){
			dataFilteredAmount = dataFilteredType.filter(function(d){return d.benefits==parseInt(values2[0]) || d.benefits==parseInt(values2[1]) || d.benefits==parseInt(values2[2]) || d.benefits==parseInt(values2[3]) })
		} else{dataFilteredAmount = dataFilteredType}

		console.log(dataFilteredAmount)	

		dataFiltered = dataFilteredAmount


		dropDown7.on("change", function(){
		var values3 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values3.push(this.value)})
		
			console.log(values3)

		if(values3.length>0 && values3 != "All" ){
			dataFilteredIncome = dataFilteredAmount.filter(function(d){return d.income == values3 || d.income == "N/A" })
		} else{dataFilteredIncome = dataFilteredAmount}

		dataFiltered = dataFilteredIncome

	


	dropDown8.on("change", function(){
		var values4 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values4.push(this.value)})
		
			console.log(values4)

		if(values4.length>0 && values4 != "All" ){
			dataFilteredPayment = dataFilteredIncome.filter(function(d){return d.payment == values4 })
		} else{dataFilteredPayment = dataFilteredIncome}

		dataFiltered = dataFilteredPayment

		showData(dataFiltered)

	})

			showData2(dataFiltered)


		})
	

			showData2(dataFiltered)

		})


		showData2(dataFiltered)

		})




//If Benefit amount button is pressed first
	dropDown6.on("change", function(){
			var values2 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values2.push(this.value)})
		
			console.log(values2)

		if(values2.length>0 ){
			dataFilteredAmount = dataAll.filter(function(d){return d.benefits==parseInt(values2[0]) || d.benefits==parseInt(values2[1]) || d.benefits==parseInt(values2[2]) || d.benefits==parseInt(values2[3]) })
		} else{dataFilteredAmount = dataAll}

		console.log(dataFilteredAmount)	

		dataFiltered = dataFilteredAmount


	dropDown7.on("change", function(){
		var values3 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values3.push(this.value)})
		
			console.log(values3)

		if(values3.length>0 && values3 != "All" ){
			dataFilteredIncome = dataFilteredAmount.filter(function(d){return d.income == values3 || d.income == "N/A" })
		} else{dataFilteredIncome = dataFilteredAmount}

		console.log(dataFilteredAmount)	

		dataFiltered = dataFilteredIncome
		

	dropDown8.on("change", function(){
		var values4 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values4.push(this.value)})
		
			console.log(values4)

		if(values4.length>0 && values4 != "All" ){
			dataFilteredPayment = dataFilteredIncome.filter(function(d){return d.payment == values4 })
		} else{dataFilteredPayment = dataFilteredIncome}

		dataFiltered = dataFilteredPayment

		showData2(dataFiltered)

		})
		showData2(dataFiltered)

		})

			showData2(dataFiltered)
	})



//If Income button pressed first
		dropDown7.on("change", function(){
			var values = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values.push(this.value)})
		
			console.log(values)

		if(values.length>0 && values != "All" ){
			dataFilteredIncome = dataAll.filter(function(d){return d.income == values || d.income == "N/A" })
		} else{dataFilteredIncome = dataAll}

		dataFiltered = dataFilteredIncome

	dropDown8.on("change", function(){
		var values4 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values4.push(this.value)})
		
			console.log(values4)

		if(values4.length>0 && values4 != "All" ){
			dataFilteredPayment = dataFilteredIncome.filter(function(d){return d.payment == values4 })
		} else{dataFilteredPayment = dataFilteredIncome}

		dataFiltered = dataFilteredPayment

		showData2(dataFiltered)

		})
	

		showData2(dataFiltered)
	
		})


//If pyament button pressed first
		dropDown8.on("change", function(){
		var values4 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values4.push(this.value)})
		
			console.log(values4)

		if(values4.length>0 && values4 != "All" ){
			dataFilteredPayment = dataAll.filter(function(d){return d.payment == values4 })
		} else{dataFilteredPayment = dataAll}

		dataFiltered = dataFilteredPayment

		showData2(dataFiltered)

		})
		}





//Show Data function
function showData2(data){

	let idUpdate2 = []

	for (let i = 0; i <= data.length; i++){
		idUpdate2[i] = i 

	}

	data.forEach(function(d, i){
		d.id = idUpdate2[i]
	})

	//Set up bandwidth/position scale. Set different total height dependent on # of observations
	let rangeScale = d3.scaleLinear()
		.domain([1, 74])
		.range([150, 2000])

	let idMap = data.length	
	console.log(idMap)

	let rangeMax = rangeScale(idMap)
	console.log(rangeMax)

	let positionScale = d3.scaleBand()
		.range([0, rangeMax])
		.domain(data.map(d => d.id))
		.padding(0.3)

	

	
	//First label: BI type/group
	
	let joinGroup2 = group2SVG.selectAll("text")
		.data(data)

	joinGroup2.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.group)

	joinGroup2.exit().remove()

	joinGroup2.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.group)

	d3.select("#xAxisGroup2")
		.append("text")
		.style("text-anchor", "middle")
		.attr("transform", "translate(29, 0)")
		.text("BI Type")
		.attr("font-weight" , "bold")

	//Second label: annual payment	
	let joinLabel2 = label2SVG.selectAll("text")
		.data(data)

	joinLabel2.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => "$" + d.benefits.toLocaleString())

	joinLabel2.exit().remove()

	joinLabel2.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => "$" + d.benefits.toLocaleString())


	d3.select("#label2Header")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Basic")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Guarantee")
		.attr("font-weight" , "bold")
		

	//Third label: Income Test
	let joinIncome2 = income2SVG.selectAll("text")
		.data(data)

	joinIncome2.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.income)

	joinIncome2.exit().remove()

	joinIncome2.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.income)


	d3.select("#income2Header")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Income")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Unit")
		.attr("font-weight" , "bold")

	//Fourth label: Payment Unit
	let joinPayment2 = payment2SVG.selectAll("text")
		.data(data)

	joinPayment2.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.payment)

	joinPayment2.exit().remove()

	joinPayment2.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.payment)


	d3.select("#payment2Header")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Equivalence")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Scale")
		.attr("font-weight" , "bold")

	
	//Fifth Label: Benefit reduction rate
	let joinBRRLabel2 = BRRLabel2SVG.selectAll("text")
		.data(data)

	joinBRRLabel2.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(function(d) {if(d.group==="RTC"){return d.brr + "%"
			} else if (d.group==="UBI"){return "NA"}})
		.style("text-anchor", "middle")

	joinBRRLabel2.exit().remove()

	
	joinBRRLabel2.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(function(d) {if(d.group==="RTC"){return d.brr + "%"
			} else if (d.group==="UBI"){return "0%"}})
		.style("text-anchor", "middle")

	d3.select("#BRR2Header")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Benefit")
		.attr("font-weight" , "bold")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Reduction")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Rate")
		.attr("font-weight" , "bold")

//Break even point Bar Graph
	let maxBreak2 = d3.max(data, d => d.breakeven)	

	let widthScaleBreak2 = d3.scaleLinear()
		.domain([0, maxBreak2])
		.range([0, 100])

	let joinBreak2 = break2SVG.selectAll("rect")
		.data(data)

	joinBreak2.enter()
		.append("rect")
		.attr("width", d => widthScaleBreak2(d.breakeven) + "px")
		.attr("fill" , "#1c5253")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinBreak2.exit().remove()

	joinBreak2.transition()
		.attr("width", d => widthScaleBreak2(d.breakeven) + "px")
		.attr("fill" , "#1c5253")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	let joinBreak2Text = break2SVG.selectAll("text")
		.data(data)

	joinBreak2Text.enter()
		.append("text")
		.text(function(d) {if(d.group==="RTC"){return "$" + d.breakeven.toLocaleString()
			} else if (d.group==="Universal"){return "No Limit"}})
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleBreak2(d.breakeven) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#1c5253")


	joinBreak2Text.exit().remove()

	joinBreak2Text.transition()
		.text(function(d) {if(d.group==="RTC"){return "$" + d.breakeven.toLocaleString()
			} else if (d.group==="Universal"){return "No Limit"}})
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleBreak2(d.breakeven) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#1c5253")
	
	let xAxisBreak2 = d3.axisTop(widthScaleBreak2)
		.tickFormat(d => d)
		.tickArguments([2])
		.tickSize(2)
	
	
	d3.select("#xAxisBreak2")
		.call(xAxisBreak2)
		.attr("stroke", "#1c5253")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisBreak2Text")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("dx", 50)
		.attr("dy", -10)
		.attr("fill" , "#1c5253")
		.text("Break-Even")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("x", 50)
		.attr("dy", 20)
		.attr("fill" , "#1c5253")
		.text("Income (Singles)")

//Gini Bar Graph - Family Income
	
	let maxGiniFam = d3.min(data, d => d.giniFam)	

	let widthScaleGiniFam = d3.scaleLinear()
		.domain([maxGiniFam, 0])
		.range([0, 100])


	let joinGiniFam = giniFamSVG.selectAll("rect")
		.data(data)

	joinGiniFam.enter()
		.append("rect")
		.attr("width", d => 100 - widthScaleGiniFam(d.giniFam) + "px")
		.attr("fill" , "#ED553B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.attr("x", d => widthScaleGiniFam(d.giniFam))

	joinGiniFam.exit().remove()

	joinGiniFam.transition()
		.attr("width", d =>100 -  widthScaleGiniFam(d.giniFam) + "px")
		.attr("fill" , "#ED553B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.attr("x", d => widthScaleGiniFam(d.giniFam))

	let joinGiniFamText = giniFamSVG.selectAll("text")
		.data(data)

	joinGiniFamText.enter()
		.append("text")
		.text(d => d.giniFam.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x" , 102)
		.attr("font-size", "12px")
		.attr("fill","#ED553B")

	joinGiniFamText.exit().remove()

	joinGiniFamText.transition()
		.text(d =>  d.giniFam.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", 102)
		.attr("font-size", "12px")
		.attr("fill","#ED553B")
	
	let xAxisGiniFam = d3.axisTop(widthScaleGiniFam)
		.tickFormat(d => d)
		.tickArguments([3])
		.tickSize(5)
	
	d3.select("#xAxisGiniFam")
		.call(xAxisGiniFam)
		.attr("stroke", "#ED553B")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisGiniFamText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "#ED553B")
		.attr("transform", "translate(50, -10)")
		.text("% Change: Gini")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.attr("fill", "#ED553B")
		.text("Coefficient (Family Inc.)")

//Gini Bar Graph - Individual Income
	
	let maxGiniInd = d3.min(data, d => d.giniInd)	

	let widthScaleGiniInd = d3.scaleLinear()
		.domain([maxGiniInd, 0])
		.range([0, 100])


	let joinGiniInd = giniIndSVG.selectAll("rect")
		.data(data)

	joinGiniInd.enter()
		.append("rect")
		.attr("width", d => 100 - widthScaleGiniInd(d.giniInd) + "px")
		.attr("fill" , "#12c988")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.attr("x", d => widthScaleGiniInd(d.giniInd))

	joinGiniInd.exit().remove()

	joinGiniInd.transition()
		.attr("width", d =>100 -  widthScaleGiniInd(d.giniInd) + "px")
		.attr("fill" , "#12c988")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.attr("x", d => widthScaleGiniInd(d.giniInd))

	let joinGiniIndText = giniIndSVG.selectAll("text")
		.data(data)

	joinGiniIndText.enter()
		.append("text")
		.text(d => d.giniInd.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x" , 102)
		.attr("font-size", "12px")
		.attr("fill","#12c988")

	joinGiniIndText.exit().remove()

	joinGiniIndText.transition()
		.text(d =>  d.giniInd.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", 102)
		.attr("font-size", "12px")
		.attr("fill","#12c988")
	
	let xAxisGiniInd = d3.axisTop(widthScaleGiniInd)
		.tickFormat(d => d)
		.tickArguments([3])
		.tickSize(5)
	
	d3.select("#xAxisGiniInd")
		.call(xAxisGiniInd)
		.attr("stroke", "#12c988")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisGiniIndText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "#12c988")
		.attr("transform", "translate(50, -10)")
		.text("% Change: Gini")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.attr("fill", "#12c988")
		.text("Coefficient (Individual Inc.)")
	
	

//Family Quartiles - graph

	let subgroups = Object.keys(data[0]).slice(7,11)

	console.log(subgroups)

	let stack = d3.stack()
		.keys(subgroups)
		(data)

	let widthScaleQuartileFam = d3.scaleLinear()
		.domain([0, 100])
		.range([0, 100])

	 let color = d3.scaleOrdinal()
    		.range(["#7b6888", "#6b486b", "#a05d56", "#d0743c"])

	let joinQuartileFam = quartileFamSVG		
		.selectAll("g")
		.data(stack, d => d.key)

	joinQuartileFam.exit().remove()


	let joinQuartileFam2 = joinQuartileFam.enter()
		.append("g")
		.attr("fill", function(d) { return color(d.key) })

	
		
	let bars =  quartileFamSVG		
		.selectAll("g").selectAll(".bar")
		.data(d => d, e => e.data.id)


	bars.enter()
		.append("rect")
		.attr("class" , "bar")
		.attr ("y", d => positionScale(d.data.id))
		.attr("height" , positionScale.bandwidth)
		.attr("x", d => widthScaleQuartileFam(d[0]))
		.attr("width" , function(d) { return  widthScaleQuartileFam(d[1]) -  widthScaleQuartileFam(d[0]) })

	
	bars.exit().remove()

	joinQuartileFam.transition()
		.attr("fill", function(d) { return color(d.key) })
	
	bars.transition()
		.attr ("y", d => positionScale(d.data.id))
		.attr("height" , positionScale.bandwidth)
		.attr("x", d => widthScaleQuartileFam(d[0]))
		.attr("width" , function(d) { return  widthScaleQuartileFam(d[1]) -  widthScaleQuartileFam(d[0]) })


	

	d3.select("#xAxisQuartileFamText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "black")
		.attr("transform", "translate(30, -5)")
		.text("Distribution Across ")
		.append("tspan")
		.attr("dx", -110)
		.attr("dy", 20)
		.text("Family Income")
		.append("tspan")
		.attr("dx", -80)
		.attr("dy", 20)
		.text("Quartiles")


//Individual Quartiles - graph

	let subgroups2 = Object.keys(data[0]).slice(11,15)

	console.log(subgroups2)

	let stack2 = d3.stack()
		.keys(subgroups2)
		(data)

	let widthScaleQuartileInd = d3.scaleLinear()
		.domain([0, 100])
		.range([0, 100])

	let joinQuartileInd = quartileIndSVG		
		.selectAll("g")
		.data(stack2, d => d.key)

	joinQuartileInd.exit().remove()

	let joinQuartileInd2 = joinQuartileInd.enter()
		.append("g")
		.attr("fill", function(d) { return color(d.key) })

	
		
	let bars2 =  quartileIndSVG		
		.selectAll("g").selectAll(".bar")
		.data(d => d, e => e.data.id)


	bars2.enter()
		.append("rect")
		.attr("class" , "bar")
		.attr ("y", d => positionScale(d.data.id))
		.attr("height" , positionScale.bandwidth)
		.attr("x", d => widthScaleQuartileInd(d[0]))
		.attr("width" , function(d) { return  widthScaleQuartileInd(d[1]) -  widthScaleQuartileInd(d[0]) })

	
	bars2.exit().remove()

	joinQuartileInd.transition()
		.attr("fill", function(d) { return color(d.key) })
	
	bars2.transition()
		.attr ("y", d => positionScale(d.data.id))
		.attr("height" , positionScale.bandwidth)
		.attr("x", d => widthScaleQuartileInd(d[0]))
		.attr("width" , function(d) { return  widthScaleQuartileInd(d[1]) -  widthScaleQuartileInd(d[0]) })


	

	d3.select("#xAxisQuartileIndText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "black")
		.attr("transform", "translate(30, -5)")
		.text("Distribution Across ")
		.append("tspan")
		.attr("dx", -125)
		.attr("dy", 20)
		.text("Individual Income")
		.append("tspan")
		.attr("dx", -90)
		.attr("dy", 20)
		.text("Quartiles")


	


	
}






