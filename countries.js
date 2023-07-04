// Fetching the data from the API
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        // Get all the countries from Asia continent/region using the Filter function
        const countriesInAsia = data.filter(
            (country) => country.region === "Asia"
        );
        console.log("Countries in Asia:", countriesInAsia);

        // Get all the countries with a population of less than 2 lakhs using the Filter function
        const countriesWithLessPopulation = data.filter(
            (country) => country.population < 200000
        );
        console.log("Countries with population less than 2 lakhs:", countriesWithLessPopulation);

        // Print the name, capital, and flag details using the forEach function
        data.forEach((country) => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital[0]);
            console.log("Flag:", country.flags.png);
        });

        // Print the total population of countries using the reduce function
        const totalPopulation = data.reduce(
            (accumulator, country) => accumulator + country.population,
            0
        );
        console.log("Total population of countries:", totalPopulation);

        // Print the country which uses US Dollars as currency
        const countryWithUSCurrency = data.find((country) =>
            country.currencies.hasOwnProperty("USD")
        );
        console.log("Country that uses US Dollars as currency:", countryWithUSCurrency);
    })
    .catch((error) => {
        console.log("Error fetching data:", error);
    });
