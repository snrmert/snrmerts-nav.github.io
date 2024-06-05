let gateleft = document.getElementById('resim1');
let gateright = document.getElementById('resim2');
let treeleft = document.getElementById('resim3');
let treeright = document.getElementById('resim4');

window.addEventListener("scroll", () => {
    var value = window.scrollY; 
      {
      let mesafe=window.scrollY;
      treeleft.style.left=mesafe*-1+'px';
      treeright.style.left=mesafe*1+'px';
      gateleft.style.left=mesafe*-1+'px';
      gateright.style.left=mesafe*1+'px';
      }
  });