window.addEventListener("DOMContentLoaded",function(){var e,t,l,n=window;l=new URLSearchParams(n.location.search),e=l.get("pid")||localStorage.getItem("pid")||null,t=l.get("aff_id")||localStorage.getItem("aff_id")||null,e&&t&&(localStorage.setItem("pid",e),localStorage.setItem("aff_id",t));let d=document.querySelectorAll("#sellz-button");if(d)for(let i=0;i<d.length;i++)d[i].addEventListener("click",l=>{e&&t&&(n.location.href=`https://pay.sellz.co/vendor?pid=${e}&aff_id=${t}`)})});