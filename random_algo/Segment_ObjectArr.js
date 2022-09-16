
//question - interview
// let cars = [
//   {
//     model: 'Ford',
//     color: 'Red',
//   },
//   {
//     model: 'Skoda',
//     color: 'Grey',
//   },
//   {
//     model: 'Ford',
//     color: 'Grey',
//   }
// ];

//answer
function transformData(datas){
  
   let model =[];
   let color=[];
    let arr = {
     model:[],
     color:[]
    };
 
 for(let i=0; i<datas.length; i++){
    datas[i].model = model.push(datas[i].model)
    datas[i].color = color.push(datas[i].color) 
 }
  arr.model.push([...new Set(model)]);
  arr.color.push([...new Set(color)]);
 return arr
}


 transformData(cars);

// expected result
// {
//  models: ['Ford', 'Skoda'],
//  colors: ['Red', 'Grey'],
//};