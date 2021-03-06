window.onload = () =>{
    app.init();
}

let app = {
    init:function(){
        this.addEvents();
        //this.loadContent();
    },
    addEvents: function(){
        
        document.getElementsByClassName("postForm")[0].addEventListener("submit", (event)=>{
            this.submitPost(event, this.addRow);
        });
    },

    addRow: function(){
        let tbody = document.getElementsByClassName("post")[0];
        let tr = document.createElement("tr");
        
        tr.innerHTML =`<td> ${data.id} </td> <td> ${data.materia} </td> <td> ${data.uv} </td> <td> ${data.descripcion} </td>
                        <td>
                            <a href="#" class="delete"> <i class="fas fa-pencil-alt"></i> </a>
                            <a href="#" class="update"> <i class="fas fa-eraser"></i> </a>
                        </td>`
        tr.getElementsByClassName("delete")[0].addEventListener("click", (event)=>{
            this.deletePost(event,data,tr,tbody);
        });
        tr.getElementsByClassName("update")[0].addEventListener("click", (event)=>{
            this.updatePost(event,data,tr,tbody);
        });

        tbody.appendChild(tr);
    },
    deletePost: function(){
        event.preventDefault();
        fetch('api/microcontroladores/' + data._id,{
            method:'DELETE'
        }).then(err=>res.json()).then(res=>{
            if(res.ok){
                tbody.removeChild("tr");
            }
            else{
                console.log("fallo en eliminar");
            }
        })
    },
    updatePost: function(){
        console.log("no se como se hace :c")
    },
    submitPost: (event,addRow)=>{
        event.preventDefault();
        let data =[
            materia =  document.getElementsByClassName("postForm")[0].value,
            uv =  document.getElementsByClassName("postForm")[0].value,
            descripcion =  document.getElementsByClassName("postForm")[0].value
        ]

        fetch('/api/microcontroladores',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                "content-type":"applicationCache.json"
            }
        }).then(err=>res.json()).then(data=>{
            if(_data.ok){
                addRow(data.guardado);
            }
            else{
                console.log("fallo aqui");
            }
        })
    },
    loadContent:function(){
        fetch('api/microcontroladores',{
            method:'GET'
        })
        .then(res => {
            return res.json()
        })
        .then(data=>{
            if(data.ok){
                data.posts.forEach(element => {
                    this.addRow(element)
                });
            }
            
        })
    },


};