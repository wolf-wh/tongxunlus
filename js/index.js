window.onload=function(){
    let arr =[
        {id:1,name:'王慧杰',tell:'15735654079',pingyin:'wanghuijie'},
        {id:2,name:'慧杰',tell:'15735654079',pingyin:'huijie'},
        {id:3,name:'杰',tell:'15735654079',pingyin:'jie'},
        {id:4,name:'贾柯晶',tell:'15735654079',pingyin:'jiakejing'},
        {id:5,name:'柯晶',tell:'15735654079',pingyin:'kejing'},
        {id:6,name:'胖晶',tell:'15735654079',pingyin:'pangjing'},
        {id:7,name:'大哥',tell:'15735654079',pingyin:'dage'},
        {id:8,name:'王慧杰',tell:'15735654079',pingyin:'wanghuijie'},
        {id:9,name:'慧杰',tell:'15735654079',pingyin:'huijie'},
        {id:10,name:'杰',tell:'15735654079',pingyin:'jie'},
        {id:11,name:'贾柯晶',tell:'15735654079',pingyin:'jiakejing'},
        {id:12,name:'柯晶',tell:'15735654079',pingyin:'kejing'},
        {id:13,name:'胖晶',tell:'15735654479',pingyin:'pangjing'},
        {id:14,name:'大哥',tell:'15735654079',pingyin:'dage'},
    ];
    localStorage.setItem('tunxunlu',JSON.stringify(arr));
    let data = JSON.parse(localStorage.getItem('tunxunlu'));
    let box = document.querySelector('dl');
    let ce  = document.querySelector('ul');
    pai(data);
    function pai(ele){
        box.innerHTML='';
        ce.innerHTML='';
        let obj = {};
        ele.forEach(element => {//把每个首字母作为属性给了对象obj，
            let fristChar = element.pingyin.trim().charAt().toUpperCase();
        //去空，首字母，转换为大写
            if(!obj[fristChar]){//数组下标
                obj[fristChar]=[];
            }
            obj[fristChar].push(element);
        });
        let keys = Object.keys(obj).sort();//对象的属性
        keys.forEach(element => {
            box.innerHTML += `<dt>${element}</dt>`;
            ce.innerHTML +=  `<li>${element}</li>`
            obj[element].forEach(ele=>{
                box.innerHTML +=`<dd><a href="tel:${ele.tell}">${ele.name}</a></dd>`
            })
        });
    }
    let firstDt = document.querySelector('.firstBox');
    let boxBig = document.querySelector('.topss');
    let heights = firstDt.offsetHeight + boxBig.offsetHeight;
    let dds = document.getElementsByTagName('dt');
    let arr1 = [];
    Array.prototype.forEach.call(dds,function(element){
        arr1.push(element.offsetTop);
    });
    window.addEventListener('scroll',function(){
        let scrolls = document.body.scrollTop || document.documentElement.scrollTop;
        arr1.forEach((elem,index) =>{
            if(scrolls + heights >= elem){
                firstDt.innerText = dds[index].innerText;
            }
        })
    })
    let search = document.querySelector('input');
    search.addEventListener('input',function(){
        let c = this.value.trim();
        let cObj = data.filter(element => element.pingyin.includes(c)||element.name.includes(c)||element.tell.includes(c));
        pai(cObj);
    })
}