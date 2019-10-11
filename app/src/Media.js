import React from 'react';
class Media extends React.Component{
    constructor(props) {
        super();
        this.state = {
            name: props.name,
            singer:props.singer,
            author:props.author,
            type:props.type,
            listen:props.listen,
            download:props.download,
            lyric:props.lyric,
            music:[
                {
                name: "Em của ngày hôm qua",
                singer:"Sơn Tùng MTP",
                author:"Sơn Tùng MTP",
                type:"Nhạc Pop",
                listen:"100.000",
                download:"1234",
                lyric: "Eh eh eh.. Em đang nơi nào...  Can you feel me. Can you feel me.... ", 
               
                },
                { 
                name:"Người Anh Em",
                singer:"Châu Khải Phong",
                author: "Nhạc Hoa, Lời Việt: Mạnh Thắng",
                type:"Nhạc Dance",
                listen:"163.005",
                download:"1121",
                lyric:"Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em......",
                
                }
                ]
        };
     this.next = this.next.bind(this);
    }
   
       next(state){
         var i=0;
        this.setState((state) => ({ 
            name:state.music[i].name,
            singer:state.music[i].singer,
            author:state.music[i].author,
            type:state.music[i].type,
            listen:state.music[i].listen,
            download:state.music[i].download,
            lyric:state.music[i].lyric,
         }));
       }
    render()
    {  
        return(
            <div style={{textAlign:"center"}}>
              <h1 style={{color:"blue"}}>{this.state.name}  -{this.state.singer}</h1>
              
              <div style={{paddingLeft:"400px"}} >
               <h6 style={{float:"left",marginRight:"5px"}}>Sáng Tác:{this.state.author} |</h6>
               <h6 style={{float:"left",marginRight:"5px"}}> Thể Loại:{this.state.type}|</h6>
               <h6 style={{float:"left",marginRight:"5px"}}>Lượt Nghe:{this.state.listen}|</h6>
               <h6 style={{float:"left",marginRight:"5px"}}>Lượt Tải:{this.state.download}</h6>
             </div>
             <div style={{clear:"left",marginBottom:"50px"}}>
             <img src={require('./play.png')} alt="Beautifull" width="3%" style={{marginRight:"10px"}}/>
             <a href="#" onClick={this.next}> <img src={require('./next.png')} alt="Beautifull" width="2%"style={{marginRight:"10px"}}/></a>
             <img src={require('./progress_bar.jpg')} alt="Beautifull" width="10%"style={{marginRight:"10px"}}/> 00:34
             <img src={require('./repeat.png')} alt="Beautifull" width="2%"style={{marginRight:"10px"}}/>
             <img src={require('./shuffle.png')} alt="Beautifull" width="2%"style={{marginRight:"10px"}}/>
             <img src={require('./loa.png')} alt="Beautifull" width="2%"style={{marginRight:"10px"}}/>
              </div>
              <div> {this.state.lyric}</div>

            </div>
        )
    }
}
Media.defaultProps = {
   
    name:"Người Anh Em",
    singer:"Châu Khải Phong",
    author: "Nhạc Hoa, Lời Việt: Mạnh Thắng",
    type:"Nhạc Dance",
    listen:"163.005",
    download:"1121",
    lyric:"Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em......",
    
};
export default Media;