(()=>{"use strict";const e=((e,t,o,s)=>{let g="";return{getTitle:()=>"test",getDescription:()=>"description",getDueDate:()=>"tmorrow",getPriority:()=>1,getNote:()=>g,setNote:e=>g=e}})();console.log(e.getTitle()),console.log(e.getNote()),console.log(e.setNote("This is my note")),console.log(e.getNote())})();