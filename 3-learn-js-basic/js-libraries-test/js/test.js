// const arr = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "a",
//   "b",
//   "c",
//   "d",
//   "a",
//   "b",
//   "c",
//   "d",
//   "a",
//   "b",
//   "c",
//   "d",
//   "a",
//   "b",
//   "c",
//   "d",
// ];





// console.log(_.chunk(arr, 3));

// const myName = "hein htet zan";

// console.log(_.camelCase(myName));

// const m = moment();
// m.add(5,"days");
// m.subtract(3,"years");

// console.log(m.format("D MMM Y"));


// axios("https://dummyjson.com/products/1")
// .then((data) => console.log(data.data));


// const run =  async () => {
//     const res = await axios("https://dummyjson.com/products/1");
//     console.log(res.data);
// };

// run();


// alert("hello min ga lar par");

// Swal.fire(
//     "San Kyi Tar",
//     "Function to display a SweetAlert2 popup, with an object of options, all being optional. See the SweetAlertOptions interface for the list of accepted fields and values.",
//     "success"
// );

// const btn = document.querySelector("button");

// const run = () => {
//     // Swal.fire({
//     //     icon :"question",
//     //     title : "min ga lar par",
//     //     text : "san kyi tar par byar hello..."
//     // });


//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       }).then((result) => {
//         if (result.isConfirmed) {
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: 'top-end',
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                   toast.addEventListener('mouseenter', Swal.stopTimer)
//                   toast.addEventListener('mouseleave', Swal.resumeTimer)
//                 }
//               })
              
//               Toast.fire({
//                 icon: 'success',
//                 title: 'Signed in successfully'
//               })
//         }else{
//             console.log("no");
//         }
//       })
// }


// btn.addEventListener("click",run);

// const ctx = document.querySelector("#myChart");

// new Chart(ctx,{
//     type: "radar",
//     data: {
//         labels: ["a","b","c","d","e"],
//         datasets : [
//             {
//                 label : "Weekday",
//                 data : [5,1,6,2,8]
//             },
//             {
//                 label : "Weekend",
//                 data : [7,3,2,8,0]
//             },
//             {
//                 label : "Frontend",
//                 data : [8,0,4,1,2]
//             }
//         ]
//     },
// });


const tt = new Typed("#tt",{
    strings : ["Min ga lar par","Nay Kaung lar","Sar Pee P lar ..."],
    typeSpeed : 200,
    backSpeed: 50,
    backDelay : 1000,
    loop:true,
    loopCount:3,
});