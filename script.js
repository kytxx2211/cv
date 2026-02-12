<script type="module">

import { db } from './firebase.js';

import {
 collection,getDocs
} from
'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

async function load(){

 const snap=await getDocs(collection(db,'catnapstudio'));

 snap.forEach(d=>{

  const data=d.data();

  const img=document.createElement('img');
  img.src=data.image;

  document
   .getElementById(data.category)
   .appendChild(img);

 });

}

load();
</script>
