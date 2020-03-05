let groupSVG = d3.select("#groupSVG")
let labelSVG = d3.select("#labelSVG")
let scaleLabelSVG = d3.select("#scaleLabelSVG")
let BRRLabelSVG = d3.select("#BRRLabelSVG")
let costSVG = d3.select("#costSVG")
let povertyRateSVG = d3.select("#povertyRateSVG")
let povertyDepthSVG = d3.select("#povertyDepthSVG")
let GiniSVG = d3.select("#GiniSVG")
let recipSVG = d3.select("#recipSVG")
let distribSVG = d3.select("#distribSVG")

d3.csv("data/ubi.csv" , function(d , i, columns) {
	return{
		id : +d.id,
		benefits : +d.Benefit,
		scale : +d.Scale,
		beneficiary : d.Beneficiary,
		recipients : +d.Recipients,
		cost : +d.Cost,
		povertyRate : +d.PovertyRate, 
		povertyDepth : +d.PovertyDepths,
		gini : +d.Gini,
		group: d.group,
		brr : +d.BRR,
		quartile1 : +d.quartile1,
		quartile2 : +d.quartile2,
		quartile3 : +d.quartile3,
		quartile4 : +d.quartile4
	}
}
)
    .then(dataloaded)

function dataloaded(data) {


	let dataAll = data.sort((a, b) => {
		return d3.ascending(a.id , b.id)
	})

	//change baseline values from 0 to empty
	
	dataAll.forEach(function(d){
		if(d.scale===0){
			d.scale = "--"	
			d.benefits = " -- "
			d.brr = "--"
		}
	})

		

	showData(dataAll)



	//Button for BI type
	let types = ["All" , "NIT", "Universal"]
	
	let dropDown = d3.select("#button1")
		.append("select")
		.on("change" , BItype) 
		.attr("id" , "type")

	//Button for benefit Amounts
	let amount = ["All" , "18000", "10000", "5000" , "1000"]

	let dropDown2 = d3.select("#button2")
		.append("select")
		.on("change" , BItype)
		.attr("id" , "amount")

	//Button for Equivalence Scale
	let equivScale = ["All", "1.4", "2.0"]

	
	let dropDown3 = d3.select("#button3")
		.append("select")
		.on("change" , BItype)
		.attr("id" , "equivScale")



		function BItype(){
			let typeChoice = d3.select("#type").property("value")
			let amountChoice = d3.select("#amount").property("value")
			let scaleChoice = d3.select("#equivScale").property("value")


			console.log(typeChoice)

			if(typeChoice==="Universal"){
				if(amountChoice === "All"){
					if(scaleChoice === "All"){
						dataFiltered = data.filter(function(d){
						return d.group === "Universal "	})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.scale === 2.0})
					} 
				} else if(amountChoice === "18000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 18000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 18000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 18000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					} 
				} else if(amountChoice === "10000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 10000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 10000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 10000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
				} else if(amountChoice === "5000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 5000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 5000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 5000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
				} else if(amountChoice === "1000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 1000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 1000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "Universal "})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 1000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
	
				}				
			} else if (typeChoice === "NIT"){
				if(amountChoice === "All"){
					if(scaleChoice === "All"){
						dataFiltered = data.filter(function(d){
						return d.group === "NIT"	})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.scale === 2.0})
					} 
				} else if(amountChoice === "18000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 18000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 18000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 18000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					} 
				} else if(amountChoice === "10000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 10000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 10000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 10000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
				} else if(amountChoice === "5000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 5000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 5000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 5000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
				} else if(amountChoice === "1000"){
					if(scaleChoice === "All"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"	})
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 1000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 1000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = data.filter(function(d){
						return d.group === "NIT"})
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 1000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}}
			} else if (typeChoice === "All"){
				if(amountChoice === "All"){
					if(scaleChoice === "All"){
						dataFiltered = dataAll
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = dataAll
						dataFiltered = dataFiltered1.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = dataAll
						dataFiltered = dataFiltered1.filter(function(d){
						return d.scale === 2.0})
					} 
				} else if(amountChoice === "18000"){
					if(scaleChoice === "All"){
						dataFiltered1 = dataAll
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 18000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 18000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 18000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					} 
				} else if(amountChoice === "10000"){
					if(scaleChoice === "All"){
						dataFiltered1 = dataAll
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 10000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 10000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 10000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
				} else if(amountChoice === "5000"){
					if(scaleChoice === "All"){
						dataFiltered1 = dataAll
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 5000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 5000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 5000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})
					}
				} else if(amountChoice === "1000"){
					if(scaleChoice === "All"){
						dataFiltered1 = dataAll
						dataFiltered = dataFiltered1.filter(function(d){
						return d.benefits === 1000})
					} else if(scaleChoice === "1.4"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 1000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 1.4})
					} else if(scaleChoice === "2.0"){
						dataFiltered1 = dataAll
						dataFiltered2 = dataFiltered1.filter(function(d){
						return d.benefits === 1000	})
						dataFiltered = dataFiltered2.filter(function(d){
						return d.scale === 2.0})

			}}}


			showData(dataFiltered)
		}

	dropDown.selectAll("option")
		.data(types)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })




	dropDown2.selectAll("option")
		.data(amount)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })

	dropDown3.selectAll("option")
		.data(equivScale)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
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
		.domain([6, 33])
		.range([150, 800])

	let idMap = data.length	
	console.log(idMap)

	let rangeMax = rangeScale(idMap)
	console.log(rangeMax)

	let positionScale = d3.scaleBand()
		.range([0, rangeMax])
		.domain(data.map(d => d.id))
		.padding(0.3)

	//First label: BI type/group
	let joinGroup = groupSVG.selectAll("text")
		.data(data)



	joinGroup.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.group + ": " + d.beneficiary)

	joinGroup.exit().remove()

	joinGroup.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.group + ": " + d.beneficiary)

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


	//Third Label: equivalence scale
	let joinScaleLabel = scaleLabelSVG.selectAll("text")
		.data(data)

	joinScaleLabel.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.scale.toLocaleString())
		.style("text-anchor", "middle")

	joinScaleLabel.exit().remove()

	joinScaleLabel.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.scale.toLocaleString())
		.style("text-anchor", "middle")


	d3.select("#scaleHeader")
		.append("text")
		.style("text-anchor", "middle")
		.append("tspan")
		.text("Equivalence")
		.attr("font-weight" , "bold")
		.style("text-anchor", "middle")
		.append("tspan")
		.attr("x", 0)
		.attr("dy", 20)
		.text("Scale")
		.attr("font-weight" , "bold")
	
	//Fourth Label: Benefit reduction rate
	let joinBRRLabel = BRRLabelSVG.selectAll("text")
		.data(data)

	joinBRRLabel.enter()
		.append("text")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.brr + "%")
		.style("text-anchor", "middle")

	joinBRRLabel.exit().remove()

	
	joinBRRLabel.transition()
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))
		.text(d => d.brr + "%")
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
		.attr ("y", d => positionScale(d.id) + 10 )
		.attr("x", d => widthScaleCost(d.cost) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#20639B")

	jointext.exit().remove()

	
	jointext.transition()
		.attr("class","label value")
		.text(d => "$" + d.cost.toLocaleString() + "M")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10 )
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
	let maxPoverty = d3.max(data, d => d.povertyRate)
	

	let widthScalePoverty = d3.scaleLinear()
		.domain([0, maxPoverty])
		.range([0, 100])


	let joinPoverty = povertyRateSVG.selectAll("rect")
		.data(data)

	joinPoverty.enter()
		.append("rect")
		.attr("width", d => widthScalePoverty(d.povertyRate) + "px")
		.attr("fill" , "#3CAEA3")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinPoverty.exit().remove()

	joinPoverty.transition()
		.attr("width", d => widthScalePoverty(d.povertyRate) + "px")
		.attr("fill" , "#3CAEA3")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))



	let joinPovertyText = povertyRateSVG.selectAll("text")
			.data(data)

	joinPovertyText.enter()
		.append("text")
		.text(d =>  d.povertyRate.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScalePoverty(d.povertyRate) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#3CAEA3")

	joinPovertyText.exit().remove()

	joinPovertyText.transition()
		.text(d =>  d.povertyRate.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScalePoverty(d.povertyRate) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#3CAEA3")

	
	let xAxisPoverty = d3.axisTop(widthScalePoverty)
		.tickFormat(d => d)
		.tickArguments([6])
		.tickSize(5)
	


	
	d3.select("#xAxisPoverty")
		.call(xAxisPoverty)
		.attr("stroke", "#3CAEA3")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisPovertyText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("transform", "translate(60, 0)")
		.attr("fill", "#3CAEA3")
		.text("Poverty Rate, %")

	//Poverty Depth Bar Graph
	
	let maxPovertyDepth = d3.max(data, d => d.povertyDepth)
	

	let widthScalePovertyDepth = d3.scaleLinear()
		.domain([0, maxPovertyDepth])
		.range([0, 100])


	let joinPovertyDepth = povertyDepthSVG.selectAll("rect")
		.data(data)

	joinPovertyDepth.enter()
		.append("rect")
		.attr("width", d => widthScalePovertyDepth(d.povertyDepth) + "px")
		.attr("fill" , "#BD903C")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinPovertyDepth.exit().remove()

	joinPovertyDepth.transition()
		.attr("width", d => widthScalePovertyDepth(d.povertyDepth) + "px")
		.attr("fill" , "#BD903C")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))


	let joinPovertyDepthText = povertyDepthSVG.selectAll("text")
		.data(data)

	joinPovertyDepthText.enter()
		.append("text")
		.text(d =>  d.povertyDepth.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScalePovertyDepth(d.povertyDepth) + 2)
		.attr("font-size", "12px")
		.attr("fill", "#BD903C")


	joinPovertyDepthText.exit().remove()

	joinPovertyDepthText.transition()
		.text(d =>  d.povertyDepth.toLocaleString() + "%")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScalePovertyDepth(d.povertyDepth) + 2)
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
		.attr("transform", "translate(60, 0)")
		.attr("fill", "#BD903C")
		.text("Poverty Depths, %")

	//Gini Bar Graph
	
	let maxGini = d3.max(data, d => d.gini)
	

	let widthScaleGini = d3.scaleLinear()
		.domain([0, 0.5])
		.range([0, 100])


	let joinGini = GiniSVG.selectAll("rect")
		.data(data)

	joinGini.enter()
		.append("rect")
		.attr("width", d => widthScaleGini(d.gini) + "px")
		.attr("fill" , "#ED553B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))

	joinGini.exit().remove()

	joinGini.transition()
		.attr("width", d => widthScaleGini(d.gini) + "px")
		.attr("fill" , "#ED553B")
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id))


	let joinGiniText = GiniSVG.selectAll("text")
		.data(data)

	joinGiniText.enter()
		.append("text")
		.text(d =>  d.gini.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScaleGini(d.gini) + 2)
		.attr("font-size", "12px")
		.attr("fill","#ED553B")

	joinGiniText.exit().remove()

	joinGiniText.transition()
		.text(d =>  d.gini.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScaleGini(d.gini) + 2)
		.attr("font-size", "12px")
		.attr("fill","#ED553B")


	
	let xAxisGini = d3.axisTop(widthScaleGini)
		.tickFormat(d => d)
		.tickArguments([5])
		.tickSize(5)
	
	
	d3.select("#xAxisGini")
		.call(xAxisGini)
		.attr("stroke", "#ED553B")
		.attr("fill", "none")
		.attr("stroke-width", "0.5px")	

	d3.select("#xAxisGiniText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "#ED553B")
		.attr("transform", "translate(60, 0)")
		.text("Gini Coefficient")


	
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
		.attr ("y", d => positionScale(d.id) + 10)
		.attr("x", d => widthScaleRecip(d.recipients) + 2)
		.attr("font-size", "12px")
		.attr("fill","#B19CD9")

	joinRecipText.exit().remove()

	joinRecipText.transition()
		.text(d =>  d.recipients.toLocaleString())
		.attr("height" , positionScale.bandwidth)
		.attr ("y", d => positionScale(d.id) + 10)
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


//Distribution across income quartiles - graph

	let subgroups = Object.keys(data[0]).slice(11)

	console.log(subgroups)

	let stack = d3.stack()
		.keys(subgroups)
		(data)

	let widthScaleDistrib = d3.scaleLinear()
		.domain([0, 100])
		.range([0, 100])

	 let color = d3.scaleOrdinal()
    		.range(["#7b6888", "#6b486b", "#a05d56", "#d0743c"])


	let joinDistrib = distribSVG		
		.selectAll("g")
		.data(stack, d => d.key)

	joinDistrib.exit().remove()


	let joinDistrib2 = joinDistrib.enter()
		.append("g")
		.attr("fill", function(d) { return color(d.key) })

	
		
	let bars =  distribSVG		
		.selectAll("g").selectAll(".bar")
		.data(d => d, e => e.data.id)


	bars.enter()
		.append("rect")
		.attr("class" , "bar")
		.attr ("y", d => positionScale(d.data.id))
		.attr("height" , positionScale.bandwidth)
		.attr("x", d => widthScaleDistrib(d[0]))
		.attr("width" , function(d) { return  widthScaleDistrib(d[1]) -  widthScaleDistrib(d[0]) })

	
	bars.exit().remove()

	joinDistrib.transition()
		.attr("fill", function(d) { return color(d.key) })
	
	bars.transition()
		.attr ("y", d => positionScale(d.data.id))
		.attr("height" , positionScale.bandwidth)
		.attr("x", d => widthScaleDistrib(d[0]))
		.attr("width" , function(d) { return  widthScaleDistrib(d[1]) -  widthScaleDistrib(d[0]) })


	

	d3.select("#xAxisDistribText")
		.append("text")
		.style("text-anchor", "middle")
		.attr("fill", "black")
		.attr("transform", "translate(60, -5)")
		.text("Distribution Across ")
		.append("tspan")
		.attr("dx", -120)
		.attr("dy", 20)
		.text("Income Quartiles")






}

function write(text){
    container.append("div").text(text)
}



