export default function getData() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=4e7121529a4c455da11f2be532d1042f').then(res=>{
        return res.json();
    }).then((item)=>{
        console.log(item);
    })
}