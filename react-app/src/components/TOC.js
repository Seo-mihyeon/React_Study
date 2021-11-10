import React, { Component } from 'react';

class TOC extends Component{
    render(){
      // App.js 에서 배열 형식으로 지정했기 때문에 while문을 사용한다.
      var lists = []; // 가져온 값을 배열에 다시 넣는다.
      var data = this.props.data  //App.js에 props 의 값을 가져온다.
      var i = 0;
      while(i < data.length){
        // contents props의 id 값을 불러온다.
        // key 값을 안적어줄 경우에는 console 창에 오류 발생사항이 보이기 때문에
        // key 값을 설정해줘야한다.
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i +1;
      }
      
      return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      )
    }
  }