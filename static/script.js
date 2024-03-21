// Heutiges Datum erhalten


// Landesspezifische Formatierung für Deutschland ('de-DE')

const formattedDateDE = new Intl.DateTimeFormat('de-DE', options).format(today);
console.log(formattedDateDE); // Ausgabe: "Montag, 20. März 2024" (abhängig vom aktuellen Datum)

// Landesspezifische Formatierung für USA ('en-US')
const formattedDateUS = new Intl.DateTimeFormat('en-US', options).format(today);
console.log(formattedDateUS); // Ausgabe: "Monday, March 20, 2024" (abhängig vom aktuellen Datum)

function countryFormat(languageCode, currencyCode, lengthCode, weightCode){
    //Formartierregeln
    const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric'}
    const currencyOptions = {style: 'currency', currency: currencyCode};
    const lengthOptions = {style:'unit', unit:lengthCode, unitDisplay: 'short'};
    const weightOptions = {style:'unit', unit:weightCode, unitDisplay: 'short'};
    const countryOptions = {type: 'region'};
    
    //zu formartiernde Variablen:
    const time = new Date();
    const money = 270.14;
    const number = 300100.23;
    const length = 13.57;
    const weight = 83.50;
    const country = "DE";

    
    //Datum:
    const formattedDate = new Intl.DateTimeFormat(languageCode, dateOptions).format(time);
    document.querySelector("#date").innerHTML=formattedDate;

    //Uhrzeit:
    const formattedTime = new Intl.DateTimeFormat(languageCode, timeOptions).format(time);
    document.querySelector("#dayTime").innerHTML=formattedTime; 

    //Währung:
    const formattedMoney = new Intl.NumberFormat(languageCode, currencyOptions).format(money);
    document.querySelector("#currency").innerHTML=formattedMoney;

    //Zahl:
    const formattedNumber = new Intl.NumberFormat(languageCode).format(number);
    document.querySelector("#number").innerHTML=formattedNumber;

    //Länge:
    const formattedLength = new Intl.NumberFormat(languageCode, lengthOptions).format(length);
    document.querySelector("#length").innerHTML=formattedLength;

    //Gewicht:
    const formattedWeight = new Intl.NumberFormat(languageCode, weightOptions).format(weight);
    document.querySelector("#weight").innerHTML=formattedWeight;

    //Land:
    const displayNames = new Intl.DisplayNames(languageCode, { type: 'region' });
    const formattedCountry = displayNames.of(country);
    document.querySelector("#country").innerHTML = formattedCountry;
    console.log(formattedCountry);
}

