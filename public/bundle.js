'use strict';

const apirequest = async () => {
  try {
    const request = await axios.get("https://api.waifu.im/search", {
      params: {
        many: true,
        height: ">=200",
      },
    });
     localStorage.setItem("apirequest", JSON.stringify(request));
    const rest = JSON.parse(localStorage.getItem("apirequest"));
    const contenedor1 = document.getElementById("contenedor");
    const contenedor2 = document.getElementById("contenedor2");
    const id = request.data.images.image_id;
    let num = 0;
    let num2 = 0;
    const type = request.data.images.extension;
    const url = `https://cdn.waifu.im/${id}${type}`;
    JSON.parse(localStorage.getItem("apirequest")).data.images.forEach(
      (element) => {
        if (num <= 5) {
          contenedor1.innerHTML += ` <a href="detail.html" class=" border-2 border-red-500 w-[300px] mt-5  ml-10 mr-5 flex  ">
                <img src="${`https://cdn.waifu.im/${element.image_id}${element.extension}`}" alt="">
            </a>`;
        }
        num++;
      }
      );
      contenedor1.addEventListener("click", (e) => {
          if (e.target) {
              console.log("clcikc");
              const url_image = e.target.src;
              console.log(url_image);
              localStorage.setItem("url",url_image);
         }
     });
     
    JSON.parse(localStorage.getItem("apirequest")).data.images.forEach(
      (element) => {
        if (num2 <= 0) {
          contenedor2.innerHTML += ` <a href="detail.html" class="w-[500px] border-2 border-red-500  rounded-xl overflow-hidden  ">
                <img src="${localStorage.getItem("url")}" alt="">
            </a>`;
        }
            num2++;
         
      }
    );
   
  } catch (error) {
    console.log("error");
  }
};
// const funcion2 = async () => {
//

//console.log(await apirequest());

//funcion2();

apirequest();
