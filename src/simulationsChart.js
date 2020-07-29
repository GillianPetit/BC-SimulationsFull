let groupSVG = d3.select("#groupSVG")
let labelSVG = d3.select("#labelSVG")
let incomeSVG = d3.select("#incomeSVG")
let paymentSVG = d3.select("#paymentSVG")
let BRRLabelSVG = d3.select("#BRRLabelSVG")
let breakSVG = d3.select("#breakSVG")
let recipSVG = d3.select("#recipSVG")
let costSVG = d3.select("#costSVG")
let povertyRateSVG = d3.select("#povertyRateSVG")
let povertyEfficiencySVG = d3.select("#povertyEfficiencySVG")
let povertyDepthSVG = d3.select("#povertyDepthSVG")

d3.csv("data/robin_modified.csv" , function(d , i, columns) {
	return{
		id : +d.id,
		group : d["Basic Income Type"],
		benefits : +d["Benefit Level"],
		income : d["Income Test"],
		payment : d["Payment Unit"],
		brr : +d.BRR,
		breakeven: +d["Break-Even Point"],
		recipients : +d["All Recipients"],
		cost : +d["Gross Cost(M)"],
		povertyRate : +d["% change in PR"], 
		povertyEfficiency : +d["Poverty Reduction Efficiency (B)"],
		povertyDepth : +d["% Change in PD"], 


	}
}
)
    .then(dataloaded)

function dataloaded(data) {

	let dataAll = data.sort((a, b) => {
		return d3.ascending(a.id , b.id)
	})

	showData(dataAll)

	
	//Button for BI type
	let types = ["All" , "RTC", "Universal"]
	
	let dropDown = d3.select("#button1")
		
	dropDown.selectAll("option")
		.data(types)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })

	
	//Button for Benefit Amount
	let amount = [ "1000", "5000", "10000", "20000"]

	let dropDown2 = d3.select("#button2")

	dropDown2.selectAll("option")
		.data(amount)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })


		
	//Button for Income Test Level
	let income = [ "All" , "Family" , "Individual"]

	let dropDown3 = d3.select("#button3")

	dropDown3.selectAll("option")
		.data(income)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })


			
	//Button for Payment Unit Level
	let payment = [ "All" , "Family" , "Individual"]

	let dropDown4 = d3.select("#button4")

	dropDown4.selectAll("option")
		.data(payment)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })




	//Create functions for updates - if type button pressed first
	dropDown.on("change", function(){
		var values = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values.push(this.value)})
		
			console.log(values)

		if(values.length>0 && values != "All"){
			dataFilteredType = dataAll.filter(function(d){return d.group==values})
		} else{dataFilteredType = dataAll}

		dataFiltered = dataFilteredType

		dropDown2.on("change", function(){
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


		dropDown3.on("change", function(){
		var values3 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values3.push(this.value)})
		
			console.log(values3)

		if(values3.length>0 && values3 != "All" ){
			dataFilteredIncome = dataFilteredAmount.filter(function(d){return d.income == values3 || d.income == "N/A" })
		} else{dataFilteredIncome = dataFilteredAmount}

		dataFiltered = dataFilteredIncome

	


	dropDown4.on("change", function(){
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

			showData(dataFiltered)


		})
	

			showData(dataFiltered)

		})


		showData(dataFiltered)

		})




