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
		.append("select")
		.on("change" , button) 
		.attr("id" , "type")

	
	//Button for benefit Amounts
	let amount = ["All" , "1000", "5000", "10000", "20000"]

	let dropDown2 = d3.select("#button2")
		.append("select")
		.on("change" , button)
		.attr("id" , "amount")

	//Button for income test level
	let income = ["All" , "Family" , "Individual"]

	let dropDown3 = d3.select("#button3")
		.append("select")
		.on("change" , button)
		.attr("id" , "income")

	//Button for payment level
	let payment = ["All" , "Family" , "Individual"]

	let dropDown4 = d3.select("#button4")
		.append("select")
		.on("change" , button)
		.attr("id" , "payment")

	//Button for Brr
	let brr = ["All" , "15%" , "30%" , "50%" , "75%"]

	let dropDown5 = d3.select("#button5")
		.append("select")
		.on("change" , button)
		.attr("id" , "brr")

	//Button Function 
	function button(){
		let typeChoice = d3.select("#type").property("value")
		let amountChoice = d3.select("#amount").property("value")
		let incomeChoice = d3.select("#income").property("value")
		let paymentChoice = d3.select("#payment").property("value")
		let brrChoice = d3.select("#brr").property("value")

		console.log(typeChoice)

		if(typeChoice==="All"){
			if (amountChoice==="All"){
				if (incomeChoice==="All"){
					if(paymentChoice=="All") {
						if(brrChoice=="All"){
							dataFiltered = dataAll
						} else if (brrChoice==="15%"){
							dataFiltered = dataAll.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataAll.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataAll.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataAll.filter(function(d){
							return d.brr==75})
						} 
					} else if(paymentChoice=="Family") {
						dataFiltered1 = dataAll.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered1
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==75})
						} 
					} else if(paymentChoice=="Individual") {
						dataFiltered1 = dataAll.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered1
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered1.filter(function(d){
							return d.brr==75})
						}
					}	
				} else if (incomeChoice==="Family"){
					dataFiltered1 = dataAll.filter(function(d){
						return d.income==="Family" || d.income==="N/A"})
					if(paymentChoice=="All") {
					dataFiltered2 = dataFiltered1
						if(brrChoice=="All"){
							dataFiltered = dataFiltered2
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered2 = dataFiltered1.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered2
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered2 = dataFiltered1.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered2
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered1 = dataAll.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"})
					if(paymentChoice=="All") {
						dataFiltered2 = dataFiltered1
						if(brrChoice=="All"){
							dataFiltered = dataFiltered2
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered2 = dataFiltered1.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered2
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered2 = dataFiltered1.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered2
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered2.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			} else if (amountChoice==="1000"){
				dataFiltered1 = dataAll.filter(function(d){
					return d.benefits===1000})
				if (incomeChoice==="All"){
					dataFiltered2 = dataFiltered1
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered2 = dataFiltered1.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered2 = dataFiltered1.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"})
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			} else if (amountChoice==="5000"){
				dataFiltered1 = dataAll.filter(function(d){
					return d.benefits===5000})
				if (incomeChoice==="All"){
					dataFiltered2 = dataFiltered1
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered2 = dataFiltered1.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered2 = dataFiltered1.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"})
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			} else if (amountChoice==="10000"){
				dataFiltered1 = dataAll.filter(function(d){
					return d.benefits===10000
				})
				if (incomeChoice==="All"){
					dataFiltered2 = dataFiltered1
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered2 = dataFiltered1.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered2 = dataFiltered1.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"})
					if(paymentChoice=="All") {
						dataFiltered3 = dataFiltered2
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Family") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					} else if(paymentChoice=="Individual") {
						dataFiltered3 = dataFiltered2.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered3
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered3.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			}	
		} else if (typeChoice === "RTC"){
			dataFiltered1 = data.filter(function(d){
					return d.group==="RTC"
				})
			if (amountChoice==="All"){
				dataFiltered2 = dataFiltered1
					if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
						if (paymentChoice==="All"){
							dataFiltered4 = dataFiltered3
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"})
					if (paymentChoice==="All"){
							dataFiltered4 = dataFiltered3
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
							dataFiltered4 = dataFiltered3
								if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
							if(brrChoice=="All"){
							dataFiltered = dataFiltered4
							} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
							}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
							}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
							}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
						}
				}
			} else if (amountChoice==="1000"){
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===1000})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			} else if (amountChoice==="5000"){
				dataFiltered1 =  data.filter(function(d){
					return d.group==="RTC"})
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===5000})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			} else if (amountChoice==="10000"){
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===10000})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				}	
			} else if (amountChoice==="20000"){
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===20000})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
						dataFiltered4 = dataFiltered3
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
							}
					} else if (paymentChoice === "Family"){
							dataFiltered4 = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					} else if (paymentChoice === "Individual"){
						dataFiltered4 = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						if(brrChoice=="All"){
							dataFiltered = dataFiltered4
						} else if (brrChoice==="15%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==15})
						}  else if (brrChoice==="30%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==30})
						}  else if (brrChoice==="50%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==50})
						}  else if (brrChoice==="75%"){
							dataFiltered = dataFiltered4.filter(function(d){
							return d.brr==75})
						}
					}
				}
			}	
		} else if (typeChoice === "Universal"){
			dataFiltered1 = data.filter(function(d){
					return d.group==="Universal"})
			if (amountChoice==="All"){
				dataFiltered2 = dataFiltered1
					if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
						if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
						} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"})
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				}
			} else if (amountChoice==="1000"){
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===1000
				})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
						} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				}	
			} else if (amountChoice==="5000"){
				dataFiltered1 =  data.filter(function(d){
					return d.group==="RTC"
				})
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===5000
				})
					if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
						} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				}	
			} else if (amountChoice==="10000"){
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===10000})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
						} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				}	
			} else if (amountChoice==="20000"){
				dataFiltered2 = dataFiltered1.filter(function(d){
					return d.benefits===20000})
				if (incomeChoice==="All"){
						(dataFiltered3 = dataFiltered2)
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				} else if (incomeChoice==="Family"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Family" || d.income==="N/A"
					})
					if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
					} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
					} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
					}
				} else if (incomeChoice==="Individual"){
					dataFiltered3 = dataFiltered2.filter(function(d){
						return d.income==="Individual" || d.income==="N/A"
					})
						if (paymentChoice==="All"){
							dataFiltered = dataFiltered3
						} else if (paymentChoice === "Family"){
							dataFiltered = dataFiltered3.filter(function(d){
								return d.payment==="Family"})
						} else if (paymentChoice === "Individual"){
						dataFiltered = dataFiltered3.filter(function(d){
							return d.payment==="Individual"	})
						}
				}	
			}	
			}	
		showData(dataFiltered)
	}
	
	//Insert text into BI Types button
	dropDown.selectAll("option")
		.data(types)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })

	//Insert text into Benefit Amounts button
	dropDown2.selectAll("option")
		.data(amount)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })

	//Insert text into Income Unit button
	dropDown3.selectAll("option")
		.data(income)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })	

	//Insert text into Payment button
	dropDown4.selectAll("option")
		.data(payment)
		.enter()
		.append("option")
		.attr("value" , function (d) {return d})
		.text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    })	

	//Insert text into BRR button
	dropDown5.selectAll("option")
		.data(brr)
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



