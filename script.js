console.log("hyy");
const newnote_button=document.querySelector(".addnote-btn");
const note_container=document.querySelector(".note-container");


// for New note

newnote_button.addEventListener("click",(()=>{
    // alert("hyy")
    
    const note_box=document.createElement("div");
    note_box.classList.add("note");
    note_container.appendChild(note_box);

    const note_header=document.createElement("div")
    note_header.classList.add("note-header");
    note_header.innerHTML=`
    <input type="text" class="title" placeholder="Enter Title"/>
    `
    note_box.appendChild(note_header);
    
    
        
        const note_menubar=document.createElement("h3");
        note_menubar.classList.add('note_menubar');
		note_menubar.innerHTML = '&#x2026';
		note_header.appendChild(note_menubar); 
        
        const note_points_container=document.createElement("div")
        note_points_container.classList.add("note_points_container");
        note_box.appendChild(note_points_container);

        const enter_note_click=document.createElement("div")
        enter_note_click.classList.add("enter_note");
        enter_note_click.innerHTML=`
        <textarea class="note-write-area" name="note-write-area" placeholder="Enter Note"></textarea>
        `
        note_box.appendChild(enter_note_click);
        
  //  for Menu Bar icon
        const menubar_option_holder=document.createElement("div");
         menubar_option_holder.classList.add("menubar_option_holder");
         enter_note_click.appendChild(menubar_option_holder);

         const menubar_option_box=document.createElement("div");
         menubar_option_box.classList.add("menubar_option_box");
         menubar_option_holder.appendChild(menubar_option_box);

         const menubar_colorchange=document.createElement("div");
         menubar_colorchange.classList.add("menubar_colorchange");
         menubar_colorchange.innerText="Change Background"
         menubar_option_box.appendChild(menubar_colorchange);

         const menubar_colors=document.createElement("div");
         menubar_colors.classList.add("menubar_colors");
         menubar_colors.innerHTML=
         `<div class="color_btn" data-color="#ffffff" style="background:#ffffff;"></div>
         <div class="color_btn" data-color="#cce8e4" style="background:#cce8e4;"></div>
         <div class="color_btn" data-color="#faf1db" style="background:#faf1db;"></div>
         <div class="color_btn" data-color="#fde9d9" style="background:#fde9d9;"></div>
         <div class="color_btn" data-color="#cbd2d6" style="background:#cbd2d6;"></div>
         `
         menubar_option_box.appendChild(menubar_colors);

         const note_delete = document.createElement('button');
		note_delete.classList.add('note_delete');
		note_delete.innerText = 'Delete';
        menubar_option_box.appendChild(note_delete);

        note_menubar.addEventListener("click",()=>{  
                  // alert("hy")
               menubar_option_holder.style.display="block"; 
            
        })
        note_menubar.addEventListener("dblclick",()=>{  
         menubar_option_holder.style.display="none"; 
             
        })
      const color_btn=document.querySelectorAll(".color_btn");

      color_btn.forEach(color =>{
        color.addEventListener("click",(event)=>{
            event.stopImmediatePropagation()
            let dataColor= color.getAttribute("data-color");
            // note_box.style.setProperty("--cardColor",dataColor);
            note_box.style.backgroundColor=dataColor;
            menubar_option_holder.style.display="none"; 
        })
      })
    
    //   for delete note

      note_delete.addEventListener("click",()=>{
        note_container.removeChild(note_box);
      })
     

}))