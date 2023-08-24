const toggleProjects = () => {
    console.log("clicked button");
    const offscreen = "offscreen";
    const dashboard = document.getElementById("dashboard");
    const hasOffset = dashboard.hasAttribute(offscreen);
    if(hasOffset){
        //remove offset attr
        dashboard.removeAttribute(offscreen);
    } else{
        //add the offset attr
        dashboard.setAttribute(offscreen, "");
    }
    
}

const toggleProjects2 = () => {
    console.log("clicked button");
    const offscreen2 = "offscreen2";
    const dashboard2 = document.getElementById("experience");
    const hasOffset2 = dashboard2.hasAttribute(offscreen2);
    if(hasOffset2){
        //remove offset attr
        dashboard2.removeAttribute(offscreen2);
    } else{
        //add the offset attr
        dashboard2.setAttribute(offscreen2, "");
    }
    
}

const toggleProjects3 = () => {
    console.log("clicked button");
    const offscreen3 = "offscreen3";
    const dashboard3 = document.getElementById("education");
    const hasOffset3 = dashboard3.hasAttribute(offscreen3);
    if(hasOffset3){
        //remove offset attr
        dashboard3.removeAttribute(offscreen3);
    } else{
        //add the offset attr
        dashboard3.setAttribute(offscreen3, "");
    }
    
}