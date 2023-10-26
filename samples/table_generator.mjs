import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.TableGeneratorService({apiKey:my_apiKey});
let response = await service.call(
    "client 2345678",
    "Demographic and socioeconomic factors can contribute to community spread of COVID-19. \
    The aim of this study is to describe the demographics and socioeconomic factors in \
    relation to geolocation of COVID-19 patients who were discharged from the emergency \
    department (ED) back into the community...",
    "CSV"
);
console.log(JSON.stringify(response, null, 2));
    
// returns
// {
//     "tables": [
//       {
//         "title": "Demographics and Socioeconomic Factors of COVID-19 Patients Discharged from the Emergency Department",
//         "table": "Demographic Factor,Socioeconomic Factor,Geolocation\nAge,Income,Latitude\nGender,Education,Longitude\nRace/Ethnicity,Occupation,\nHousing,,\nTransportation,,\n",
//         "note": "The table captures the demographic factors (age, gender, race/ethnicity) and socioeconomic factors (income, education, occupation, housing, transportation, health insurance) related to the geolocation (latitude and longitude) of COVID-19 patients discharged from the 
//   emergency department."
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.01535,
//       "total_cost": 0.02035
//     },
//     "charged_character_count": 307,
//     "unit_price": "0.000050"
// }