# Eindopdracht Frontend D&B Bestellijst

## Inleiding
Voor de Frontend deeltijd Boothcamp voor Novi ontwierp en programmeerde ik deze app D&B Bestellijst. 
Mijn huidige functie is als Grafisch vormgever bij D&B eventmarketing. Het bedrijf organiseert voor bedrijven grote evenementen waar ook veel grafisch werk voor nodig is. 
Om er voor te zorgen dat Projectmanagers op tijd zijn met deze aanvragen en om uren in te schatten voor de projecten heb ik een interactieve design bestelllijst bedacht. 
Je kunt in de app registreren, inloggen en een bestellijst invullen. Op de persoonlijke Dashboard-pagina wordt een lijst weergeven van eerdere ingevulde bestellijsten. 
Het formulier in de bestellijst werkt met checkboxes die automatisch bijhoudt en berekent hoeveel uren het in totaal zijn. 

In deze handleiding wordt er uitgelegd welke keys je nodig hebt voor de API key variabel, welke gegevens de backend-server ontvangt bij het inloggen en registreren 
en welke npm installaties er nodig zijn om deze app te runnen.


![screenshot](src/assets/screenshot.png)

## Inhoud
* [Inleiding](#Inleiding)
* [API keys](#API en keys)
    * [Weather app](#weather app)
    * [Workingdays](#Workingdays)
* [Inloggen en Registreren](#inloggen-en-registeren)
* [Opstarten en installeren](#opstarten-en-installeren)



## API en keys
Deze app haalt op bepaalde pagina's en componenten data op uit verschillende endpoints. 
Om de API keys te kunnen gebruiken waarvan deze app gebruik maakt kun je een eigen .env file aanmaken en deze aan je .gitignore toevoegen. 

De API key variabele komen voor op het component Weather.js en Date.js.

### Weather app
Om de endpoints op de Weather.js te kunnen bereiken heb je deze variabele nodig in je .env bestand:
REACT_APP_WEATHER_API_KEY=(eigen key)

Van de website: https://home.openweathermap.org/  kun je je eigen key ontvangen. 
Registreer je eerst.


### Workingdays
Om de endpoints op de Workingdays.js te kunnen bereiken heb je deze variabele nodig in je .env bestand:
REACT_APP_DATE_API_KEY=(eigen key)

van de website: https://rapidapi.com/joursouvres-api/api/working-days/   kun je je eigen key ontvangen.
Registreer je eerst.



## Inloggen en Registeren
Om in te loggen en te registeren maakt deze app gebruik van de Novi backend. Hieronder wordt er uitgelegd welke data er wordt

###Registreren
Om POST request te maken gebruik je deze endpoint:

https://frontend-educational-backend.herokuapp.com/api/auth/signup

De volgende data wordt meegegeven:

```json
{
   "username": "naam",
   "email" : "naam@email.nl",
   "password" : "123456",
   "role": ["user"]
}
```
###Inloggen
Om POST request te maken gebruik je deze endpoint:

https://frontend-educational-backend.herokuapp.com/api/auth/signin

Het inloggen van een bestaande gebruiker kan alleen als deze al geregistreerd is. 
Inloggen vereist de volgende informatie:

```json
{
   "username": "user",
   "password" : "123456"
}
```

De response bevat een authorisatie-token (JWT) en alle gebruikersinformatie. Onderstaand voorbeeld laat de repsonse zien na het inloggen van een gebruiker met een admin-rol:

```json
{
    "id": 6,
    "username": "mod3",
    "email": "mod3@novi.nl",
    "roles": [
        "ROLE_USER",
        "ROLE_MODERATOR"
    ],
    "accessToken": "eyJhJIUzUxMiJ9.eyJzdWICJleQ0OTR9.AgP4vCsgw5TMj_AQAS-J8doHqADTA",
    "tokenType": "Bearer"
}
```
Er wordt verder in de app geen persoonlijke gegevens opgevraagd.




## Opstarten en installeren
In deze app kun je het volgende runnen:
### `npm start` 
In de terminal kun je de command invoeren en zal de app direct opstarten in de browser [http://localhost:3000](http://localhost:3000)
De pagina herlaad als je wijzigingen maakt en de errors worden automatishc in de console gelogt.

### `npm run build`
Pas je toe wanneer je nieuwe mappen toevoegt naast de src map. 
Sluit wel eerst de app af met Ctr+C en start de app daarna weer op



### En deze npm moet je installeren om met de app te kunnen werken.
### `npm i file-saver`
Installeer je omdat de filesaver op de Dasboard pagina wordt gebruikt. Zo blijven alle componenten goed werken.

### `npm install axios`
Om verschillende data op te halen in onze app hebben we axios nodig voor onze 
async functies, vergeet dus niet om deze ook te installeren. 

### `npm install react react-dom`
Voor de router in deze app moet de react-dom worden geinstalleerd.

### `npm install react-hook-form`
Omdat deze app veel gebruik maakt van <form> moet de react-hook-form worden geinstalleerd.


### `npm install jwt-decode`
Om de tokens de decoderen heb je de npm jwt-decode nodig.


## Have fun and order :)