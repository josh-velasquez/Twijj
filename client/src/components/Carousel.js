import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import button_left from "../assets/button_left.png"
import button_right from "../assets/button_right.png"
import placeholder1 from "../assets/placeholder1.png"
import placeholder2 from "../assets/placeholder2.png"
import placeholder3 from "../assets/placeholder3.png"
import placeholder4 from "../assets/placeholder4.png"
import placeholder5 from "../assets/placeholder5.png"
import thumbs from "../assets/thumbnails.json"

import "./style.css";

class Carousel extends React.Component {
	
moveLeft() {
  console.log("here");
	var m = document.getElementById('m');
	var l1 = document.getElementById('l1');
	var l2 = document.getElementById('l2');
	var r1 = document.getElementById('r1');
	var r2 = document.getElementById('r2');
	
	var mt = 30;
	var ml = 600;
	var mh = 300;
	var mw = 530;
	
	var l1t = 40;
	var l1l = 300;
	var l1h = 250;
	var l1w = 444;
	
	var l2t = 50;
	var l2l = 50;
	var l2h = 200;
	var l2w = 355;
		
	var r1t = 40;
	var r1l = 986;
	var r1h = 250;
	var r1w = 444;
		
	var r2t = 50;
	var r2l = 1325;
	var r2h = 200;
	var r2w = 355;
		
	var id = setInterval(frame, 20);
	function frame() {
		if(mt==40 && ml==300 && mh==250 && mw==444) {
			clearInterval(id);
		} else {
			if(mt<40) {mt++;} else {mt=40;}
			if(ml>300) {ml=ml-30;} else {ml=300;}
			if(mh>250) {mh=mh-5} else {mh=250;}
			if(mw>444) {mw=mw-9} else {mw=444;}
			
			if(l1t<50) {l1t++;} else {l1t=50;}
			if(l1l>50) {l1l=l1l-25;} else {l1l=50;}
			if(l1h>200) {l1h=l1h-5} else {l1h=200;}
			if(l1w>355) {l1w=l1w-9} else {l1w=355;}
			
			if(l2l<1325) {l2l=l2l+128;} else {l2l=1325;}
			
			if(r1t>30) {r1t--;} else {r1t=30;}
			if(r1l>600) {r1l=r1l-39;} else {r1l=600;}
			if(r1h<300) {r1h=r1h+5} else {r1h=300;}
			if(r1w<530) {r1w=r1w+9} else {r1w=530;}
			
			if(r2t>40) {r2t--;} else {r2t=40;}
			if(r2l>986) {r2l=r2l-34;} else {r2l=986;}
			if(r2h<250) {r2h=r2h+5} else {r2h=250;}
			if(r2w<444) {r2w=r2w+9} else {r2w=444;}
		
			m.style.top = mt+'px';
			m.style.left = ml+'px';
			m.style.height = mh+'px';
			m.style.width = mw+'px';
			
			l1.style.top = l1t+'px';
			l1.style.left = l1l+'px';
			l1.style.height = l1h+'px';
			l1.style.width = l1w+'px';
			
			l2.style.top = l2t+'px';
			l2.style.left = l2l+'px';
			l2.style.height = l2h+'px';
			l2.style.width = l2w+'px';
			
			r1.style.top = r1t+'px';
			r1.style.left = r1l+'px';
			r1.style.height = r1h+'px';
			r1.style.width = r1w+'px';
			
			r2.style.top = r2t+'px';
			r2.style.left = r2l+'px';
			r2.style.height = r2h+'px';
			r2.style.width = r2w+'px';
		}
	}
	m.style.zIndex = -1;
	l1.style.zIndex = -2;
	l2.style.zIndex = -2;
	r1.style.zIndex = 0;
	r2.style.zIndex = -1;
	
	document.getElementById('l2').id = 'rr2';
	document.getElementById('l1').id = 'll2';
	document.getElementById('m').id = 'll1';
	document.getElementById('r1').id = 'mm';
	document.getElementById('r2').id = 'rr1';
	
	document.getElementById('rr2').id = 'r2';
	document.getElementById('ll2').id = 'l2';
	document.getElementById('ll1').id = 'l1';
	document.getElementById('mm').id = 'm';
	document.getElementById('rr1').id = 'r1';
}

moveRight() {
	var m = document.getElementById('m');
	var l1 = document.getElementById('l1');
	var l2 = document.getElementById('l2');
	var r1 = document.getElementById('r1');
	var r2 = document.getElementById('r2');
	
	var mt = 30;
	var ml = 600;
	var mh = 300;
	var mw = 530;
	
	var l1t = 40;
	var l1l = 300;
	var l1h = 250;
	var l1w = 444;
	
	var l2t = 50;
	var l2l = 50;
	var l2h = 200;
	var l2w = 355;
		
	var r1t = 40;
	var r1l = 986;
	var r1h = 250;
	var r1w = 444;
		
	var r2t = 50;
	var r2l = 1325;
	var r2h = 200;
	var r2w = 355;
		
	var id = setInterval(frame, 20);
	function frame() {
		if(mt==40 && ml==986 && mh==250 && mw==444) {
			clearInterval(id);
		} else {
			if(mt<40) {mt++;} else {mt=40;}
			if(ml<986) {ml=ml+39;} else {ml=986;}
			if(mh>250) {mh=mh-5} else {mh=250;}
			if(mw>444) {mw=mw-9} else {mw=444;}
			
			if(l1t>30) {l1t--;} else {l1t=30;}
			if(l1l<600) {l1l=l1l+30;} else {l1l=600;}
			if(l1h<300) {l1h=l1h+5} else {l1h=300;}
			if(l1w<530) {l1w=l1w+9} else {l1w=530;}
			
			if(r2l>50) {r2l=r2l-128;} else {r2l=50;}
			
			if(r1t<50) {r1t++;} else {r1t=50;}
			if(r1l<1325) {r1l=r1l+34;} else {r1l=1325;}
			if(r1h>200) {r1h=r1h-5} else {r1h=200;}
			if(r1w>355) {r1w=r1w-9} else {r1w=355;}
			
			if(l2t>40) {l2t--;} else {l2t=40;}
			if(l2l<300) {l2l=l2l+25;} else {l2l=300;}
			if(l2h<250) {l2h=l2h+5} else {l2h=250;}
			if(l2w<444) {l2w=l2w+9} else {l2w=444;}
		
			m.style.top = mt+'px';
			m.style.left = ml+'px';
			m.style.height = mh+'px';
			m.style.width = mw+'px';
			
			l1.style.top = l1t+'px';
			l1.style.left = l1l+'px';
			l1.style.height = l1h+'px';
			l1.style.width = l1w+'px';
			
			l2.style.top = l2t+'px';
			l2.style.left = l2l+'px';
			l2.style.height = l2h+'px';
			l2.style.width = l2w+'px';
			
			r1.style.top = r1t+'px';
			r1.style.left = r1l+'px';
			r1.style.height = r1h+'px';
			r1.style.width = r1w+'px';
			
			r2.style.top = r2t+'px';
			r2.style.left = r2l+'px';
			r2.style.height = r2h+'px';
			r2.style.width = r2w+'px';
		}
	}
	m.style.zIndex = -1;
	l1.style.zIndex = 0;
	l2.style.zIndex = -1;
	r1.style.zIndex = -2;
	r2.style.zIndex = -2;
	
	document.getElementById('l2').id = 'll1';
	document.getElementById('l1').id = 'mm';
	document.getElementById('m').id = 'rr1';
	document.getElementById('r1').id = 'rr2';
	document.getElementById('r2').id = 'll2';
	
	document.getElementById('rr2').id = 'r2';
	document.getElementById('ll2').id = 'l2';
	document.getElementById('ll1').id = 'l1';
	document.getElementById('mm').id = 'm';
	document.getElementById('rr1').id = 'r1';
}
  
  render() {
  return (
    <div class="carousel">
      <img id="leftArrow" class="leftClick" src={button_left} onClick={() => this.moveRight()}/>
    <img id="rightArrow" class="rightClick" src={button_right} onClick={() => this.moveLeft()}/>
      
      <img id="l2" class="left2" src={thumbs.overwatch}/>
      <div class="left2Click" onClick={() => this.moveRight()}></div>
      
    <img id="l1" class="left1" src={thumbs.csgo}/>
    <div class="left1Click" onClick={() => this.moveRight()}></div>
      
    <img id="m" class="middle" src={thumbs.leagueoflegends} onClick=""/>
      
      <img id="r1" class="right1" src={thumbs.pubg}/>
      <div class="right1Click" onClick={() => this.moveLeft()}></div>
      
      <img id="r2" class="right2" src={thumbs.minecraft}/>
    <div class="right2Click" onClick={() => this.moveLeft()}></div>
    </div>
    );
  }
}

export default Carousel;
