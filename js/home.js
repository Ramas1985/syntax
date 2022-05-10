// IMPORT
import { suma } from './components/algebra/suma.js';
import { dalyba } from './components/algebra/dalyba.js';
import { kvadratu } from './components/algebra/kvadratas.js';
import { sandauga } from './components/algebra/sandauga.js';
import { skirtumas } from './components/algebra/skirtumas.js';
import { vidurkis } from './components/algebra/vidurkis.js';


// EXECUTION
const a = suma(8, 5);
console.log(a);

const b = dalyba(8, 5);
console.log(b);

const c = kvadratu(8, 5);
console.log(c);

const d = sandauga(8, 5);
console.log(d);

const e = skirtumas(8, 5);
console.log(e);

const f = vidurkis([8, 5, 5, 5, 5, 5]);
console.log(f);
