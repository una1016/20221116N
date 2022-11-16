var face_y = []
var face_x = []
var face_size = []
var face_num = 20

var song
var songIsplay=false //設定此變數為假(false)，收到按下滑鼠把變數改為"真"(true)
var amp
var vol
function preload(){
  song = loadSound("overdose.mp3");

}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}
function setup() {
  createCanvas(windowWidth, windowHeight); //畫面為整個螢幕
  angleMode(DEGREES)
  for(var i=0;i<face_num;i++){
  face_size[i] = random(100,400)
  face_x[i] = random(0,width)
  face_y[i] = random(0,height)
  }
}

function draw() {
  background(220);
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
    push()  
      var f_s = face_size[j]
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間

      fill("#FAC462") //膚色
      strokeWeight(5) //邊框粗細
      stroke(100)
      ellipse(f_s/7.5,f_s/2,f_s/7.5,f_s/15) //右腳
      ellipse(-f_s/7.5,f_s/2,f_s/7.5,f_s/15) //左腳

      ellipse(f_s/2,f_s/7.5,f_s/10,f_s/5) //右手
      ellipse(-f_s/2,f_s/7.5,f_s/10,f_s/5) //左手
      
      //頭毛
      fill("#e5383b")
      ellipse(0,-f_s/2,f_s/16,f_s/8) 
      ellipse(-f_s/20,-f_s/2.05,f_s/18,f_s/9)
      ellipse(f_s/20,-f_s/2.05,f_s/18,f_s/9)

      fill("#FAC462")
      stroke(100)
      ellipse(0,0,f_s)  //臉



      fill("#FDAFAF")
      noStroke()
      ellipse(f_s/3,f_s/30,f_s/10,f_s/20) //右腮紅橢圓
      ellipse(-f_s/3,f_s/30,f_s/10,f_s/20) //左腮紅橢圓

      //左眼
      fill(0)
      ellipse(-f_s/5.2+map(mouseX/3,0,width,-f_s/40,f_s/12),-f_s/5.2+map(mouseY/3,0,height,-f_s/40,f_s/12),f_s/10)
      fill(255)
      ellipse(-f_s/5.7+map(mouseX/3,0,width,-f_s/40,f_s/12),-f_s/5.8+map(mouseY/3,0,height,-f_s/40,f_s/12),f_s/40)
      ellipse(-f_s/5.4+map(mouseX/3,0,width,-f_s/40,f_s/12),-f_s/5.4+map(mouseY/3,0,height,-f_s/40,f_s/12),f_s/40)

      //右眼
      fill(0)
      ellipse(f_s/5.8+map(mouseX/3,0,width,-f_s/40,f_s/12),-f_s/4.8+map(mouseY/3,0,height,-f_s/40,f_s/12),f_s/10)
      fill(255)
      ellipse(f_s/5.7+map(mouseX/3,0,width,-f_s/40,f_s/12),-f_s/5+map(mouseY/3,0,height,-f_s/40,f_s/12),f_s/40)
      ellipse(f_s/5.4+map(mouseX/3,0,width,-f_s/40,f_s/12),-f_s/5.4+map(mouseY/3,0,height,-f_s/40,f_s/12),f_s/40)

      //嘴
      stroke(0)
      strokeWeight(3)
      fill("#e27396")

      beginShape()
      vertex(0,0)
      vertex(-f_s/15,f_s/25)
      vertex(0,f_s/10)
      vertex(f_s/15,f_s/25)
      vertex(0,0)
      endShape()


      // ellipse(f_s/50,f_s/7,f_s/5,f_s/10)
      

      // fill(255,0,0)
      // arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      // fill("#FAC462")

      // if(mouseIsPressed)
      // {   //mouseIsPressed為true，代表有按下滑鼠
      //   arc(0,f_s/4-1,f_s/2,f_s/10,0,180)   //上弧
      // }
      // else
      // {   //mouseIsPressed為false，代表沒有按下滑鼠
      //   arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //上弧
      // }


      if(!songIsplay){
        fill("#FAC462")
        strokeWeight(5) //邊框粗細
        stroke(100)
        ellipse(f_s/2,f_s/7.5,f_s/10,f_s/5) //右手
        ellipse(-f_s/2,f_s/7.5,f_s/10,f_s/5) //左手
      }
      else{
        vol = amp.getLevel() //取得聲音值(值為0~1之間)
       console.log(vol)
        fill("#FAC462")
        strokeWeight(5) //邊框粗細
        stroke(100)
        ellipse(f_s/2,f_s/7.5,map(vol,0,0.5,f_s/6,f_s/15),f_s/5) //右手
        ellipse(-f_s/2,f_s/7.5,map(vol,0,0.5,f_s/6,f_s/15),f_s/5) //左手

      //  ellipse(f_s/50,f_s/7,f_s/5,map(vol,0,0.5,f_s/6,f_s/15))
      }
      
      noFill()


      
    pop()

  }
}

  function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}

