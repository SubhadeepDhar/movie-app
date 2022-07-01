import React from "react";
import Component from "./Components/Component";

function App() {
  return (
    <>
    <div className="header">
      
    </div>
      <div className="parent">
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rFohGkSUYokq1dbsEhRqNphI4KsgF1gmoQ&usqp=CAU"
          name="Avengers Endgame "
        />
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8JsT29wceDLECG6YpnazDUTTsHLYO5VLYjw&usqp=CAU"
          name="Captain Marvel 2 "
        />
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKC8RYus_ijeAh3uXiehhbdhvbpBnH_92M9A&usqp=CAU"
          name="DR. Strange Multiverse of Madness"
        />
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZuAG0H9AbP-V_Mg3pJasPxXx_GpusrpTCQ&usqp=CAU"
          name="Spider Man 3 "
        />
      </div>

      <div className="parent">
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKw9uyEw4YnDar09PZAlobEEv-lymEPZaxng&usqp=CAU"
          name="No WAy Home "
        />
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMLjYkRvDhZRPkClwDpUIBQNWE1kf96XAhA&usqp=CAU"
          name="Black Panther  "
        />
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCcOljKkcx1BNKGjNoZMSlrRGmQgTmdCI_w&usqp=CAU"
          name="Civil War "
        />
        <Component
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGyc1GIv5G52aAehg4_1XggwQWQ5t1KnE4Q&usqp=CAU"
          name="Eternals "
        />
      </div>
    </>
  );
}

export default App;