//If Benefit amount button is pressed first
	dropDown2.on("change", function(){
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


	dropDown3.on("change", function(){
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
		

	dropDown4.on("change", function(){
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
		showData(dataFiltered)

		})

			showData(dataFiltered)
	})



//If Income button pressed first
		dropDown3.on("change", function(){
			var values = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values.push(this.value)})
		
			console.log(values)

		if(values.length>0 && values != "All" ){
			dataFilteredIncome = dataAll.filter(function(d){return d.income == values || d.income == "N/A" })
		} else{dataFilteredIncome = dataAll}

		dataFiltered = dataFilteredIncome

	dropDown4.on("change", function(){
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
	

		showData(dataFiltered)
	
		})


//If pyament button pressed first
		dropDown4.on("change", function(){
		var values4 = [];
	
		d3.select(this)
			.selectAll("option:checked")
			.each(function(){values4.push(this.value)})
		
			console.log(values4)

		if(values4.length>0 && values4 != "All" ){
			dataFilteredPayment = dataAll.filter(function(d){return d.payment == values4 })
		} else{dataFilteredPayment = dataAll}

		dataFiltered = dataFilteredPayment

		showData(dataFiltered)

		})

	

	

		}


function showData(data){

	let idUpdate = []

	for (let i = 0; i <= data.length; i++){
		idUpdate[i] = i 

	}



	data.forEach(function(d, i){
		d.id = idUpdate[i]
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

	let joinGroup = groupSVG.selectAll("text")
		.data(data)


	//First label: BI type/group

	joinGroup.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.group)

	joinGroup.exit().remove()

	joinGroup.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.group)

	d3.select("#xAxisGroup")
		.append("text")
		.style("text-anchor", "middle")
		.attr("transform", "translate(29, 0)")
		.text("BI Type")
		.attr("font-weight" , "bold")

	//Second label: annnual payment	
	let joinLabel = labelSVG.selectAll("text")
		.data(data)

	joinLabel.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => "$" + d.benefits.toLocaleString())

	joinLabel.exit().remove()

	joinLabel.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => "$" + d.benefits.toLocaleString())


	d3.select("#labelHeader")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Annual Payment")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Per person")
		.attr("font-weight" , "bold")

	//Third label: Income Test
	let joinIncome = incomeSVG.selectAll("text")
		.data(data)

	joinIncome.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.income)

	joinIncome.exit().remove()

	joinIncome.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.income)


	d3.select("#incomeHeader")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Income Test")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Level")
		.attr("font-weight" , "bold")

	//Fourth label: Payment Unit
	let joinPayment = paymentSVG.selectAll("text")
		.data(data)

	joinPayment.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.payment)

	joinPayment.exit().remove()

	joinPayment.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.style("text-anchor", "middle")
		.text(d => d.payment)


	d3.select("#paymentHeader")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Payment Unit")
		.attr("font-weight" , "bold")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Level")
		.attr("font-weight" , "bold")

	
	//Fifth Label: Benefit reduction rate
	let joinBRRLabel = BRRLabelSVG.selectAll("text")
		.data(data)

	joinBRRLabel.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(function(d) {if(d.group==="RTC"){return d.brr + "%"
			} else if (d.group==="Universal"){return "NA"}})
		.style("text-anchor", "middle")

	joinBRRLabel.exit().remove()

	
	joinBRRLabel.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(function(d) {if(d.group==="RTC"){return d.brr + "%"
			} else if (d.group==="Universal"){return "NA"}})
		.style("text-anchor", "middle")

	d3.select("#BRRHeader")
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
	let maxBreak = d3.max(data, d => d.breakeven)	

	let widthScaleBreak = d3.scaleLinear()
		.domain([0, maxBreak])
		.range([0, 100])

	let joinBreak = breakSVG.selectAll("rect")
		.data(data)

	joinBreak.enter()
		.append("rect")
		.attr("width", d => widthScaleBreak(d.breakeven) + "px")
		.attr("fill" , "#1c5253")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinBreak.exit().remove()

	joinBreak.transition()
		.attr("width", d => widthScaleBreak(d.breakeven) + "px")
		.attr("fill" , "#1c5253")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	let joinBreakText = breakSVG.selectAll("text")
		.data(data)

	joinBreakText.enter()
		.append("text")
		.text(function(d) {if(d.group==="RTC"){return "$" + d.breakeven.toLocaleString()
			} else if (d.group==="Universal"){return "No Limit"}})
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleBreak(d.breakeven) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#1c5253")


	joinBreakText.exit().remove()

	joinBreakText.transition()
		.text(function(d) {if(d.group==="RTC"){return "$" + d.breakeven.toLocaleString()
			} else if (d.group==="Universal"){return "No Limit"}})
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleBreak(d.breakeven) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#1c5253")
	
	let xAxisBreak = d3.axisTop(widthScaleBreak)
		.tickFormat(d => d)
		.tickArguments([2])
		.tickSize(2)
	
	
	d3.select("#xAxisBreak")
		.call(xAxisBreak)
		.attr("stroke", "#1c5253")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisBreakText")
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
		.text("Income")


	//Recipients Bar Graph
	
	let maxRecip = d3.max(data, d => d.recipients)
	

	let widthScaleRecip = d3.scaleLinear()
		.domain([0, maxRecip])
		.range([0, 100])


	let joinRecip = recipSVG.selectAll("rect")
		.data(data)

	joinRecip.enter()
		.append("rect")
		.attr("width", d => widthScaleRecip(d.recipients) + "px")
		.attr("fill" , "#B19CD9")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinRecip.exit().remove()

	joinRecip.transition()
		.attr("width", d => widthScaleRecip(d.recipients) + "px")
		.attr("fill" , "#B19CD9")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	let joinRecipText = recipSVG.selectAll("text")
		.data(data)

	joinRecipText.enter()
		.append("text")
		.text(d =>  d.recipients.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleRecip(d.recipients) + 2)
		.attr("font-size", "12px")
		.attr("fill","#B19CD9")

	joinRecipText.exit().remove()

	joinRecipText.transition()
		.text(d =>  d.recipients.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleRecip(d.recipients) + 2)
		.attr("font-size", "12px")
		.attr("fill","#B19CD9")


	
	let xAxisRecip = d3.axisTop(widthScaleRecip)
		.tickFormat(d => d)
		.tickArguments([2])
		.tickSize(2)
	
	
	d3.select("#xAxisRecip")
		.call(xAxisRecip)
		.attr("stroke", "#B19CD9")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisRecipText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "#B19CD9")
		.attr("transform", "translate(60, 0)")
		.text("Recipients")

		
	//Cost bar graph
	let maxCost = d3.max(data, d => d.cost)
	

	let widthScaleCost = d3.scaleLinear()
		.domain([0, maxCost])
		.range([0, 100])


	let join = costSVG.selectAll("rect")
		.data(data)

	join.enter()
		.append("rect")
		.attr("width", d => widthScaleCost(d.cost) + "px")
		.attr("fill" , "#20639B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	join.exit().remove()

	
	join.transition()
		.attr("width", d => widthScaleCost(d.cost) + "px")
		.attr("fill" , "#20639B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))


	let jointext = costSVG.selectAll("text")
		.data(data)

	jointext.enter()
		.append("text")
		.attr("class","label value")
		.text(d => "$" + d.cost.toLocaleString() + "M")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleCost(d.cost) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#20639B")

	jointext.exit().remove()

	
	jointext.transition()
		.attr("class","label value")
		.text(d => "$" + d.cost.toLocaleString() + "M")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScaleCost(d.cost) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#20639B")

	
	let xAxisCost = d3.axisTop(widthScaleCost)
		.tickFormat(d => d)
		.tickArguments([2])
		.tickSize(5)
	
	d3.select("#xAxisCost")
		.call(xAxisCost)
		.attr("transform", "translate(0, 50)")
		.attr("stroke", "#20639B")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	


	d3.select("#xAxisCostText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("transform", "translate(60, 0)")
		.attr("fill", "#20639B")
		.text("Cost, Millions")



	//Poverty Rate Bar Graph
	let maxPoverty = d3.min(data, d => d.povertyRate)

	let widthScalePoverty = d3.scaleLinear()
		.domain([maxPoverty, 0])
		.range([0, 100])

	let joinPoverty = povertyRateSVG.selectAll("rect")
		.data(data)

	joinPoverty.enter()
		.append("rect")
		.attr("width", d => 100 - widthScalePoverty(d.povertyRate) + "px")
		.attr("fill" , "#3CAEA3")
		.attr("height" , positionScale.bandwidth)
		.attr("y", d => positionScale(d.id))
		.attr("x", d => widthScalePoverty(d.povertyRate))

	joinPoverty.exit().remove()

	joinPoverty.transition()
		.attr("width", d => 100 - widthScalePoverty(d.povertyRate) + "px")
		.attr("fill" , "#3CAEA3")
		.attr("height" , positionScale.bandwidth)
		.attr("y", d => positionScale(d.id))
		.attr("x", d => widthScalePoverty(d.povertyRate))

	let joinPovertyText = povertyRateSVG.selectAll("text")
			.data(data)

	joinPovertyText.enter()
		.append("text")
		.text(d =>  d.povertyRate.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", 102)
		.attr("font-size", "12px")
		.attr("fill", "#3CAEA3")

	joinPovertyText.exit().remove()

	joinPovertyText.transition()
		.text(d =>  d.povertyRate.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", 102)
		.attr("font-size", "12px")
		.attr("fill", "#3CAEA3")

	
	let xAxisPoverty = d3.axisTop(widthScalePoverty)
		.tickFormat(d => d)
		.tickArguments([3])
		.tickSize(5)
	
	d3.select("#xAxisPoverty")
		.call(xAxisPoverty)
		.attr("stroke", "#3CAEA3")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisPovertyText")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("dx", 50)
		.attr("dy", -10)
		.attr("fill", "#3CAEA3")
		.text("Percentage Change in")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("x", 50)
		.attr("dy", 20)
		.attr("fill", "#3CAEA3")
		.text("Poverty Rate")


	//Poverty Efficiency Bar Graph
	let maxPovEfficiency = d3.max(data, d => d.povertyEfficiency)

	let widthScalePovEfficiency = d3.scaleLinear()
		.domain([0, maxPovEfficiency])
		.range([0, 100])

	let joinPovertyEfficiency = povertyEfficiencySVG.selectAll("rect")
		.data(data)

	joinPovertyEfficiency.enter()
		.append("rect")
		.attr("width", d => widthScalePovEfficiency(d.povertyEfficiency) + "px")
		.attr("fill" , "#ED553B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinPovertyEfficiency.exit().remove()

	joinPovertyEfficiency.transition()
		.attr("width", d => widthScalePovEfficiency(d.povertyEfficiency) + "px")
		.attr("fill" , "#ED553B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))



	let joinPovertyEfficiencyText = povertyEfficiencySVG.selectAll("text")
			.data(data)

	joinPovertyEfficiencyText.enter()
		.append("text")
		.text(d =>  d.povertyEfficiency.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScalePovEfficiency(d.povertyEfficiency) + 2)
		.attr("font-size", "12px")
		.attr("fill" , "#ED553B")

	joinPovertyEfficiencyText.exit().remove()

	joinPovertyEfficiencyText.transition()
		.text(d =>  d.povertyEfficiency.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", d => widthScalePovEfficiency(d.povertyEfficiency) + 2)
		.attr("font-size", "12px")
		.attr("fill" , "#ED553B")

	
	let xAxisPovertyEfficiency = d3.axisTop(widthScalePovEfficiency)
		.tickFormat(d => d)
		.tickArguments([2])
		.tickSize(4)
	
	d3.select("#xAxisPovertyEfficiency")
		.call(xAxisPovertyEfficiency)
		.attr("stroke", "#ED553B")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisPovertyEfficiencyText")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("dx", 50)
		.attr("dy", -10)
		.attr("fill" , "#ED553B")
		.text("Poverty Efficiency")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("x", 50)
		.attr("dy", 20)
		.attr("fill" , "#ED553B")
		.text("(Per Billion $)")


	//Poverty Depth Bar Graph
	let maxPovertyDepth = d3.min(data, d => d.povertyDepth)

	let widthScalePovertyDepth = d3.scaleLinear()
		.domain([maxPovertyDepth, 0])
		.range([0, 100])


	let joinPovertyDepth = povertyDepthSVG.selectAll("rect")
		.data(data)

	joinPovertyDepth.enter()
		.append("rect")
		.attr("width", d => 100 - widthScalePovertyDepth(d.povertyDepth) + "px")
		.attr("fill" , "#BD903C")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.attr("x", d => widthScalePovertyDepth(d.povertyDepth) )

	joinPovertyDepth.exit().remove()

	joinPovertyDepth.transition()
		.attr("width", d => 100 - widthScalePovertyDepth(d.povertyDepth) + "px")
		.attr("fill" , "#BD903C")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.attr("x", d => widthScalePovertyDepth(d.povertyDepth) )


	let joinPovertyDepthText = povertyDepthSVG.selectAll("text")
		.data(data)

	joinPovertyDepthText.enter()
		.append("text")
		.text(d =>  d.povertyDepth.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x", 102)
		.attr("font-size", "12px")
		.attr("fill", "#BD903C")

	joinPovertyDepthText.exit().remove()

	joinPovertyDepthText.transition()
		.text(d =>  d.povertyDepth.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 14)
		.attr("x",  102)
		.attr("font-size", "12px")
		.attr("fill", "#BD903C")
	
	let xAxisPovertyDepth = d3.axisTop(widthScalePovertyDepth)
		.tickFormat(d => d)
		.tickArguments([5])
		.tickSize(5)
	
	d3.select("#xAxisPovertyDepth")
		.call(xAxisPovertyDepth)
		.attr("stroke", "#BD903C")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisPovertyDepthText")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("dx", 50)
		.attr("dy", -10)
		.attr("fill", "#BD903C")
		.text("Percentage Change in")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("x", 50)
		.attr("dy", 20)
		.attr("fill", "#BD903C")
		.text("Poverty Depths")



}

function write(text){
    container.append("div").text(text)
}



