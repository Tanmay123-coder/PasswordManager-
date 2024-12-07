function maskPassword(pass){
    let str="";
    for (let index = 0; index < pass.length; index++) {
     
        str+="*";
    }
    return str;
}


const deletePassword=(website)=>{
    console.log("delete")
    let data=localStorage.getItem("passwords");
    let arr=JSON.parse(data);
    arrUpdated=arr.filter((e)=>{
        return e.website!=website;
    })
    localStorage.removeItem(website); 
    localStorage.setItem("passwords",JSON.stringify(arrUpdated));
    alert('arrey deleted')
    showPassword();
}
const showPassword=()=>{

let table=document.querySelector("table")
let data=localStorage.getItem("passwords")
     if(data==null){
      table.innerHTML="no Data to Show"
     }else{
       table.innerHTML=` <tr>
                <th>website</th>
                <th>UserName</th>
                <th>Password</th>
                <th>delete</th>
              </tr>`
       
    let arr=JSON.parse(data);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        
     str=`  <tr>
    <td>${element.website}</td>
     <td>${element.username}</td>
     <td>${maskPassword(element.password)}</td>
    <td><button class="btn" onclick="deletePassword('${element.website}')">Delete</button></td>
    </tr>`
    table.innerHTML=table.innerHTML+str;
    }
    }
    website.value="";
    username.value="";
    password.value="";
}
showPassword()
document.querySelector('.btn').addEventListener('click',(e)=>{
    e.preventDefault()

    console.log(username.value,password.value)
    let passwords= localStorage.getItem('passwords');
    console.log(passwords);
    if(passwords==null){
        let json=[];
        json.push({website:website.value,username:username.value,password:password.value})
      
        localStorage.setItem("passwords",JSON.stringify(json))
    }else{
        let json=JSON.parse(localStorage.getItem('passwords'))
        json.push({website:website.value,username:username.value,password:password.value});
        
        localStorage.setItem("passwords",JSON.stringify(json));
       showPassword()
    }
})