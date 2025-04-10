const inner_scrollers = document.querySelectorAll(".inner-scroller");
const scrollers = document.querySelectorAll(".scroller");


async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  

function addSkills(){
    getData("skills.json").then((data)=>{
        inner_scrollers.forEach((scr) =>{
            data.forEach((skl) => {
                scr.innerHTML += `
            <div class="skill">
                <i class="${skl.icon_class}"></i>
                <h6 class="ubuntu-medium">${skl.name}</h6>
            </div>
            `
            })
        })
    })
}


async function addAnimation(){
    const data = await getData("skills.json");
    scrollers.forEach((scroller) =>{
        const inner_scroller = scroller.querySelector(".inner-scroller");

        const skills = Array.from(inner_scroller.children);
        
        skills.forEach((skill) =>{
            const skill_clone = skill.cloneNode(true);
            inner_scroller.appendChild(skill_clone);
            
        })
    })
}


async function initPage() {
    await addSkills();     // استنى تحميل المهارات
    addAnimation();        // بعد ما تنضاف للصفحة، كررهم
}

initPage();