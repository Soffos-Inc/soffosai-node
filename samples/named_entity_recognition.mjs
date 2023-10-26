import { SoffosServices } from "soffosai";

const my_apiKey = "Token <put your api key here>";
const service = new SoffosServices.NamedEntityRecognitionService({apiKey:my_apiKey});
let response = await service.call(
    "client_whatever",
    "Patient Name: John Smith\nDate of Admission: June 15, 2023\n \
    Medical Record Number: 123456789\n\nChief Complaint:\n \
    The patient presents with severe abdominal pain and vomiting.\n\n \
    History of Present Illness:\n \
    Mr. Smith, a 45-year-old male, reports the onset of abdominal pain two days ago. \
    The pain is localized to the lower right quadrant and has been progressively worsening. \
    He has experienced multiple episodes of non-bloody vomiting. No significant \
    alleviating or exacerbating factors have been identified.\n\nPast Medical History:\n \
    The patient has a history of hypertension and type 2 diabetes mellitus. \
    He underwent an appendectomy in his childhood. He denies any known allergies or \
    previous surgeries.\n\n \
    Medications:\n \
    - Lisinopril 10mg once daily for hypertension\n \
    - Metformin 500mg twice daily for diabetes\n\n \
    Family History:\nThe patient's father had a history of myocardial infarction at the age of 60. \
    His mother is alive and well with no significant medical conditions. \
    There is no known family history of gastrointestinal disorders.\n\n \
    Social History:\nMr. Smith is a non-smoker and does not consume alcohol. \
    He is married and works as an accountant. He denies any illicit drug use.\n\n \
    Physical Examination:\n- Vital Signs: Blood pressure 130/80 mmHg, heart rate 82 bpm, \
    respiratory rate 16 breaths per minute, temperature 37.2°C (oral)\n \
    - General: The patient appears uncomfortable and is lying still in bed.\n \
    - Abdomen: There is tenderness in the right lower quadrant with guarding and \
    rebound tenderness. No palpable masses or organomegaly. Bowel sounds are diminished.\n\n \
    Assessment and Plan:\nThe patient's presentation is concerning for acute appendicitis. \
    He will undergo further diagnostic evaluation, including complete blood count, urinalysis, \
    and abdominal ultrasound. In the meantime, he will be kept NPO (nothing by mouth) and \
    started on intravenous fluids. Surgical consultation will be obtained for potential appendectomy.\n\n \
    Please note that this is a fictional clinical text generated for demonstration purposes only. \
    Any resemblance to actual patients or medical scenarios is purely coincidental.",
    {
        "Admission date": "date of admission"
    }
);
console.log(JSON.stringify(response, null, 2));

// returns
// {
//     "named_entities": [
//       {
//         "label": "Admission date",
//         "text": "June 15, 2023",
//         "span": [
//           44,
//           57
//         ]
//       }
//     ],
//     "entity_counts": [
//       {
//         "label": "Admission date",
//         "text": "June 15, 2023",
//         "count": 1
//       }
//     ],
//     "cost": {
//       "api_call_cost": 0.005,
//       "character_volume_cost": 0.1114,
//       "total_cost": 0.1164
//     },
//     "charged_character_count": 2228,
//     "unit_price": "0.000050"
// }