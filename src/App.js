import "./App.css"
function App() {
let a=[
  {"name":"Dallas Farrell","Dept":"Administrator","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/19.jpg"        ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"Ty Skinner","Dept":"Account Manager","ID":"V23HFS1-A2","Course":"FS","pic":"https://randomuser.me/api/portraits/men/80.jpg"          ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"Mara Benitez","Dept":"Account Representative","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/20.jpg" ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"Justice Boyle","Dept":"Account Representative","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/11.jpg","qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"Aliya Cannon","Dept":"Director","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/16.jpg"               ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"Archie Wells","Dept":"Manager","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/81.jpg"                ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"Malachi Shields","Dept":"Analyst","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/76.jpg"             ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
  {"name":"River Hancock","Dept":"Web Developer","ID":"V23HFS1-A1","Course":"FS","pic":"https://randomuser.me/api/portraits/men/18.jpg"         ,"qr":"https://i.postimg.cc/8c6cD1PB/qrcode.png"},
       
]

  return (
    <div className="con">
      {
        a.map((item)=>{
          return(
          <div className="id-card">
            <div className="img-div">
            <img src={item.pic} alt=""/>
            </div>
            <h1 className="text">{item.name}</h1>
            <p>{item.Dept}</p>
            <div className="bottom">
                <p className="id">{item.ID}</p>
                <div className="qr-code">
                <img src={item.qr} alt=""/>
                </div>
              
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default App