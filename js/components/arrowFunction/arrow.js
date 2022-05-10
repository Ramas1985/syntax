/*
 parasyti funkcija:
- duoto zodzio pirma raide
- duoto zodzio vidurine raide
- duoto zodzio paskutine raide
- ar duoto zodzio N-oji raide yra didzioji? true/false
- ar duoto zodzio N-oji raide yra mazoji? true/false

const skaicius = a => a * a;
*/

const pirmaRaide = text => text === '' ? '' : text[0];

const paskutineRaide = text => text === '' ? '' : text[text.length - 1];

const vidurineRaide = text => text === '' ? '' : text[Math.ceil(text.length / 2 - 1)];

