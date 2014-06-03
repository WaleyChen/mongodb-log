var regret = require('regret');

var regexes = [
	// General - Timestamps
	[
		'ctime',
		new RegExp('/\w{3} \w{3} \d{1,2} \d{1,2}:\d{2}:\d{2}/'),
		'Wed Dec 31 19:00:00.000'
	],

	[
		'ctime-pre2.4',
		new RegExp('/\w{3} \w{3} \d{1,2} \d{1,2}:\d{2}:\d{2}/'),
		'Wed Dec 31 19:00:00'
	],

	[
		'iso8601-local',
		new RegExp(),
		'1969-12-31T19:00:00.000+0500'
	],

	[
		'iso8601-utc',
		new RegExp(),
		'1970-01-01T00:00:00.000Z'
	],

	[
		'date',
	 	new RegExp('/\w{3} \w{3} \d{1,2} \d{1,2}:\d{2}:\d{2}/'),
		'Wed Mar 12 14:42:31'
	],

	[
		'date.iso',
		new RegExp('/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1,3}-\d{4}/'),
		'2014-02-13T18:00:04.709-0500' 
	],

	[
		'mongodb.log',
		new RegExp('/({{date.iso}}|{{date}}) \[(\w+)\] (.*)/'),
		'2014-02-13T18:00:04.709-0500 [initandlisten] db version v2.5.6-pre-',
		['date', 'name', 'message']
	],

	[
		'mongodb.logshutdown',
		new RegExp('/(\w+)\: (.*)/'),
		'dbexit: really exiting now',
		['name', 'message']
	]
]

for (var i = 0; i < regexes.length; i++)
	regret.add.apply(null, regexes[i]);

module.exports = regret;