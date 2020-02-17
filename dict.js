const axios = require('axios')
var language = 'en-gb'
var word_id = process.argv[2]
var fields = 'pronunciations'
var strictMatch = 'false'
url =  `https://od-api.oxforddictionaries.com/api/v2/entries/${language}/` + word_id + '?fields=' + fields + '&strictMatch=' + strictMatch
axios.get(url, {
headers: {

                "app_id": "c874e86f",
                "app_key": "bc3900f4a68e5ea53faf4e976819899a "
}
    })
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
})

.then(function () {

    // always executed

  }); 
/*API Base URL 	https://od-api.oxforddictionaries.com/api/v2

Consistent part of API requests.
Application ID 	c874e86f

This is the application ID, you should send with each API request.
Application Keys 	bc3900f4a68e5ea53faf4e976819899a 	
	c4dca89a1b99c60e154fd7bbf242adc8 	
	

These are application keys used to authenticate requests.

At most 5 keys are allowed.*/