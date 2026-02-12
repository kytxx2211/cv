/* ================= FIREBASE ================= */

const firebaseConfig = {
  apiKey: "AIzaSyCP5VCUyWDnSqvcgMKJuI5oIJDVX32JqE",
  authDomain: "catnapstudio-b3052.firebaseapp.com",
  projectId: "catnapstudio-b3052",
  storageBucket: "catnapstudio-b3052.appspot.com",
  messagingSenderId: "957397782595",
  appId: "1:957397782595:web:9a3744fc5a3955e62704f6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const worksRef = db.collection("works");


/* ================= LOAD REALTIME ================= */

worksRef.orderBy("time","desc")
.onSnapshot(snapshot=>{

  const list = document.getElementById("list");
  list.innerHTML = "";

  snapshot.forEach(doc=>{

    const d = doc.data();

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <span>${d.title} (${d.type})</span>
      <button class="del" onclick="deleteWork('${doc.id}')">X</button>
    `;

    list.appendChild(div);

  });

});


/* ================= ADD ================= */

function addWork(){

  const title = document.getElementById("title").value;
  const type = document.getElementById("type").value;

  if(!title){
    alert("กรุณาใส่ชื่อผลงาน");
    return;
  }

  worksRef.add({
    title:title,
    type:type,
    time:new Date()
  });

  document.getElementById("title").value = "";

}


/* ================= DELETE ================= */

function deleteWork(id){

  if(confirm("ลบผลงานนี้ใช่ไหม?")){
    worksRef.doc(id).delete();
  }

}
