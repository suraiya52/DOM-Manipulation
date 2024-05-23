document.addEventListener("DOMContentLoaded",function(){
   const productInput=document.getElementById("product")
const submitAddButton=document.getElementById("submit-btn")
const addProductList=document.getElementById("product-list")

submitAddButton.addEventListener("click" , function (){
   const productName = productInput.value
   if(productName===""){
      alert("please input Item")
      return;
   }

   const productItem = document.createElement("li");

   productItem.innerHTML=`${productName} <button class="edit-btn"><i class="fas fa-edit"></i></button> 
   <button id="delete-btn"><i class="fas fa-trash-alt"></i></button> ` 
   
   addProductList.appendChild(productItem);
   productInput.value="";

     const deleteButton=productItem.querySelector("#delete-btn");
     deleteButton.addEventListener("click", function(){
   addProductList.removeChild(productItem);

      });
  });
  
});
