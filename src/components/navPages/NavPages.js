import { useState } from "react";
import { useEffect } from "react";
import "./navPage.css";


const NavPages = ({ handlePages, cutArrays }) => {
  const [next, setNext] = useState(0);
  const [state, setstate] = useState(false)
  const [pageItem, setPageItem] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])


  useEffect(() => {
    if(cutArrays){
      if(cutArrays.length > 0){

        setPageItem(pageItem.filter(item=> item < cutArrays.length ))
      //  setPageItem(auxArray.map((item, index) => index))
      }
    }
  },[cutArrays])
 
  const handleNextPages=(n)=> {
     if(n === '>'){
        console.log('next')
        setPageItem(pageItem.map(item=> item+10))
     }else if(n === '<'&& pageItem[0]> 0){
        setPageItem(pageItem.map(item=> item-10))
     }
  }

  
 
  return (
    <nav className="nav__pages">
        {
          pageItem[0] > 9 && <li onClick={(e) => handleNextPages("<")}>{"<"}</li>
        }
        {pageItem.map((item, index) => {
          return <li key={item} onClick={(e) => handlePages(item)}>{item + 1}</li>;
        })}
        <li onClick={(e) => handleNextPages(">")}>{">"}</li>
    </nav>
  );
};

export default NavPages;

