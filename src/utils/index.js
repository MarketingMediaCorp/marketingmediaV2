import { DateTime } from 'luxon'

const slugify = function (text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}


const dateFormate = function () {
	var day = new Date().getDate();
	var month = new Date().toLocaleString("en-US", { month: "long" });
	var year = new Date().getFullYear();
	
	var todayDate = (day + " " + month + "," + " " + year);
	
	return todayDate;
}


export { slugify, dateFormate };