// console.log(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// console.log(window.scrollY);

// const exampleModal = new bootstrap.Modal("#exampleModal");

// user က အသုံးပြုလာတာ ၇၅% လောက်ရောက်ရင် modal ထိုးပြမယ်

// const scroll = () => {
//     // console.log(window.scrollY);
//     const h75 = 0.75 * (document.body.getBoundingClientRect().height - window.innerHeight);
//     if(window.scrollY > h75){
//         exampleModal.show();
//         window.removeEventListener("scroll",scroll,false);
//     }
// }

// window.addEventListener("scroll",scroll);

// window.addEventListener("resize",() => {
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
// });

// window.addEventListener('online', (event) => {
//     console.log("u are online");
// });

// window.addEventListener('offline', (event) => {
//     console.log("u are offline");
// });

// alert("hello");
// console.log(innerWidth);
// console.log(innerHeight);

//const h1 = document.querySelector("#clock");
const clockStart = document.querySelector("#start");
const clockStop = document.querySelector("#stop");
const to = document.querySelector("#to");


// const run = () => {
//     const d = new Date();
//     // console.log(d.getHours(),":",d.getMinutes(),":",d.getSeconds());

//     h1.innerText = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//     document.body.append(h1);
// }

// // setTimeout(run,3000);

// let runClock;//state
// clockStart.addEventListener("click", () => {
//     runClock = setInterval(run,1000);//state
// });
// clockStop.addEventListener("click",() => {
//     clearInterval(runClock);
// });

// let run;

// clockStart.addEventListener("click",() => {
//     run = setTimeout(()=> console.log("hello"),3000);
// });

// clockStop.addEventListener("click",()=> {
//     clearTimeout(run);
// });

// const test = (start,stop) => {
//     let i=start;
//     const run = setInterval(()=>{
//         console.log("hello",++i);

//         if(i === stop){
//             clearInterval(run);
//         }
//     },1000);
// }

// clockStart.addEventListener("click", () => {
// //   open("https://mms-it.com");
//   const windowFeatures = "left=100,top=100,width=320,height=320";
//   const handle = window.open(
//     "https://mms-it.com",
//     "mozillaWindow",
//     windowFeatures
//   );
// });



// clockStart.addEventListener("click", () => {
// //   open("https://mms-it.com");
//     // const windowFeatures = "left=100,top=100,width=320,height=320";
//     // const handle = window.open(
//     // "https://mms-it.com",
//     // "mozillaWindow",
//     // windowFeatures
//     // );

//     // window.resizeTo(400,400);

//     scrollTo(0,document.querySelector("#to").getBoundingClientRect().y);
// });

// clockStop.addEventListener("click",()=>{
//     close();
// });


// for(let i=1; i<=5; i++){
//     console.log("loop",i);
// }

// console.log(i);

// scope (js မှာ ရှိတဲ့ scope တွေ)
// global
// block
// local 
// module