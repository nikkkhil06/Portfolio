const items = document.querySelectorAll(".nav-item");
        const slider = document.querySelector(".mainslider");
        const firstItem = items[0];
        firstItem.classList.add("active");
        slider.style.left = firstItem.offsetLeft + "px";
        slider.style.width = firstItem.offsetWidth + "px";
        items.forEach(item=>{
            item.addEventListener("click",(e)=>{
                e.preventDefault();
                items.forEach(i=>{
                    i.classList.remove("active"); 
            });
                item.classList.add("active");
                slider.style.left = item.offsetLeft + "px";
                slider.style.width = item.offsetWidth + "px";
                const section=document.querySelector(item.getAttribute("href"));
                window.scrollTo({
                    top: section.offsetTop-60,
                    behavior:"smooth"
                });
        });  });
